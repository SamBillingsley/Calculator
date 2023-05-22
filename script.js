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

const display = document.querySelector(".result");

const numButton = document.querySelectorAll(".numButton");

// array in which numbers will be added
const equation = [];
const currentNum = [];

// Create clear button
const clearAll = function (arr1, currentNum) {
  arr1.length = 0;
};

clear.addEventListener("click", () => {
  if (clear.innerHTML == "CE") {
    clearAll(equation);
    display.innerHTML = 0;
  } else {
    clearAll(currentNum);
    display.innerHTML = 0;
  }
  clear.innerHTML = "CE";
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

// Create event listeners that change clear button and show display
numButton.forEach(function (numBtn) {
  numBtn.addEventListener("click", function () {
    display.innerHTML = currentNum.join("");
    clear.innerHTML = "C";
  });
});

// create function to empty currentNum array and add equation to equation arr
const arrSwap = function (arr1, arr2) {
  const tempArr = [];
  while (arr2.length > 0) {
    tempArr.push(arr2.pop());
    arr1.push(tempArr.reverse());
  }
};

// add function to prevent multiple operators
const multOperatorCheck = function (arr) {
  temp = equation.pop();
  if (Array.isArray(temp)) {
    arr.push(temp);
  }
};

// add operator to equation
addition.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  multOperatorCheck(equation);
  if (equation.length >= 3) {
    pemdas(equation);
    display.innerHTML = equation.join("");
  }
  equation.push("+");
});

subtraction.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  multOperatorCheck(equation);
  if (equation.length >= 3) {
    pemdas(equation);
    display.innerHTML = equation.join("");
  }
  equation.push("-");
});

multiplication.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  multOperatorCheck(equation);
  if (equation.length >= 3) {
    pemdas(equation);
    display.innerHTML = equation.join("");
  }
  equation.push("*");
});

division.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  multOperatorCheck(equation);
  if (equation.length >= 3) {
    pemdas(equation);
    display.innerHTML = equation.join("");
  }
  equation.push("/");
});

// add function that takes array and calculates it using PEMDAS
const pemdas = function (equation) {
  let total = [];
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
  } while (total.length == 0);
  total = [];
};

// Have equals button equate equation
const findTotal = function () {
  if (currentNum.length != 0) {
    arrSwap(equation, currentNum);
    pemdas(equation);
    display.innerHTML = Math.round(equation * 100) / 100;
  }
};

equals.addEventListener("click", () => {
  findTotal();
});
