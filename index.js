let countEl = document.getElementById("count-el")
let paymentEl = document.getElementById("payment")
let count = 0

function increment() {
     count = count + 1
    countEl.innerText = count
    pay = count * 500
    paymentEl.innerText = '# ' + pay 
}

