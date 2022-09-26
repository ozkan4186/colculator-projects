const buttons = document.querySelector(".buttons-container");
const up = document.querySelector(".previous-display");
const down = document.querySelector(".current-display");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    let num = e.target.innerText;
    if(down.innerText.length>9){
      down.style.fontSize="2rem"
         if (down.innerText.length > 18) return;
    }
    if (down.innerText == "0" && num == "0") return;
    if (down.innerText == "" && num == ".") return;
    if (down.innerText.includes(".") && num == ".") return;
    if (down.innerText == "0" && num != ".") {
      down.innerText = num;
      return;
     
    }
 
     document.querySelector(".ac").textContent="C";

    down.innerText += num;
  } else if (e.target.classList.contains("ac")) {
    down.innerText = "";
    up.innerText = "";
  } else if (e.target.classList.contains("ae")) {
    down.innerText *= -1;
  } else if (e.target.classList.contains("operator")) {
    // let op=e.target.innerText;
    if(up.innerText.includes("+"))return;
    if(up.innerText.includes("-"))return;
    if(up.innerText.includes("x"))return;
    if (up.innerText.includes("÷")) return;
    up.innerText += down.innerText + " " + e.target.innerText;
    down.innerText = "";
  } else if (e.target.classList.contains("equal")) {
    if (up.innerText.includes("+")) {
      result = Number(up.innerText.replace("+", "")) + Number(down.innerText);
      down.innerText = result;
      up.innerText = "";
    }
    if (up.innerText.includes("-")) {
      result = Number(up.innerText.replace("-", "")) - Number(down.innerText);
      down.innerText = result;
      up.innerText = "";
    }
    if (up.innerText.includes("x")) {
      result = Number(up.innerText.replace("x", "")) * Number(down.innerText);
      down.innerText = result;
      up.innerText = "";
    }
    if (up.innerText.includes("÷")) {
      result = Number(up.innerText.replace("÷", "")) / Number(down.innerText);
      down.innerText = result;
      up.innerText = "";
    }
  } else if (e.target.classList.contains("percent"))
    down.innerText = down.innerText / 100
});