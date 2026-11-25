import assert from "node:assert/strict";
import { calculateEmi, formatIndianCurrency } from "../src/lib/emi";

// Test 1: Standard reducing balance EMI
const res1 = calculateEmi({ principal: 100000, annualRatePercent: 12, tenureMonths: 12 });
assert.ok(res1 !== null, "Expected valid EMI result");
assert.equal(res1.monthlyEmi, 8885);
assert.equal(res1.totalPayment, 106619);
assert.equal(res1.totalInterest, 6619);

// Test 2: Zero interest rate
const res2 = calculateEmi({ principal: 60000, annualRatePercent: 0, tenureMonths: 12 });
assert.ok(res2 !== null, "Expected valid zero-interest EMI result");
assert.equal(res2.monthlyEmi, 5000);
assert.equal(res2.totalInterest, 0);
assert.equal(res2.totalPayment, 60000);

// Test 3: Invalid inputs return null
assert.equal(calculateEmi({ principal: 0, annualRatePercent: 12, tenureMonths: 12 }), null);
assert.equal(calculateEmi({ principal: 50000, annualRatePercent: -1, tenureMonths: 12 }), null);
assert.equal(calculateEmi({ principal: 50000, annualRatePercent: 12, tenureMonths: 0 }), null);

// Test 4: Indian currency formatting
assert.equal(formatIndianCurrency(106619), "₹1,06,619");
assert.equal(formatIndianCurrency(5000), "₹5,000");

console.log("All EMI unit tests passed!");
