export interface EmiInput {
  principal: number;
  annualRatePercent: number;
  tenureMonths: number;
}

export interface EmiResult {
  monthlyEmi: number;
  totalInterest: number;
  totalPayment: number;
  principalPercent: number;
  interestPercent: number;
}

export function calculateEmi(input: EmiInput): EmiResult | null {
  const { principal, annualRatePercent, tenureMonths } = input;
  if (
    !Number.isFinite(principal) ||
    !Number.isFinite(annualRatePercent) ||
    !Number.isFinite(tenureMonths) ||
    principal <= 0 ||
    annualRatePercent < 0 ||
    tenureMonths <= 0
  ) {
    return null;
  }

  const months = Math.round(tenureMonths);
  const monthlyRate = annualRatePercent / 12 / 100;

  let monthlyEmi: number;
  if (monthlyRate === 0) {
    monthlyEmi = principal / months;
  } else {
    const factor = Math.pow(1 + monthlyRate, months);
    monthlyEmi = (principal * monthlyRate * factor) / (factor - 1);
  }

  const totalPayment = monthlyEmi * months;
  const totalInterest = Math.max(0, totalPayment - principal);
  const principalPercent = totalPayment > 0 ? (principal / totalPayment) * 100 : 0;
  const interestPercent = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;

  return {
    monthlyEmi: Math.round(monthlyEmi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment),
    principalPercent: Number(principalPercent.toFixed(1)),
    interestPercent: Number(interestPercent.toFixed(1)),
  };
}

export function formatIndianCurrency(amount: number): string {
  if (!Number.isFinite(amount)) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}
