import fs from "node:fs";
import path from "node:path";
import { CITIES } from "../src/data/cities";

interface ImageManifestEntry {
  slug: string;
  filename: string;
  hubFilename: string;
  sha256: string;
  personType: string;
  landmark: string;
  prompt: string;
}

const manifestPath = path.join(process.cwd(), "src", "data", "image-manifest.json");
if (!fs.existsSync(manifestPath)) {
  console.error("ERROR: src/data/image-manifest.json not found.");
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8")) as ImageManifestEntry[];
const hashes = new Set<string>();
const filenames = new Set<string>();
const slugs = new Set<string>();

for (const entry of manifest) {
  if (!entry.slug || !entry.filename || !entry.sha256) {
    console.error(`ERROR: Invalid manifest entry: ${JSON.stringify(entry)}`);
    process.exit(1);
  }
  if (hashes.has(entry.sha256)) {
    console.error(`ERROR: Duplicate SHA-256 hash ${entry.sha256} for ${entry.slug}`);
    process.exit(1);
  }
  if (filenames.has(entry.filename)) {
    console.error(`ERROR: Duplicate filename ${entry.filename} for ${entry.slug}`);
    process.exit(1);
  }
  hashes.add(entry.sha256);
  filenames.add(entry.filename);
  slugs.add(entry.slug);
}

for (const city of CITIES) {
  if (!slugs.has(city.slug)) {
    console.error(`ERROR: Missing image manifest entry for city "${city.slug}"`);
    process.exit(1);
  }
}

console.log(`check-images passed: ${manifest.length} unique city images verified.`);
