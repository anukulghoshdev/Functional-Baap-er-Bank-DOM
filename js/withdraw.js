/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/



document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmmount = getInputFieldValueById('withdraw-field');

    if (isNaN(newWithdrawAmmount)) {
        alert('Please provide a valid number');
        return;
    }

    const previousWithdrawTotal = getElementPreviousVlaueById('withdraw-total');
    


    const previousBalanceTotal = getElementPreviousVlaueById('balance-total');


    if (newWithdrawAmmount > previousBalanceTotal) {
        alert('Withdraw Amount Cross the main Balance! Please input within total balance!!!');
        return;
    }
    const newWithdrawTotal = newWithdrawAmmount + previousWithdrawTotal;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})