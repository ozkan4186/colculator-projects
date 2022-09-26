// const buttons = document.querySelector(".buttons-container");
// const up = document.querySelector(".previous-display");
// const down = document.querySelector(".current-display");
// 
// buttons.addEventListener("click", (e) => {
//   if (e.target.classList.contains("num")) {
//     let numb = e.target.innerText;
//     if (down.innerText == "0" && numb == "0") return;
//     if (down.innerText == "" && numb == ".") return;
//     if (down.innerText.includes(".") && numb == ".") return;
//     if (down.innerText == "0" && numb != ".") {
//       down.innerText = numb;
//       return;
//     }
//     if (down.innerText.length > 10) return;
// 
//     down.innerText += numb;
//   } else if (e.target.classList.contains("ac")) {
//     down.innerText = "";
//     up.innerText = "";
//   } else if (e.target.classList.contains("ae")) {
//     down.innerText *= -1;
//   } else if (e.target.classList.contains("operator")) {
//     up.innerText += down.innerText + " " + e.target.innerText;
//     down.innerText = "";
//   } else if (e.target.classList.contains("equal")) {
//     if (up.innerText.includes("+")) {
//       result = Number(up.innerText.replace("+", "")) + Number(down.innerText);
//       down.innerText = result;
//       up.innerText = "";
//     }
//     if (up.innerText.includes("-")) {
//       result = Number(up.innerText.replace("-", "")) - Number(down.innerText);
//       down.innerText = result;
//       up.innerText = "";
//     }
//     if (up.innerText.includes("x")) {
//       result = Number(up.innerText.replace("x", "")) * Number(down.innerText);
//       down.innerText = result;
//       up.innerText = "";
//     }
//     if (up.innerText.includes("÷")) {
//       result = Number(up.innerText.replace("÷", "")) / Number(down.innerText);
//       down.innerText = result;
//       up.innerText = "";
//     }
//   }else if(e.target.classList.contains("percent"))
//   down.innerText=down.innerText/100
// });
