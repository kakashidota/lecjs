//1. Random number generator
// var n = Math.random()
// n = n * 6
// n = Math.floor(n) + 1
// console.log(n)


//2. Love score--------------------------------------------------------------------------------------------
// prompt("What is your name?")
// prompt("What is their name?")

// let loveScore = Math.random() * 100
// loveScore = Math.floor(loveScore) + 1
// alert("Your love score is " + loveScore + "%")

//3. Conditions-------------------------------------------------------------------------------------------------
// var track = "clear"

// if(track === "clear"){
//     goStraight()
// } else {
//     turnRight()
// }

//4. Lovescore continued------------------------------------------------------------------------------------------
// prompt("What is your name?")
// prompt("What is their name?")

// let loveScore = Math.random() * 100
// loveScore = Math.floor(loveScore) + 1

// if (loveScore > 70){
//     alert("Nice love")
// } else {
//     alert("your love is " + loveScore + "%")
// }
//5. Skillnad mellan == och === ----------------------------------------------
// var a = 1
// var b = "1"
// typeof(a)
// typeof(b)

// if(a === b){
//     console.log("yes")
// } else {
//     console.log("no")
// }
//6. Lovescore med kombinerade comparators 
// prompt("What is your name?")
// prompt("What is their name?")
// let loveScore = Math.random() * 100
// loveScore = Math.floor(loveScore) + 1
// console.log(loveScore)

// if (loveScore > 70){
//     alert("Nice love")
// } 

// if (loveScore > 30 && loveScore <=70){
//     alert("Your love score is" + loveScore + "&")
// } 

// if (loveScore <= 30){
//     alert("not a good match " + loveScore + "%")
// }

//7. Arrays
// var a = "Robin"
// var b = 10
// var guestName = prompt("What is your name?")

// var guestList = ["Robin", "Joel", "Omar", "Aziz", "Habibi", "Gustav"]
// console.log(guestList)
// console.log(guestList[2])
// console.log(guestList.includes(guestName))

// if(guestList.includes(guestName)){
    //     alert("Welcome")
    // } else {
        //     alert("Sorry. maybe next time")
        // }
        
//8. Leka med arrays ------------------------------------------------------------------------------
// let output = []
// let count = 1;
//  output.push(1)
// output.push(2)
// console.log(output)
// function addOne(){
//     output.push(count)
//     console.log(output)
//     count++
// }

// addOne()
// addOne()
// addOne()
// let potato = [10, "100", {name: "frank"}]

// console.log(potato[2].name)

//9. Övning -- Vem betalr för lunch ------------------------------------------------------------------
// var names =     ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// function whosPaying(names){
// var numberOfPeople = names.length;
// var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
// var randomPerson = names[randomPersonPosition];

// return randomPerson + " is going to buy lunch today!";


// }
// whosPaying(names);
