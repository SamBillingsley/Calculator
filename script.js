const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const decimal = document.querySelector("#decimal");

const clear = document.querySelector("#clear");

const display = document.querySelector("result");

// array in which numbers will be added
const equation = [];
const currentNum = [];
const operators = ["+", "-", "*", "/"];

// Create clear button
const clearAll = function (arr1, currentNum) {
  arr1.length = 0;
};

clear.addEventListener("click", () => {
  if (clear.innerHTML == "CE") {
    clearAll(equation);
  } else {
    clearAll(currentNum);
  }
  clear.innerHTML = "CE";
});

document.querySelectorAll(".numButton").forEach(function (numBtn) {
  numBtn.addEventListener("click", () => {
    clear.innerHTML = "C";
  });
});

// add numbers to equation
one.addEventListener("click", () => currentNum.push("1"));
two.addEventListener("click", () => currentNum.push("2"));
three.addEventListener("click", () => currentNum.push("3"));
four.addEventListener("click", () => currentNum.push("4"));
five.addEventListener("click", () => currentNum.push("5"));
six.addEventListener("click", () => currentNum.push("6"));
seven.addEventListener("click", () => currentNum.push("7"));
eight.addEventListener("click", () => currentNum.push("8"));
nine.addEventListener("click", () => currentNum.push("9"));
zero.addEventListener("click", () => currentNum.push("0"));
decimal.addEventListener("click", () => currentNum.push("."));

// create function to empty currentNum array and add equation to equation arr
const arrSwap = function (arr1, arr2) {
  const tempArr = [];
  do {
    if (arr2.length > 0) {
      tempArr.push(arr2.pop());
      arr1.push(tempArr.reverse());
    }
  } while (arr2.length != 0);
};

// add operator to equation
addition.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  equation.push("+");
});

subtraction.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  equation.push("-");
});

multiplication.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  equation.push("*");
});

division.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  equation.push("/");
});

// add function that takes array and calculates it using PEMDAS
const pemdas = function (equation) {
  let total = 0;
  do {
    do {
      if (equation.includes("*")) {
        const num1 = equation[equation.indexOf("*") - 1].join("");
        const num2 = equation[equation.indexOf("*") + 1].join("");
        total = num1 * num2;
        clearAll(equation);
        equation.push([total]);
        console.log(equation);
      }
    } while (equation.includes("*"));

    do {
      if (equation.includes("/")) {
        const num1 = equation[equation.indexOf("/") - 1].join("");
        const num2 = equation[equation.indexOf("/") + 1].join("");
        total = num1 / num2;
        clearAll(equation);
        equation.push([total]);
        console.log(equation);
      }
    } while (equation.includes("/"));

    do {
      if (equation.includes("+")) {
        const num1 = equation[equation.indexOf("+") - 1].join("");
        const num2 = equation[equation.indexOf("+") + 1].join("");
        total = parseInt(num1) + parseInt(num2);
        clearAll(equation);
        equation.push([total]);
        console.log(equation);
      }
    } while (equation.includes("+"));

    do {
      if (equation.includes("-")) {
        const num1 = equation[equation.indexOf("-") - 1].join("");
        const num2 = equation[equation.indexOf("-") + 1].join("");
        total = num1 - num2;
        clearAll(equation);
        equation.push([total]);
        console.log(equation);
      }
    } while (equation.includes("-"));
  } while (total == 0);
};

// Have equals button equate equation
equals.addEventListener("click", function () {
  if (currentNum.length != 0) {
    arrSwap(equation, currentNum);
    pemdas(equation);
  }
});
