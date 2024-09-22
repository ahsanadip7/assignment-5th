document.getElementById('donate-now-btn').addEventListener('click', function(){
    
const donateAmount = document.getElementById('input-value').value;

const mainAmount = document.getElementById('main-amount').innerText;

 if(donateAmount >= 10 && donateAmount <= mainAmount){
    const donateValue = getInputFieldValueById('input-value');
    const previousValue = getInputFieldTextById('older-value');
    const mainValue = getInputFieldTextById('main-amount');

    const newAmount = previousValue + donateValue;

    const newMainAmount = mainValue - donateValue;



    document.getElementById('older-value').innerText = newAmount;
    document.getElementById('main-amount').innerText =  newMainAmount;

    console.log(typeof newMainAmount)

    alert('your amount will be donated')

 }

 else(
    alert('wrong input')
 )
})



// card 2 ........


document.getElementById('donate-now-btn-2').addEventListener('click', function(){
    
    const donateAmountFlood = document.getElementById('input-value-2').value;
    
    const mainAmount = document.getElementById('main-amount').innerText;
    
     if(donateAmountFlood >= 10 && donateAmountFlood <= mainAmount){
        const donateValueFlood = getInputFieldValueById('input-value-2');
        const previousValueFlood = getInputFieldTextById('older-value-2');
        const mainValue = getInputFieldTextById('main-amount');
    
        const newAmountFlood = previousValueFlood + donateValueFlood;
    
        const newMainAmount = mainValue - donateValueFlood;
    
    
    
        document.getElementById('older-value-2').innerText = newAmountFlood;
        document.getElementById('main-amount').innerText =  newMainAmount;
    
        alert('your amount will be donated')
    
     }
    
     else(
        alert('wrong input')
     )
    })



