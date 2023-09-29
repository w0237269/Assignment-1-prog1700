"use strict";
let readlineSync = require('readline-sync');

// DO NOT EDIT: The main function to house our program code
function main() 
{
    // Input get user to input loan amount, intrest rate, and number of years borrowing.

    let loan = parseFloat(readlineSync.question("Enter loan amount: "));
    let interestRate = parseFloat(readlineSync.question("Enter interest rate (annual): "));
    let years = parseFloat(readlineSync.question("Enter number of years: "));

    // Process
    /* get weekly interest rate by dividing interest rate by 100 and then that by 52
    get number of weekly payments by multiplying number of years by 52
    get weekly payment amount by multiplying loan amount with weekly interest rate and follwing the rest of calculations I don't fully understand yet.
    */

    let weeklyInterestRate = (interestRate / 100) / 52; 
    let numPayments = years * 52; 
    let weeklyPayment = (loan * weeklyInterestRate) / (1 - Math.pow(1 + weeklyInterestRate, -numPayments));

    // Output the weekly payment amount with console log messaged plus weekly payment variable combined with the to fixed function.
    console.log("Your weekly payment will be: $" + weeklyPayment.toFixed(2));
}
    // DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
 main();
}