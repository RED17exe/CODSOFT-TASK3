const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "C") {
      expression = "";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
    } else if (value === "=") {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }
    } else if (value === "PI") {
      expression += Math.PI.toFixed(8);
    } else if (value === "sqrt") {
      expression += "Math.sqrt(";
    } else if (value === "log") {
      expression += "Math.log10(";
    } else if (value === "exp") {
      expression += "Math.exp(";
    } else if (value === "sin") {
      expression += "Math.sin(";
    } else if (value === "cos") {
      expression += "Math.cos(";
    } else if (value === "tan") {
      expression += "Math.tan(";
    } else if (value === "^2") {
      expression += "**2";
    } else {
      expression += value;
    }

    display.innerText = expression || "0";
  });
});
