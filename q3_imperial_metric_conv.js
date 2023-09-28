"use strict";
let readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 
function main()
{
    /*Start program
     input: Get user to input number of tons, stones, pounds, and ounces.
     */
    let tons = parseFloat(readlineSync.question('Enter the number of tons: '));
    let stones = parseFloat(readlineSync.question('Enter the number of stones: '));
    let pounds = parseFloat(readlineSync.question('Enter the number of pounds: '));
    let ounces = parseFloat(readlineSync.question('Enter the number of ounces: '));
    
    /*
    process
    get total weight in ounces
    get total weight in KG
    Calculate metric tons, remaining kilograms, and grams
    */
    
    let totalOunces = 35840 * tons + 224 * stones + 16 * pounds + ounces;
    let totalKilos = totalOunces / 35.274;
    let metricTons = Math.floor(totalKilos / 1000);
    let remainingKilos = (totalKilos % 1000).toFixed(1);
    let grams = ((totalKilos % 1) * 1000).toFixed(1);

    /*output
    display metric tons, kilos, and grams
    */
    console.log("The metric weight is");
    console.log(`${metricTons} metric tons, ${remainingKilos} kilograms, and ${grams} grams.`);

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

