document.getElementById("btn-deposit").addEventListener("click", function () {

    const inputDeposit = document.getElementById("deposit-field");
    const inputDepositString = inputDeposit.value;
    //console.log(inputDepositString);
    const inputDepositFloat = parseFloat(inputDepositString);

    //! validation
    if (isNaN(inputDepositString)) {
        alert("Please enter a valid number");
        return
    }

    //! validation for only positive number
    if (isNaN(inputDepositString) || inputDepositString <= 0) {
        alert("Please enter a valid positive number");
        return;
    }


    const depositTotal = document.getElementById("deposit-total");
    const depositCalculatorFloat = inputDepositFloat;
    //set the deposit total 
    depositTotal.innerText = depositCalculatorFloat;

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalance = previousBalanceTotal + depositCalculatorFloat;
    // set the balance total
    balanceTotalElement.innerText = currentBalance;

    inputDeposit.value = '';
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
    const amount = document.getElementById("withdraw-field");
    const amountString = amount.value;
    const amountFloat = parseFloat(amountString);


    const balance = parseFloat(document.getElementById("balance-total").innerText);

    //! validation for only number
    if (isNaN(amountString)) {
        alert("Please enter a valid number");
        return
    }

    //! validation for only positive number
    if (isNaN(amountString) || amountString <= 0) {
        alert("Please enter a valid positive number");
        return;
    }

    //! validation for only withdrawal amount
    if (amountFloat > balance) {
        alert("Sorry, insufficient amount!");
        return;
    }

    document.getElementById("withdraw-total").innerText = amountFloat;
    document.getElementById("balance-total").innerText = (balance - amountFloat).toFixed(2);
    document.getElementById("withdraw-field").value = '';
});