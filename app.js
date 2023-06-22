// THEME SWITCH //

const themeForm = document.querySelector("#themeForm");

themeForm.addEventListener("click", (e) => {
  const element = e.target;

  [...themeForm.children].map((item) => (item.style.opacity = "0"));

  element.style.opacity = "1";

  if (element.id == "one") {
    document.body.classList.add("theme-first");
    document.body.classList.remove("theme-second");
    document.body.classList.remove("theme-third");
  } else if (element.id == "two") {
    document.body.classList.add("theme-second");
    document.body.classList.remove("theme-first");
    document.body.classList.remove("theme-third");
  } else if (element.id == "three") {
    document.body.classList.add("theme-third");
    document.body.classList.remove("theme-first");
    document.body.classList.remove("theme-second");
  }
});

// CALCULATOR FUNCTIONALITY //
// R
// let equal_pressed = false;
// const buttons = document.querySelectorAll("button");
// let screen = document.querySelector("#screen-text");
// const del = document.querySelector("#btn-del");
// const equal = document.querySelector("#btn-equals");
// const reset = document.querySelector("#btn-reset");
// // let a2 = 0;

// window.onload = () => {
//   screen.textContent = "";
// };

// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     if (equal_pressed) {
//       screen.textContent = "";
//       equal_pressed = false;
//     }
//     // Display the value of each button on the screen

//     let targetValue = e.target.textContent;

//     if (targetValue == "x") targetValue = "*";

//     if (
//       targetValue !== "DEL" &&
//       targetValue !== "RESET" &&
//       targetValue !== "="
//     ) {
//       screen.textContent += targetValue;
//     }
//   });
// });

// // calculate user's input when clicked on equal button
// equal.addEventListener("click", () => {
//   equal_pressed = true;
//   let inp_val = screen.textContent;
//   console.log(
//     "🚀 ~ file: app.js:74 ~ equal.addEventListener ~ textContent:",
//     screen.textContent
//   );
//   try {
//     // evaluate user's input
//     let result = eval(inp_val);
//     console.log(
//       "🚀 ~ file: app.js:77 ~ equal.addEventListener ~ result:",
//       result
//     );
//     if (Number.isInteger(result)) {
//       screen.textContent = result;
//     } else {
//       screen.textContent = result.toFixed(2);
//     }
//   } catch (err) {
//     console.log("🚀 ~ file: app.js:83 ~ equal.addEventListener ~ err:", err);
//     // if user enters invalid input
//     // alert("Invalid Input");
//   }
// });

// // Reset whole input and calculation
// reset.addEventListener("click", () => {
//   screen.textContent = "";
// });
// // delete single digit
// del.addEventListener("click", () => {
//   screen.textContent = screen.textContent.substr(
//     0,
//     screen.textContent.length - 1
//   );
// });
