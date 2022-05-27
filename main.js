let buttons = document.querySelectorAll(".button")
console.log(buttons)

for (let button of buttons) {
    button.addEventListener("click", function (event) {
        console.log(event.target.textContent);
    })
}

// let newElement = document.createElement("p");
// // create a new element, in this case a p
// newElement.innerText = event.target.textContent;
// display.appendChild(newElement);
//   })
// }

