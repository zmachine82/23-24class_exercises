const display = document.getElementById("display");
const numberButtons = document.querySelectorAll('.number')
const equalsButton = document.getElementById('equals')
const clearButton = document.getElementById('clear')
const addButton = document.getElementById('add')
const subtractButton = document.getElementById('subtract')
const multiplyButton = document.getElementById('multiply')
const divideButton = document.getElementById('divide')

const operators = [addButton, subtractButton, multiplyButton, divideButton]

let shouldDisableOperators = false




numberButtons.forEach(numElement => {
    numElement.addEventListener('click', () => {
        addToDisplay(numElement.innerText)
    })
})

addButton.addEventListener('click', () => {
    addToDisplay('+')
})

subtractButton.addEventListener('click', () => {
    addToDisplay('-')
})

multiplyButton.addEventListener('click', () => {
    addToDisplay('*')
})

divideButton.addEventListener('click', () => {
    addToDisplay('/')
})

equalsButton.addEventListener('click', () => {
    calculateResult()
})

clearButton.addEventListener('click', () => {
    clearDisplay()
})




function setOperatorsStatus() {
    operators.forEach(opButton => opButton.disabled = shouldDisableOperators)
}

function containsOperator(value) {
    return value.includes('+') || value.includes('-') || value.includes('/') || value.includes('*')
}

function addToDisplay(value) {
    display.value += value;
    if (containsOperator(display.value)) {
        shouldDisableOperators = true
    } else {
        shouldDisableOperators = false
    }
    setOperatorsStatus()
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = parseValueToCalculate(display.value);
    } catch (error) {
        display.value = "Error " + error;
    }
    shouldDisableOperators = false
    setOperatorsStatus()
}


function parseValueToCalculate(value) {
    if(value.includes('+')) {
        const nums = splitToNumbers(value, '+')
        return nums[0] + nums[1]
        
    } else if (value.includes('-')) {
        const nums = splitToNumbers(value, '-')
        return nums[0] - nums[1]
    } else if(value.includes('/')) {
        const nums = splitToNumbers(value, '/')
        return nums[0] / nums[1]
    }

    else if(value.includes('*')) {
        const nums = splitToNumbers(value, '*')
        return nums[0] * nums[1]
    }
}

function splitToNumbers(value, operatorToSplitOn) {
    return value.split(operatorToSplitOn).map(x => Number(x))
}