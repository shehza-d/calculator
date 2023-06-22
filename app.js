// ************************************* THEME SWITCH ***********************************//

const inputs = document.getElementsByName("toggle");
let arr = [...inputs];

arr.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    element.style.opacity = "1";

    if (e.target.id == "one") {
      document.body.classList.add("theme-first");
      document.body.classList.remove("theme-second");
      document.body.classList.remove("theme-third");
    } else if (e.target.id == "two") {
      document.body.classList.add("theme-second");
      document.body.classList.remove("theme-first");
      document.body.classList.remove("theme-third");
    } else if (e.target.id == "three") {
      document.body.classList.add("theme-third");
      document.body.classList.remove("theme-first");
      document.body.classList.remove("theme-second");
    }

    arr
      .filter((item) => {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

// ************************************* CALCULATOR FUNCTIONALITY *********************************** //
let equal_pressed = 0;
const buttons = document.querySelectorAll("button");
let screen = document.querySelector("#screen-text");
const del = document.querySelector("#btn-del");
const equal = document.querySelector("#btn-equals");
const reset = document.querySelector("#btn-reset");
let a2 = 0;

window.onload = () => {
  screen.textContent = "";
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (equal_pressed == 1) {
      screen.textContent = "";
      equal_pressed = 0;
    }
    // Display the value of each button on the screen

    let targetValue = e.target.textContent;

    if (targetValue == "x") {
      targetValue = "*";
    }
    if (
      targetValue !== "DEL" &&
      targetValue !== "RESET" &&
      targetValue !== "="
    ) {
      screen.textContent += targetValue;
    }
  });
});

// calculate user's input when clicked on equal button
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = screen.textContent;
  try {
    // evaluate user's input
    let result = eval(inp_val);
    if (Number.isInteger(result)) {
      screen.textContent = result;
    } else {
      screen.textContent = result.toFixed(2);
    }
  } catch (err) {
    // if user enters invalid input
    alert("Invalid Input");
  }
});

// Reset whole input and calculation
reset.addEventListener("click", () => {
  screen.textContent = "";
});
// delete single digit
del.addEventListener("click", () => {
  screen.textContent = screen.textContent.substr(
    0,
    screen.textContent.length - 1
  );
});
