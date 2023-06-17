let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")
console.log(saveEl)

function save() {
    let savecount = count + " - "
    saveEl.textContent += savecount
    countEl.textContent = 0
    count = 0
    console.log(count)
}
























// let message = "You have 3 new notifications"
// let username = "Abdelrahman"
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let greeting = "Hi, my name is "
// let name = "Abdelrahman"
// let myGreeting = greeting + name
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints

// console.log(4 + 5) // 9
// console.log("2" + "4") // 24
// console.log("5" + 1) // 51
// console.log(100 + "100") // 100100

// let welcomeEl = document.getElementById("welcome-el")
// let name = " Abdelrahman"
// let greeting = "Welcome back"
// let userGreeting = greeting + "," + name + "!"
// welcomeEl.innerText = userGreeting
// welcomeEl.innerText = welcomeEl.innerText + "👋"