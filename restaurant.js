//Fish Restaurant - The chef at fish restaurant purchases fresh fish from the fishmonger every day. To keep her prices low, she purchases lower cost food and combines them in tasty ways that people might not expect.

//TODO Import mongerInventory function from the monger module

const { mongerInventory } = require ("./fishMonger.js")

//TODO Create variable in which to store mongerInventory()

const sortedFish = mongerInventory(8.00)

//TODO Create function called fishMenu

//TODO! Chef specifies the maximum price she is able to spend per fish

//TODO If the monger has any fish at this price point or less, the chef buys 50% of the existing inventory.  

//TODO The chef then creates 3 different meals per fish - a soup, a grilled dinner, and sandwich. For example, if tuna was bought, the following meals will be on the menu.
/*
Tuna Soup
Tuna Sandwich
Grilled Tuna
*/

const fishMenuArray=[]

const fishMenu = (budget) => {
    let HTMLMenu=""

 for (const fish of sortedFish){
    if (fish.price <= budget){
        fish.amount / 2 
        fishMenuArray.push(fish)
    }
 }

 for (const fish of fishMenuArray){
    HTMLMenu += `<h1>Menu</h1>
    <article class="menu">
        <h2>${fish.species}</h2>
        <section class="menu__item">${fish.species} Soup</section>
        <section class="menu__item">${fish.species} Sandwich</section>
        <section class="menu__item">Grilled ${fish.species}</section>
    </article>`
 }


return HTMLMenu
}

module.exports = { fishMenu }



/*Your HTML structure must match the example below. Use the same elements and the same class names.
<h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article>
*/
