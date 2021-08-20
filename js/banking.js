function getInputValue(){
    depositInput = document.getElementById('your-deposit-amount');
    depositInputText = depositInput.value;
    depositInputTotal = parseFloat(depositInputText);
    return 
}



// deposite button hendel
document.getElementById('deposit-btn').addEventListener('click', function(){
    depositInput = document.getElementById('your-deposit-amount');
    depositInputText = depositInput.value;
    depositInputTotal = parseFloat(depositInputText);

    // add total deposit
    previousDeposit = document.getElementById('total-amount');
    previousDepositText = previousDeposit.innerText ;
    previousDepositTotal = parseFloat(previousDepositText);

    previousDeposit.innerText = previousDepositTotal + depositInputTotal;
    

    // add total balancet
    previousBalance = document.getElementById('total-balance');
    previousBalanceText = previousBalance.innerText;
    previousBalanceTotal = parseFloat(previousBalanceText);

    previousBalance.innerText= previousBalanceTotal +  depositInputTotal;
    


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

    previousWithdraw.innerText =  previousWithdrawTotal + withdrawInputTotal;
    

    // balance
    previousBalance = document.getElementById('total-balance');
    previousBalanceText = previousBalance.innerText;
    previousBalanceTotal = parseFloat(previousBalanceText);

    previousBalance.innerText = previousBalanceTotal - withdrawInputTotal;
    
    withdrawInput.value = '';

})
