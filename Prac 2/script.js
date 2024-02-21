// Initializing the counter value
let counter = 999999;

const DISPLAY = document.getElementById('display');//display called 
const ALERT_EL = document.getElementById('alert');//alert called
const ERROR_MSG_OUT_OF_MEMORY = 'Out of memory'; //message is display if its cross the limit 999999
const ERROR_MSG_INVALID_RANGE = 'Zero is the low limit'; //message shown if its decrement below 0000

//updating Display
function updateDisplay() {
    const numberToString = addPaddingAtStart(counter.toString(), 4, '0');//convert counter to string and pad with zeros if necessary 
    const boxCount = numberToString.length;
    const spanElements = DISPLAY.children;

    // removing extra box after decrement
    for (let i = spanElements.length - 1; i >= boxCount; i--) {
        DISPLAY.removeChild(spanElements[i]);
    }

    //adding a box after a increment 
    for (let i = 0; i < boxCount; i++) {
        if (i < spanElements.length) {
            spanElements[i].innerText = numberToString[i];
        }
        else {
            addBox();//add new box if necessary
        }
    }
}

//Increment Function
function increment() {
    const boxCount = DISPLAY.children.length;
    counter++;
    if (counter.toString().length === 5 && boxCount === 4) { //showing the length of the box and boxcount 
        addBox();
    } else if (counter.toString().length === 6 && boxCount === 5) { //showng the length of the box and boxcount 
        addBox();
    } else if (counter.toString().length > 6) { //if the number reached 6 digit then show alert message 
        ALERT_EL.innerText = ERROR_MSG_OUT_OF_MEMORY;
        return;
    }
    ALERT_EL.innerText = '';

    updateDisplay();
}

//Adding a Box Function 
function addBox() {
    const SPAN = document.createElement('span');
    SPAN.classList.add('box');
    SPAN.innerText = 0;
    DISPLAY.append(SPAN);
}

//Decrement Function
function decrement() {
    if (counter === 0) {
        ALERT_EL.innerText = ERROR_MSG_INVALID_RANGE;
        return
    };
    counter--;
    updateDisplay();
}

//reset Function
function reset() {
    counter = 0;
    updateDisplay();
}

//Function to add padding at the start of a string
function addPaddingAtStart(originalString, desiredLength, paddingCharacter) {
    const originalStringLength = originalString.length;
    const remainingSpace = desiredLength - originalStringLength;
    if (remainingSpace > 0) {
        let newString = originalString;
        for (let i = 0; i < remainingSpace; i++) {
            newString = paddingCharacter + newString;
        }
        return newString
    }
    return originalString;
}



updateDisplay();//calling function
