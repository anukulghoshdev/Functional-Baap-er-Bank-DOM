function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldVauleString = inputField.value;
    const inputFieldVaule = parseFloat(inputFieldVauleString);
    inputField.value = '';
    return inputFieldVaule;
}


function getElementPreviousVlaueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}


function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}