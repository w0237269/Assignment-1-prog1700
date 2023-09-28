"use strict";
let readlineSync = require('readline-sync');

// DO NOT EDIT: The main function to house our program code
function main() 
{
    // Input
    let loan = parseFloat(readlineSync.question("Enter loan amount: "));
    let interestRate = parseFloat(readlineSync.question("Enter interest rate (annual): "));
    let years = parseFloat(readlineSync.question("Enter number of years: "));

    // Process
    let weeklyInterestRate = (interestRate / 100) / 52; // Calculate weekly interest rate as a decimal
    let numPayments = years * 52; // Total number of weekly payments
    let weeklyPayment = (loan * weeklyInterestRate) / (1 - Math.pow(1 + weeklyInterestRate, -numPayments));

    // Output
    console.log("Your weekly payment will be: $" + weeklyPayment.toFixed(2));
}
    // DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
 main();
}