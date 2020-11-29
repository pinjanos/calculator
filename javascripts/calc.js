'use strict';

const $input = document.querySelector("input");

document.querySelectorAll(".cell").forEach(
    el => {
        el.onclick = () => $input.value = $input.value
            !== "0" ? $input.value + el.innerText :
            el.innerText;
    });

const buffer = [];

const opCallBack = opName => () => {
    let currentVal = parseFloat($input.value);
};


const evaluate = buffer => {
    const secondOperand = buffer.pop().value;
    const operator = buffer.pop().value;
    const firstOperand = buffer.pop().value;

    switch (operator) {
        case "add":
            return firstOperand + secondOperand;
            break;
        case "sub":
            return firstOperand - secondOperand;
            break;
        case "multi":
            return firstOperand * secondOperand;
            break;
        case "divi":
            return firstOperand / secondOperand;
            break;
        default:
            return secondOperand;
    }
};


for (const opName of ["add", "sub", "multi", "divi"]) {
    document.querySelector('.cell-operator[op=${opName}]')
        .onclick = opCallBack(opName);
};


document.querySelector(".cell-egal").onclick = () => {
    if (buffer && buffer.length) {
        buffer.push({ value: parseFloat($input.value) });
        $input.value = evaluate(buffer);
    }
};


document.querySelector(".cell[op=clear]").onclick = () => {
    $input.value = 0;
    buffer.length = 0;
};



// class Calculator {
//     constructor(previousElement, currentElement) {
//         this.previousElement = previousElement
//         this.currentElement = currentElement
//         this.clear()
//     }

//     clear() {
//         this.current = ''
//         this.previous = ''
//         this.operation = undefined
//     }

//     appendNumber(number) {
//     this.current = number
//     }

//     chooseOperation(operation) {

//     }


//     compute() {

//     }

//     updateDisplay() {
//     this.currentElement.innerText = current
//     }
// }





// const numberBtn = document.querySelectorAll('[data-number]');
// const operationBtn = document.querySelectorAll('[data-operation]');
// const egalBtn = document.querySelector('[data-egal]');
// const clearBtn = document.querySelector('[data-clear]');
// const previousElement = document.querySelector('[data-previous]');
// const currentElement = document.querySelector('[data-current]');


// const calculator = new Calculator(previousElement, currentElement)

// numberBtn.forEach(numberBtn => {
//     numberBtn.addEventListener('click', () => {
//         calculator.appendNumber(numberBtn.innerText)
//         calculator.updateDisplay()
//     })
// })