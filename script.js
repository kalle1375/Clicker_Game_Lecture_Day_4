let gold = 0;

// These are the upgrades:

let backpack = {
    price: 125,
    quantity: 0,
    clickValueAdded: 1,
    costIncrease: 1.25
}


function calculateClickValue() {
    let clickValue = 1 + backpack.quantity * backpack.clickValueAdded
    return clickValue
}

function getGold () {
    let calculatedClickValue = calculateClickValue()
    gold = gold + calculatedClickValue
    console.log(gold)
    draw()
}

function draw() {
    document.getElementById("gold-count").innerText = gold
    document. getElementById("click-value").innerText =
    calculateClickValue()
}

function getBackpack() {
    if (gold >= backpack.price){
        backpack.quantity++
        gold -= backpack.price
        backpack.price = backpack.price * backpack.costIncrease
        draw()
}
    else {
        alert("We're running a business here. We won't give you a free backpack today, tomorrow, or any day.")
    }
}


