// Firstly in Js , use these getElementId and querySelectorAll to find the display area and butttons that would be used in the code

const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");



// Add event listeners, in this case look for clicks

// Now everytime you click any of the numbers, it shows in your console in our browser

// The display.value thing displays the dataset of the button in the display area. += add the value to what is being displayed

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.dataset.value;



        // Condition for AC to clear the display area

        if (value === "clear") {

            display.value = "";

        }

        // Backspace condition

        else if (value === "backspace") {

            display.value = display.value.slice(0, -1);

        }

        else if (value === "=") {

            try {

                display.value = eval(display.value);

            }

            catch {

                display.value = "Error";

            }

        }

        else {

            display.value += value;

        }


    })
});



// Make the display show what you click

