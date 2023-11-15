const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const deleteNum = document.querySelector(".last-entity-clear");

let disNum1 = "";
let disNum2 = "";
let result = null;
let lastOperation = "";
let haveDot = false;
// console.log(numbers);
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }

    disNum2 += e.target.innerText;
    display2.innerText = disNum2;
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!disNum2) return;
    haveDot = false;

    const operationName = e.target.innerText;
    console.log(disNum1, disNum2, lastOperation);
    if (disNum1 && disNum2 && lastOperation) {
      mathOperation();
    } else {
      result = Number(disNum2);
    }

    clearVal(operationName);
    lastOperation = operationName;
  });
});

const clearVal = (name = "") => {
  disNum1 += disNum2 + " " + name + " ";
  display1.innerText = disNum1;
  display2.innerText = "";
  disNum2 = "";
  tempResult.innerText = result;
};

const mathOperation = () => {
  if (lastOperation === "x") {
    result = Number(result) * Number(disNum2);
  } else if (lastOperation === "+") {
    result = Number(result) + Number(disNum2);
  } else if (lastOperation === "-") {
    result = Number(result) - Number(disNum2);
  } else if (lastOperation === "/") {
    result = Number(result) / Number(disNum2);
  } else if (lastOperation === "%") {
    result = Number(result) & Number(disNum2);
  }
};

equal.addEventListener("click", () => {
  if (!disNum2 || !disNum1) return;

  haveDot = false;
  mathOperation();
  clearVal();
  display2.innerText = result;
  tempResult.innerText = "";
  disNum2 = result;
  disNum1 = "";
});

clearAll.addEventListener("click", () => {
  disNum1 = "";
  disNum2 = "";
  display1.innerText = "";
  display2.innerText = "";
  result = "";
  tempResult.innerText = "";
});

deleteNum.addEventListener("click", () => {
  display2.innerText = "";
  disNum2 = "";
})
