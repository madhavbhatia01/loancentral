import { CITIES } from "../src/data/cities";
import { getCityArticle } from "../src/data/city-articles";

function getShingles(text: string, k = 3): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const shingles = new Set<string>();
  for (let i = 0; i <= words.length - k; i++) {
    shingles.add(words.slice(i, i + k).join(" "));
  }
  return shingles;
}

function jaccardSimilarity(a: Set<string>, b: Set<string>): number {
  let intersection = 0;
  for (const item of a) {
    if (b.has(item)) intersection++;
  }
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

const articles = CITIES.map((city, idx) => {
  const article = getCityArticle(city, idx);
  const fullText = [
    article.quickAnswer,
    ...article.sections.map((s) => `${s.heading} ${s.paragraphs.join(" ")}`),
    ...article.faqs.map((f) => `${f.question} ${f.answer}`),
  ].join(" ");
  return { slug: city.slug, shingles: getShingles(fullText) };
});

let maxSim = 0;
let maxPair = "";

for (let i = 0; i < articles.length; i++) {
  for (let j = i + 1; j < articles.length; j++) {
    const sim = jaccardSimilarity(articles[i].shingles, articles[j].shingles);
    if (sim > maxSim) {
      maxSim = sim;
      maxPair = `${articles[i].slug} vs ${articles[j].slug}`;
    }
    if (sim > 0.3) {
      console.error(
        `ERROR: Content similarity ${(sim * 100).toFixed(1)}% exceeds 30% between ${articles[i].slug} and ${articles[j].slug}`
      );
      process.exit(1);
    }
  }
}

console.log(
  `check-content passed: ${articles.length} city articles verified (max similarity ${(maxSim * 100).toFixed(1)}% for ${maxPair}).`
);
