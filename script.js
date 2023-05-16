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

// array in which numbers will be added
const equation = [];
const currentNum = [];

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

// create function to empty currentNum array and add equation to equation arr
const arrSwap = function (arr1, arr2) {
  arr1.push(...arr2);
  arr2.length = 0;
};

// add operator to equation
addition.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  equation.push("+");
});
subtraction.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  equation.push("+");
});
multiplication.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  equation.push("*");
});
division.addEventListener("click", function () {
  arrSwap(equation, currentNum);
  equation.push("/");
});

// split equation according to PEMDAS
