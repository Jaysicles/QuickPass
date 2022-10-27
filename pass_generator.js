/** Slider input value function */
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
    /** Form function */
const form = document.getElementById('quickpassGenForm')
const passwordDisplay = document.getElementById('pass-display')
    /** Generator value Elements */
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

const LOWECASE_CHAR_CODES = arrayFromHighToLow(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromHighToLow(65, 90)
const NUMBERS_CHAR_CODES = arrayFromHighToLow(48, 57)
const SYMBOL_CHAR_CODES = arrayFromHighToLow(33, 47).concat(
    arrayFromHighToLow(58, 64)
).concat(
    arrayFromHighToLow(91, 96)
).concat(
    arrayFromHighToLow(123, 126)
)

/** Generate pass event */
form.addEventListener('submit', e => {
    e.preventDefault()

    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked

    const pass = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = pass
})

/** Generate Password event */

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWECASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

/** Password ASCII array function */
function arrayFromHighToLow(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

/** Slider and number value event */
function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}