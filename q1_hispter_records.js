"use strict";
let readlineSync = require("readline-sync");
// DO NOT EDIT: The main function to house our program code 
function main()
{
    // start program
    //input customers name, distance traveled, and cost of records.
    let customerName = readlineSync.question("Enter the customer's name: ");
    let distance = parseFloat(readlineSync.question("Enter the distance in kilometers for delivery: "));
    let recordCost = parseFloat(readlineSync.question("Enter the cost of the records purchased: "));

    //process
    /* Calculate the delivery cost by multiplying the distance by 15 and assign it to the variable deliver.
    Calculate the purchase cost with tax by multiolying the recordscost by 1.14 and assign it to the variable purchase cost.
    Calculate the total amount by adding the delivery with the purchase cost and assign it to the variable total.
    */
   let delivery = parseFloat((distance * 15).toFixed(2));
   let purchaseCost = parseFloat((recordCost * 1.14).toFixed(2));
   let total = delivery + purchaseCost;

   //output
   /* Display the title purchase summary with the customer's name
   display the delivery cost
   display the purchase cost
   display the total cost
   program ends
   */

   console.log("\nPurchase summary for " + customerName);
   console.log("Deliver Cost: $" + delivery);
   console.log("Purchase Cost: $" + purchaseCost);
   console.log("Total Cost: $" + total.toFixed(2));

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
