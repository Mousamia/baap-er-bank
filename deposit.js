// step-1: addling eventhandler
document.getElementById('btn-deposit').addEventListener('click', function(){
   const depositField = document.getElementById('deposit-field');
   const depositAmount = depositField.value;
const previousAmount = parseInt(depositAmount);
   
   
  
   const depositTotalElement = document.getElementById('deposit-total');
    const depositShow = depositTotalElement.innerText;
     const showingAmount = parseInt(depositShow);
    

    // step:2 getting the deposit total
    let total = previousAmount + showingAmount;
    depositTotalElement.innerText = total;
    
    // step:3 getting balance total

    const balancePrevious = document.getElementById('balance-total')
    const balanceShow = balancePrevious.innerText;
    const previousBalance = parseInt(balanceShow);


    balancePrevious.innerText = previousBalance + previousAmount; 

    depositField.value = ''; //input field value 0 korbe
    



})

// step:2 getting the deposit total
