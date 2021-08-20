// deposite button hendel
document.getElementById('deposit-btn').addEventListener('click', function(){
    depositInput = document.getElementById('your-deposit-amount');
    depositInputText = depositInput.value;
    depositInputTotal = parseFloat(depositInputText);

    // add total deposit
    previousDeposit = document.getElementById('total-amount');
    previousDepositText = previousDeposit.innerText ;
    previousDepositTotal = parseFloat(previousDepositText);

    newDepositAmount = previousDepositTotal + depositInputTotal;
    previousDeposit.innerText = newDepositAmount;

    // add total balance
    previousBalance = document.getElementById('total-balance');
    previousBalanceText = previousBalance.innerText;
    previousBalanceTotal = parseFloat(previousBalanceText);

    newBalanceTotal = previousBalanceTotal +  depositInputTotal;
    previousBalance.innerText = newBalanceTotal;


    // clear input
    depositInput.value = '';

});


// Withdraw button hendeler
document.getElementById('withdraw-btn').addEventListener('click', function(){
    withdrawInput= document.getElementById('your-withdraw-amount');
    withdrawInputText = withdrawInput.value;
    withdrawInputTotal = parseFloat(withdrawInputText);

    // add withdraw
    previousWithdraw = document.getElementById('total-withdraw');
    previousWithdrawText = previousWithdraw.innerText;
    previousWithdrawTotal = parseFloat(previousWithdrawText);

    newWithdrawAmount =  previousWithdrawTotal + withdrawInputTotal;
    previousWithdraw.innerText = newWithdrawAmount;


    // balance
    previousBalance = document.getElementById('total-balance');
    previousBalanceText = previousBalance.innerText;
    previousBalanceTotal = parseFloat(previousBalanceText);

    newUpdetBalance = previousBalanceTotal - withdrawInputTotal;
    previousBalance.innerText = newUpdetBalance; 


    withdrawInput.value = '';

})
