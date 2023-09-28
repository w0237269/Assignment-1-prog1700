"use strict";
let readlineSync=require('readline-sync');
// DO NOT EDIT: The main function to house our program code 
function main()
{
    //input
    let loan = readlineSync.question("Enter loan amount: ");
    let intrestRate = parseInt(readlineSync.question("Enter intrest rate: "));
    let year = (readlineSync.question("Enter number of of years: "));

    //process
    let weeklyIntrest = intrestRate / 5200;
    let weeklyPayment = intrestRate * loan / (1-(1 + weeklyIntrest)**(-52*year));

    //output
    console.log("Your weekly payment will be: $" + weeklyPayment.toFixed(2));
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
