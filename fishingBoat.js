//Fishing Boat - This is the source of the fish. The boat catches the fish and makes the fresh catch available to purchasers.

//TODO 1. The boat will have many fish. (Array)
//TODO 2. Each fish will be represented by an object.
//TODO 3. Here are the properties of each fish.
    //TODO i. Species
    //TODO ii. Weight
    //TODO iii.Price (prices range from $3.00 to $10.00 per fish)
    //TODO iv. Amount (how many of this species were caught today)

//DATA STRUCTURES NEEDED:  [Array]- fishArray includes objects species, weight, price, and amount of fish caught.   
//DATA STRUCTURES NEEDED: A function named boatInventory

const boatInventory = () => {
    const fishArray=[
        { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
        { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
        { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
        { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
        { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
        { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
        { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
        { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
]

return fishArray
}

//TODO Export function so other modules can invoke it

 module.exports = { boatInventory }

//!What does it mean to export/ import a function?
