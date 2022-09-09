//Fishmonger- The fishmonger purchases fresh fish off the boat, and head chefs around the city visit every morning to get fish for their daily menus.

//TODO Import the function defined in the fishing boat module

const { boatInventory } = require("./fishingBoat.js");

//Create Variable to store boatInventory
const newFish = boatInventory();

//Create empty array variable
const newFishInventory = [];

let mongerBudget= 7.50

//Create function named mongerInventory to generate inventory based on the following conditions...

const mongerInventory = (mongerBudget) => {
  for (const fish of newFish){
    if (fish.amount >= 10 && fish.price <= 7.5 && fish.price <= mongerBudget) {
      newFishInventory.push(fish);
    }
    }
  return newFishInventory;

  
};

//console.log(newFishInventory);

module.exports = { mongerInventory };
//console.log(mongerInventory)

//Function should return an array of objects

//Create for...of loop to iterate through newFish.

//Inside of loop, create a conditional statement.  Only buy fish if quantity is greater than 10 AND price less than $7.50.

//If fish is priced greater than $7.50 per fish, do not buy.

//chef will determine their maximum budget per fish.

//Each fish object should have a quantity of 10 instead of original quantity from the fishing boat

//TODO This module should Define and export its own function that generates its own inventory that restaurants can use to purchase fish for their daily menus.  The returned inventory should be an array of objects.

//TODO New Inventory of fishmonger will be anb ARRAY of objects

//TODO New Inventory of fishmonger will be an ARRAY of objects

//TODO fishmonger buys EXACTLY 10 of each fish.  If quantity is less than 10, no buy.

//Use AND (&&) statement to satisfy all requirements of adding fish to new inventory.

//create conditional statement to return fish objects  with quantities >10.

//AND

//TODO No fish higher than $7.50 per fish

//create conditional statement to return fish objects that

//TODO function should ony return fish that cost <= what the chef specifies

//TODO Each fish object provided should have a quantity of exactly 10.
