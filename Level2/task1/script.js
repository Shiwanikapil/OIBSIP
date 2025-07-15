const result = document.getElementById("result");
const expression = document.getElementById("expression");
const buttons = document.querySelectorAll("button");

let exp = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "clear") {
      exp = "";
      result.textContent = "";
      expression.textContent = "";
    } else if (value === "del") {
      exp = exp.slice(0, -1);
      expression.textContent = exp;
    } else if (value === "ENTER") {
      try {
        let finalExp = exp.replace(/×/g, "*").replace(/÷/g, "/");
        result.textContent = eval(finalExp);
      } catch {
        result.textContent = "Error";
      }
    } else {
      exp += value;
      expression.textContent = exp;
    }
  });
});