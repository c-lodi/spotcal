// document.getElementById("result-el").textContent = "RESULT"


var buyPrice = document.getElementById("buy-price-el")
var amount = document.getElementById("amount-el")
var sellPrice = document.getElementById("sell-price-el")

var buyResultEl = document.getElementById("buy-result-el")
var sellResultEl =  document.getElementById("sell-result-el")
var profitEl = document.getElementById("profit-el")

function calculate() {

    console.log("hereee")

    var buyPriceValue = parseFloat(buyPrice.value)
    var amountValue = parseFloat(amount.value)
    var sellPriceValue = parseFloat(sellPrice.value)

    var buyResult = amountValue / buyPriceValue
    var sellResult = buyResult * sellPriceValue
    var profit = sellResult - amountValue

    buyResultEl.textContent = "₿ " + buyResult.toFixed(2)
    sellResultEl.textContent = "$ " + sellResult.toFixed(2)
    profitEl.textContent = "$ " + profit.toFixed(2)
   

}


function clearInput() {
    
    buyPrice.value = ""
    amount.value = ""
    sellPrice.value = ""

    buyResultEl.textContent = "₿ 0.00" 
    sellResultEl.textContent = "$ 0.00" 
    profitEl.textContent = "$ 0.00" 

    

}

