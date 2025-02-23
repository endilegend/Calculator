function calc() {
  const screen = document.querySelector(".screen");
  const operators = ["/", "+", "-", "*"];
  nums = screen.textContent.split(" ");
  var x = 0;
  var operator = "+";
  for (let i = 0; i < nums.length; i++) {
    if (operators.includes(nums[i])) {
      operator = nums[i];
    } else {
      if (operator == "+") {
        x += Number(nums[i]);
      } else if (operator == "*") {
        x *= Number(nums[i]);
      } else if (operator == "/") {
        x /= Number(nums[i]);
      } else if (operator == "-") {
        x -= Number(nums[i]);
      }
    }
  }
  screen.textContent = x;
}

function insert(x) {
  const screen = document.querySelector(".screen");
  if (screen.textContent === "0") {
    screen.textContent = x;
  } else {
    screen.textContent += " " + x;
  }
}

function clear() {
  const screen = document.querySelector(".screen");
  screen.textContent = 0;
}

const operators = document.querySelectorAll(".operator");
const operands = document.querySelectorAll(".operand");
const equal = document.querySelector("#equal");
const erase = document.querySelector("#clear");

operators.forEach((button) => {
  button.addEventListener("click", () => insert(button.textContent));
});

operands.forEach((button) => {
  button.addEventListener("click", () => insert(button.textContent));
});

equal.addEventListener("click", () => calc());

erase.addEventListener("click", () => clear());
