const MAX_NUMBER = 10
const MIN_NUMBER = -5
const STEP_AMOUNT = 1;

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')
const reset = document.querySelector('[data-key="reset"]')


const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT
    number.value = newValue;

    if (add.disabled === true ) {
        add.disabled = false
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true 
    } 
}

const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue;
    
    if (subtract.disabled === true ) {
        subtract.disabled = false 
    } 

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    }
}

const resetMessage = document.querySelector('#resetMessage')
resetMessage.hidden = true // hide message

const resetCounter = () => {
    number.value = 0 // reset count to zero
    add.disabled = false // ensure add is enabled
    subtract.disabled = false //ensure subtract is enabled

    resetMessage.hidden = false // show message
    setTimeout(() => {
        resetMessage.hidden = true // hide message again after 3seconds
    }, "3000")
    
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)
reset.addEventListener('click', resetCounter)