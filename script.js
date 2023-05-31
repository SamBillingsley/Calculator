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
const negativeBtn = document.querySelector("#negative");

const display = document.querySelector(".result");

const numButton = document.querySelectorAll(".numButton");

// array in which numbers will be added
const equation = [];
const currentNum = [];
let fullEquation = [];

// Create clear button
const clearAll = function (arr1) {
  arr1.length = 0;
};

clear.addEventListener("click", () => {
  if (clear.innerHTML == "CE") {
    clearAll(equation);
    display.innerHTML = 0;
  } else {
    if ((equation.length = 1)) {
      clearAll(equation);
      clearAll(currentNum);
    } else {
      clearAll(currentNum);
      display.innerHTML = 0;
    }
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
    console.log(equation.length);
  });
});

// Create negative button toggle
negative = false;

const checkNegative = function (arr) {
  if (negative && !arr.includes("-")) {
    arr.unshift("-");
  } else {
    if (arr[0] === "-") {
      arr.shift();
    }
  }
};

const negativeToggle = function (num) {
  if (num[0] === "-") {
    num * -1;
    num.slice(0, 1);
  }
};

negativeBtn.addEventListener("click", () => {
  if (negative) {
    negative = false;
    checkNegative(currentNum);
    display.innerHTML = currentNum.join("");
  } else {
    negative = true;
    checkNegative(currentNum);
    display.innerHTML = currentNum.join("");
  }
});

// create function to empty currentNum array and add equation to equation arr
const arrSwap = function (arr1, arr2) {
  const tempArr = [];
  while (arr2.length > 0) {
    tempArr.push(arr2.pop());
  }
  if (tempArr.length > 0) {
    arr1.push(tempArr.reverse());
  }
};

// add function to prevent multiple operators
const multOperatorCheck = function (arr) {
  temp = arr.pop();
  if (Array.isArray(temp)) {
    arr.push(temp);
  }
};

// add operator to equation
addition.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  negative = false;
  multOperatorCheck(equation);
  if (equation.length >= 3) {
    tempArr = equation.slice(0);
    pemdas(tempArr);
    display.innerHTML = Math.round(tempArr[0] * 100) / 100;
  }
  equation.push("+");
});

subtraction.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  negative = false;
  multOperatorCheck(equation);
  if (equation.length >= 3) {
    tempArr = equation.slice(0);
    pemdas(tempArr);
    display.innerHTML = Math.round(tempArr[0] * 100) / 100;
  }
  equation.push("-");
});

multiplication.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  negative = false;
  if (equation.length >= 3) {
    tempArr = equation.slice(0);
    pemdas(tempArr);
    display.innerHTML = Math.round(tempArr[0] * 100) / 100;
  }
  equation.push("*");
});

division.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  negative = false;
  multOperatorCheck(equation);
  if (equation.length >= 3) {
    tempArr = equation.slice(0);
    pemdas(tempArr);
    display.innerHTML = Math.round(tempArr[0] * 100) / 100;
  }
  equation.push("/");
});

// add function that takes array and calculates it using PEMDAS
const leftToRightMultAndDiv = function (equation) {
  if (equation.indexOf("*") < equation.indexOf("/")) {
    const num1 = equation[equation.indexOf("*") - 1].join("");
    const num2 = equation[equation.indexOf("*") + 1].join("");
    negativeToggle(num1);
    negativeToggle(num2);
    total = num1 * num2;
    equation.splice(equation.indexOf("*") - 1, 3, [total]);
    console.log(equation);
  } else {
    const num1 = equation[equation.indexOf("/") - 1].join("");
    const num2 = equation[equation.indexOf("/") + 1].join("");
    negativeToggle(num1);
    negativeToggle(num2);
    total = num1 / num2;
    equation.splice(equation.indexOf("/") - 1, 3, [total]);
    console.log(equation);
  }
};

const multiplicationAndDivision = function (equation) {
  if (equation.includes("*") && equation.includes("/")) {
    leftToRightMultAndDiv(equation);
  } else if (equation.includes("*")) {
    const num1 = equation[equation.indexOf("*") - 1].join("");
    const num2 = equation[equation.indexOf("*") + 1].join("");
    negativeToggle(num1);
    negativeToggle(num2);
    total = num1 * num2;
    equation.splice(equation.indexOf("*") - 1, 3, [total]);
    console.log(equation);
  } else if (equation.includes("/")) {
    const num1 = equation[equation.indexOf("/") - 1].join("");
    const num2 = equation[equation.indexOf("/") + 1].join("");
    negativeToggle(num1);
    negativeToggle(num2);
    total = num1 / num2;
    equation.splice(equation.indexOf("/") - 1, 3, [total]);
    console.log(equation);
  }
  total = [];
};

const leftToRightAddAndSub = function (equation) {
  if (equation.indexOf("+") < equation.indexOf("-")) {
    const num1 = equation[equation.indexOf("+") - 1].join("");
    const num2 = equation[equation.indexOf("+") + 1].join("");
    negativeToggle(num1);
    negativeToggle(num2);
    total = num1 + num2;
    equation.splice(equation.indexOf("+") - 1, 3, [total]);
    console.log(equation);
  } else {
    const num1 = equation[equation.indexOf("-") - 1].join("");
    const num2 = equation[equation.indexOf("-") + 1].join("");
    negativeToggle(num1);
    negativeToggle(num2);
    total = num1 - num2;
    equation.splice(equation.indexOf("-") - 1, 3, [total]);
    console.log(equation);
  }
};

const additionAndSubtraction = function (equation) {
  if (equation.includes("+") && equation.includes("-")) {
    leftToRightAddAndSub(equation);
  } else if (equation.includes("+")) {
    const num1 = equation[equation.indexOf("+") - 1].join("");
    const num2 = equation[equation.indexOf("+") + 1].join("");
    negativeToggle(num1);
    negativeToggle(num2);
    total = parseInt(num1) + parseInt(num2);
    equation.splice(equation.indexOf("+") - 1, 3, [total]);
    console.log(equation);
  } else if (equation.includes("-")) {
    const num1 = equation[equation.indexOf("-") - 1].join("");
    const num2 = equation[equation.indexOf("-") + 1].join("");
    negativeToggle(num1);
    negativeToggle(num2);
    total = num1 - num2;
    equation.splice(equation.indexOf("-") - 1, 3, [total]);
    console.log(equation);
  }
  total = [];
};

const pemdas = function (equation) {
  do {
    do {
      multiplicationAndDivision(equation);
    } while (equation.includes("*") || equation.includes("/"));
    do {
      additionAndSubtraction(equation);
    } while (equation.includes("+") || equation.includes("-"));
  } while (equation.length != 1);
};

// Have equals button equate equation
// const findTotal = function () {
//   if (currentNum.length != 0) {
//     arrSwap(equation, currentNum);
//     pemdas(equation);
//     display.innerHTML = Math.round(equation * 100) / 100;
//   }
// };

equals.addEventListener("click", () => {
  // findTotal();
  arrSwap(equation, currentNum);
  console.log(equation);
  negative = false;
  pemdas(equation);
  display.innerHTML = Math.round(equation * 100) / 100;
});
