let display = document.getElementById("display")
console.log(display)

let buttons = document.querySelectorAll(".button")
console.log(buttons)

for (let button of buttons) {
    button.addEventListener("click", (event) => {
        console.log(event.target.innerText);

        if (event.target.innerText != "=") {
            display.innerText += event.target.innerText
            // console.log(event.target.innerText)
        }

        if (event.target.innerText == "AC") {
            display.innerText = ""
            // console.log(event.target.innerText)
        }

        if (event.target.innerText == "=") {
            try {
                display.innerText = eval(display.innerText)
            }
            catch {
                display.innerText = "Error"
            }
            console.log(display.innerText)
            // console.log(event.target.innerText)
        }
    })
}