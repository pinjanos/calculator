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

    if (opName === "percent") {
        currentVal *= 0.01;
        $input.value = currentVal;
    }
    else {
        if (buffer && buffer.length) {
            buffer.push({ value: currentVal });

            const result = evaluate(buffer);

            buffer.push({ value: result });
            buffer.push({ value: opName });

            $input.value = "";
        }
        else {
            buffer.push({ value: currentVal });
            buffer.push({ value: opName });
            $input.value = "";
        }
    }

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
    document.querySelector(`.cell-operator[op=${opName}]`)
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
