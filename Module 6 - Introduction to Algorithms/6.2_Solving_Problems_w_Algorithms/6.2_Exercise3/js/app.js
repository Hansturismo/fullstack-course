function startRepaymentPlan(loanAmount, lowestMonthlyPayment, annualInterest) {
  console.log(`Loan sum: ${loanAmount} NOK`);

  console.log(`Monthy payment: ${lowestMonthlyPayment} NOK`);
  let howManyMonthsTillPaid = loanAmount / lowestMonthlyPayment;
  console.log(`Loan will be paid in: ${howManyMonthsTillPaid} months `);
  let interest = Math.round(
    loanAmount * annualInterest * (howManyMonthsTillPaid / 12),
  );
  console.log(`Total after interest: ${interest} NOK`);
  let loanInfo = [howManyMonthsTillPaid, interest];
  return loanInfo;
}

let loanAmount = 100000;
let lowestMonthlyPayment = 4000;
let annualInterest = 6.2;

console.log(
  startRepaymentPlan(loanAmount, lowestMonthlyPayment, annualInterest),
);
