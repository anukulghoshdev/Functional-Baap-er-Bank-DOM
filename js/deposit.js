
document.getElementById('btn-deposit').addEventListener('click', function () {
    /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */

    const newDepositAmount = getInputFieldValueById('deposit-field');
    /* 
    1. get previous deposit total by id
    */
    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }


    const previousDepositTotal = getElementPreviousVlaueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;  // calculate new deposit total
    setTextElementValueById('deposit-total', newDepositTotal); // set deposit total value


    // get previous balance by using the function
    const previousBalanceTotal = getElementPreviousVlaueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);


})