import { City, FaqItem } from "./cities";

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
}

export interface CityArticle {
  quickAnswer: string;
  sections: ArticleSection[];
  faqs: FaqItem[];
  closingNote: string;
}

const INTRO_ANGLES = [
  (c: City) =>
    `Living and working in ${c.name} comes with its own financial rhythm. Between ${c.localAngles.commuteAndLiving}, unexpected expenses rarely wait for payday. Whether you are based around ${c.localAngles.neighbourhoods}, a personal loan can bridge a short-term gap when savings are tied up.`,
  (c: City) =>
    `For salaried households across ${c.name}, monthly budgets often balance rent, family responsibilities, and daily travel. With major workplaces spanning ${c.localAngles.employers}, residents frequently look for straightforward credit options without pledging gold or property.`,
  (c: City) =>
    `In ${c.name}, ${c.state}, steady employment across ${c.localAngles.employers} keeps household incomes predictable, yet sudden costs still arise. From ${c.localAngles.commonNeeds}, an unsecured personal loan offers a structured way to manage large bills over manageable monthly instalments.`,
  (c: City) =>
    `Across ${c.localAngles.neighbourhoods} and neighbouring parts of ${c.name}, working professionals often need timely funds for ${c.localAngles.commonNeeds}. Understanding how lenders evaluate applications in ${c.state} helps you borrow calmly and avoid unnecessary rejections.`,
  (c: City) =>
    `Managing cash flow in a busy city like ${c.name} means planning around both routine bills and surprises. Residents commuting through ${c.localAngles.commuteAndLiving} often prefer digital-first personal loans that let them handle ${c.localAngles.commonNeeds} without visiting a branch.`,
];

const WHO_APPLIES_ANGLES = [
  (c: City) =>
    `Salaried employees working with ${c.localAngles.employers} form the largest group of applicants in ${c.name}. Most lenders look for regular monthly salary credits into an active bank account, a stable residential address in ${c.state}, and a clean repayment track record.`,
  (c: City) =>
    `Young professionals living in rented flats near ${c.localAngles.neighbourhoods} often apply to cover ${c.localAngles.commonNeeds}. Married couples and joint families in ${c.name} also use personal loans to smooth out big seasonal or medical outlays without disturbing long-term deposits.`,
  (c: City) =>
    `Both private-sector staff and public-sector employees across ${c.name} regularly explore unsecured personal credit. Self-employed professionals with documented bank inflows may also qualify, depending on the lender's internal policy and verification checks.`,
  (c: City) =>
    `Applicants in ${c.name} range from early-career earners settling into ${c.localAngles.neighbourhoods} to mid-career parents handling ${c.localAngles.commonNeeds}. Eligibility depends on your lender and profile rather than a single fixed rule.`,
];

const DOCS_ANGLES = [
  (c: City) =>
    `Lenders serving ${c.name} typically ask for standard identity, address, and income proof. Keeping clear digital copies ready speeds up verification and reduces back-and-forth.`,
  (c: City) =>
    `Before starting an online application in ${c.name}, gather your KYC and salary records. Most RBI-regulated lenders verify these digitally through Aadhaar-linked OTP or bank statement checks.`,
  (c: City) =>
    `Paperwork for a personal loan in ${c.name} is usually minimal, provided your name and address match across your identity cards and bank account.`,
];

const STEPS_ANGLES = [
  (c: City) =>
    `Applying from ${c.name} takes just a few clear steps when you prepare your details beforehand. Always compare terms from regulated lenders before submitting formal consent.`,
  (c: City) =>
    `Most borrowers in ${c.name} complete their application online from home or during a break at work. Following a structured sequence helps prevent avoidable delays.`,
];

const CHECK_BEFORE_ANGLES = [
  (c: City) =>
    `Before accepting any loan offer in ${c.name}, pause and read the Key Fact Statement carefully. A few minutes of checking can save you from uncomfortable monthly obligations later.`,
  (c: City) =>
    `Every lender sets its own terms based on your credit profile and income stability in ${c.name}. Reviewing the full repayment schedule upfront keeps your household budget safe.`,
];

