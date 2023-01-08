let pizzaCount=0;
let burgerCount=0;

function increasePizza(){
    pizzaCount++
    document.getElementById('pizza-count').innerHTML=pizzaCount
    updateImage()
}

function increaseBurger(){
    burgerCount++
    document.getElementById('burger-count').innerHTML=burgerCount
    updateImage()
}

function updateImage(){
    document.documentElement.style.setProperty('--main-size', `${((burgerCount/(pizzaCount+burgerCount)))*100}%`)
}