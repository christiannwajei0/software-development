//document.getElementById('count-el').innerText = 5

//let counter = [0, 1, 2, 3, 4,] ;
//function

//console.log(counter++)
//console.log('hi '  + counter++);

/*
counter1 = counter + 2;
counter2 = counter1 + 7;
counter3 = counter2 - 6;
counter4 = counter3 / 3;
*/
//counter1 = counter++
//console.log(counter)

/*
function increment () {
   // let count = 0;
   console.log("the botton was clicked")
}



function countdown () {
     console.log(5)
     console.log(4)
     console.log(3)
     console.log(2)
     console.log(1)
     console.log(countdown())
}

let lapsCompleted = 0
function incrementLap () {  
    lapsCompleted = lapsCompleted + 1
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)



let mypoints = 3
function addpoints(){
    mypoints += 3
}
 
function removepoints(){
    mypoints -= 1
}
 addpoints()
 addpoints()
 addpoints()
 removepoints()
console.log(mypoints)
 



//let countEl = document.getElementById("count-el")
//console.log(countEl)

//let count = 0;
//console.log(count)

function increment() {
    let count = 0;
    console.log(count)
    count = count + 1
    return count
    //countEl.innerText = count
}


increment()  
//increment()
*/

let countEl = document.getElementById("count-el")
let paymentEl = document.getElementById("payment")
let count = 0

function increment() {
     count = count + 1
    countEl.innerText = count
    pay = count * 500
    paymentEl.innerText = '# ' + pay 
}

/*
let paymentEl = document.getElementById("Payment")
let pay = 0
function totalPay() {
    count = count + 1
    pay = count * 500
    paymentEl.innerText = pay
}
*/
    //increment()