const ELIGIBILITY_TIPS_ANGLES = [
  (c: City) =>
    `If you plan to apply in ${c.name} soon, small habits make a noticeable difference. Lenders reward steady account behaviour and realistic borrowing requests.`,
  (c: City) =>
    `Strengthening your profile before applying in ${c.name} improves your chances of smooth approval and comfortable terms, which always depend on your lender and profile.`,
];

const MISTAKES_ANGLES = [
  (c: City) =>
    `Many borrowers in ${c.name} run into trouble not because of their income, but because of rushed decisions during an urgent need. Avoiding a few common pitfalls protects your credit score.`,
  (c: City) =>
    `When facing urgent ${c.localAngles.commonNeeds} in ${c.name}, it is tempting to click the first offer you see. Taking a moment to spot red flags keeps your finances secure.`,
];

export function getCityArticle(city: City, index: number): CityArticle {
  const i1 = index % INTRO_ANGLES.length;
  const i2 = (index + 1) % INTRO_ANGLES.length;
  const w1 = index % WHO_APPLIES_ANGLES.length;
  const w2 = (index + 2) % WHO_APPLIES_ANGLES.length;
  const d1 = index % DOCS_ANGLES.length;
  const s1 = index % STEPS_ANGLES.length;
  const c1 = index % CHECK_BEFORE_ANGLES.length;
  const e1 = index % ELIGIBILITY_TIPS_ANGLES.length;
  const m1 = index % MISTAKES_ANGLES.length;

  const quickAnswer = `Salaried and eligible residents in ${city.name}, ${city.state} can apply online for an unsecured personal loan to cover ${city.localAngles.commonNeeds}. Approval, interest rate, and tenure depend on your lender and profile, with verification handled through standard KYC and bank statement checks.`;

  const baseSections: ArticleSection[] = [
    {
      id: "overview",
      heading: `Understanding Personal Loans in ${city.name}`,
      paragraphs: [
        INTRO_ANGLES[i1](city),
        INTRO_ANGLES[i2](city),
        `Unlike secured loans that require property or fixed deposits as collateral, an unsecured personal loan relies on your income stability and repayment history. In ${city.name}, where ${city.localAngles.commuteAndLiving} shape daily expenses, borrowers value predictable monthly instalments that fit neatly alongside rent, groceries, and family commitments.`,
      ],
      callout: `Local context matters: lenders reviewing applications from ${city.name} look closely at consistent salary credits and verifiable residential details across ${city.state}.`,
    },
    {
      id: "who-applies",
      heading: `Who Usually Applies in ${city.name}`,
      paragraphs: [
        WHO_APPLIES_ANGLES[w1](city),
        WHO_APPLIES_ANGLES[w2](city),
      ],
      bullets: [
        `Salaried staff employed with ${city.localAngles.employers}`,
        `Working professionals living in ${city.localAngles.neighbourhoods}`,
        `Families and couples planning for ${city.localAngles.commonNeeds}`,
        `Self-employed individuals with verifiable income records, subject to lender policy`,
      ],
    },
    {
      id: "documents",
      heading: `Documents Commonly Asked For`,
      paragraphs: [
        DOCS_ANGLES[d1](city),
        `If you live in rented accommodation in ${city.name}, keep a valid rental agreement or utility bill handy in case your current address differs from your permanent ID.`,
      ],
      bullets: [
        `PAN Card for identity and tax verification`,
        `Aadhaar Card linked with your active mobile number for digital e-KYC`,
        `Recent bank statements reflecting regular salary credits`,
        `Current address proof for ${city.name} if different from your Aadhaar address`,
      ],
    },
    {
      id: "how-to-apply",
      heading: `How to Apply Step by Step`,
      paragraphs: [
        STEPS_ANGLES[s1](city),
        `Never share OTPs or pay any upfront cash fee to unknown agents. Legitimate RBI-regulated lenders deduct any applicable charges transparently as disclosed in the sanction letter.`,
      ],
      bullets: [
        `Check your monthly budget first using the EMI estimator below`,
        `Verify that the lender or platform is partnered with an RBI-regulated bank or NBFC`,
        `Complete digital KYC using your PAN and Aadhaar-linked mobile number`,
        `Upload or fetch recent bank statements for income verification`,
        `Review the Key Fact Statement, tenure, and total repayment before giving final consent`,
      ],
    },
    {
      id: "things-to-check",
      heading: `Things to Check Before Taking a Loan`,
      paragraphs: [
        CHECK_BEFORE_ANGLES[c1](city),
        `In ${city.name}, where living costs vary between ${city.localAngles.neighbourhoods}, choose a monthly instalment that leaves comfortable breathing room for emergencies and routine bills.`,
      ],
      bullets: [
        `Repayment comfort: ensure the monthly EMI fits easily within your net take-home pay`,
        `Total cost: look beyond the headline rate and check all disclosed fees in the Key Fact Statement`,
        `Tenure flexibility: shorter tenures reduce total interest, while longer tenures lower monthly outflow`,
        `Lender reputation: borrow only from RBI-regulated banks or registered NBFCs`,
      ],
    },
    {
      id: "eligibility-tips",
      heading: `Practical Tips to Improve Eligibility`,
      paragraphs: [
        ELIGIBILITY_TIPS_ANGLES[e1](city),
        `Maintaining a clean bank account without cheque bounces or frequent overdrafts signals financial discipline to any lender evaluating your ${city.name} application.`,
      ],
      bullets: [
        `Pay existing credit card dues and EMIs on time every month`,
        `Avoid submitting multiple loan applications across different apps at the same time`,
        `Keep your debt-to-income ratio balanced before requesting a new loan`,
        `Ensure your employer details and ${city.name} address are updated in your KYC records`,
      ],
    },
    {
      id: "mistakes-to-avoid",
      heading: `Common Mistakes to Avoid`,
      paragraphs: [
        MISTAKES_ANGLES[m1](city),
        `Borrowers in ${city.name} who take time to compare terms and read the fine print generally experience smoother repayments and fewer surprises.`,
      ],
      bullets: [
        `Applying blindly to multiple lenders, which triggers repeated hard credit inquiries`,
        `Ignoring prepayment or foreclosure terms before signing the agreement`,
        `Borrowing more than needed simply because a higher amount is offered`,
        `Trusting unverified callers who ask for advance processing money`,
      ],
    },
  ];

  // Rotate section order slightly for non-cloned structure
  const shift = index % 3;
  const sections =
    shift === 0
      ? baseSections
      : shift === 1
      ? [
          baseSections[0],
          baseSections[1],
          baseSections[3],
          baseSections[2],
          baseSections[4],
          baseSections[5],
          baseSections[6],
        ]
      : [
          baseSections[0],
          baseSections[2],
          baseSections[1],
          baseSections[4],
          baseSections[3],
          baseSections[6],
          baseSections[5],
        ];

  const faqs: FaqItem[] = [
    {
      question: `Who can apply for a personal loan in ${city.name}?`,
      answer: `Salaried employees and eligible individuals residing in ${city.name}, ${city.state} with regular bank-credited income and valid KYC documents can apply. Final eligibility depends on your lender and profile.`,
    },
    {
      question: `Do I need collateral or a guarantor in ${city.name}?`,
      answer: `No. Personal loans are unsecured, so you do not need to pledge property, gold, or fixed deposits. Approval is based on your income, credit history, and lender verification.`,
    },
    {
      question: `Can tenants living in rented flats in ${city.localAngles.neighbourhoods} apply?`,
      answer: `Yes. Many applicants in ${city.name} live in rented homes. Lenders may ask for a valid rent agreement or utility bill as current address proof alongside your PAN and Aadhaar.`,
    },
    {
      question: `What interest rate and loan amount can I get in ${city.name}?`,
      answer: `Loan amount, interest rate, and repayment tenure depend on your lender and profile, including your monthly income, existing obligations, and credit score. Always check the Key Fact Statement before accepting.`,
    },
    {
      question: `How can I check if a lender serving ${city.name} is genuine?`,
      answer: `Verify that the lending partner is an RBI-regulated bank or registered NBFC, read the Key Fact Statement, and never pay any cash or upfront fee before sanction.`,
    },
  ];

  const closingNote = `Whether you are managing ${city.localAngles.commonNeeds} in ${city.name} or planning ahead for your family, take time to compare regulated lenders, check your monthly comfort using the calculator below, and borrow only what you can repay comfortably.`;

  return {
    quickAnswer,
    sections,
    faqs,
    closingNote,
  };
}
