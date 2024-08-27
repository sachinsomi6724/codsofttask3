let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstNumber = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (shouldResetDisplay) {
        currentInput = '0.';
        shouldResetDisplay = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstNumber = '';
    updateDisplay();
}

function updateDisplay() {

    if (display) {
        display.textContent = currentInput || '0';
    }
}

function calculate() {
    if (operator && firstNumber) {
        let result;
        const secondNumber = parseFloat(currentInput);
        switch (operator) {
            case '+':
                result = parseFloat(firstNumber) + secondNumber;
                break;
            case '-':
                result = parseFloat(firstNumber) - secondNumber;
                break;
            case '*':
                result = parseFloat(firstNumber) * secondNumber;
                break;
            case '/':
                result = parseFloat(firstNumber) / secondNumber;
                break;
        }
        currentInput = result.toString();
        operator = '';
        firstNumber = '';
        shouldResetDisplay = true;
        updateDisplay();
    } else {
        firstNumber = currentInput;
        operator = '';
        currentInput = '';
    }
}
