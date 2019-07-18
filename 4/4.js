let title4 = document.getElementById("title4")
let username4 = document.getElementById("username4")
let email4 = document.getElementById("email4")
let password4 = document.getElementById("password4")
let button4 = document.getElementById("button4")

let checkValue = input => {
    let entered = input.value
    if (entered === "12345678") {
        title4.innerText = "You ARE logged into Question 4"
        alert("Right password!")
    }
    else {
        alert("Wrong password!")
        input.value = ""
    }
}

button4.addEventListener('click', function(event) {
    event.preventDefault()
    checkValue(password4)
})