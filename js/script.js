// card 1......

document.getElementById('donate-now-btn').addEventListener('click', function(){
    
const donateAmount = document.getElementById('input-value').value;

const mainAmount = document.getElementById('main-amount').innerText;

const donateValue = getInputFieldValueById('input-value');
const previousValue = getInputFieldTextById('older-value');
const mainValue = getInputFieldTextById('main-amount');


 if(donateValue  >= 10 && donateValue <= mainValue){

  

    const newAmount = previousValue + donateValue;

    const newMainAmount = mainValue - donateValue;

   
    document.getElementById('older-value').innerText = newAmount;
    document.getElementById('main-amount').innerText =  newMainAmount;


    my_modal_1.showModal()
   

   //  add to history..
  

   const div = document.createElement('div');
   div.classList.add("grid");
   div.innerHTML = `
     
      <p class = "font-bold lg:text-3xl text-2xl border-solid border-2 border-indigo-600 p-12 mx-5 lg:mx-32 mt-10 rounded-2xl"> ${donateValue} Taka is Donated for famine-2024 at Feni, Bangladesh. 
      <br>
      <span class = "font-medium text-lg"> ${Date()} <span/>
      <p/>
     
   `

   document.getElementById('history-container').appendChild(div);


 }

 else(
    alert('wrong input')
 )
})



// card 2 ........


document.getElementById('donate-now-btn-2').addEventListener('click', function(){
    
    const donateAmountFlood = document.getElementById('input-value-2').value;
    
    const mainAmount = document.getElementById('main-amount').innerText;

    const donateValueFlood = getInputFieldValueById('input-value-2');
    const previousValueFlood = getInputFieldTextById('older-value-2');
    const mainValue = getInputFieldTextById('main-amount');
    
     if(donateValueFlood >= 10 && donateValueFlood <= mainValue){
      
    
        const newAmountFlood = previousValueFlood + donateValueFlood;
    
        const newMainAmount = mainValue - donateValueFlood;
    
    
    
        document.getElementById('older-value-2').innerText = newAmountFlood;
        document.getElementById('main-amount').innerText =  newMainAmount;
    
        my_modal_1.showModal()

           //  add to history..

   const div = document.createElement('div');
   div.classList.add("grid");
   div.innerHTML = `
      
      <p class = "font-bold lg:text-3xl text-2xl border-solid border-2 border-indigo-600 p-12 mx-5 lg:mx-32 mt-10 rounded-2xl"> ${donateValueFlood} Taka is Donated for famine-2024 at Feni, Bangladesh.
      <br>
      <span class = "font-medium text-lg"> ${Date()} <span/> <p/>
   `

   document.getElementById('history-container').appendChild(div);

    
     }
    
     else(
        alert('wrong input')
     )
    })

   //  card 3..........


   document.getElementById('donate-now-btn-3').addEventListener('click', function(){
    
      const donateAmountQuota= document.getElementById('input-value-3').value;
      
      const mainAmount = document.getElementById('main-amount').innerText;

      const donateValueQuota = getInputFieldValueById('input-value-3');
      const previousValueQuota = getInputFieldTextById('older-value-3');
      const mainValue = getInputFieldTextById('main-amount');
      
       if(donateValueQuota >= 10 && donateValueQuota <= mainValue){
         
      
          const newAmountQuota = previousValueQuota + donateValueQuota;
      
          const newMainAmount = mainValue - donateValueQuota;
      
      
      
          document.getElementById('older-value-3').innerText = newAmountQuota;
          document.getElementById('main-amount').innerText =  newMainAmount;
      
          my_modal_1.showModal()

             //  add to history..

   const div = document.createElement('div');
   div.classList.add("grid");
   div.innerHTML = `
     
      <p class = "font-bold lg:text-3xl text-2xl border-solid border-2 border-indigo-600 p-12 mx-5 lg:mx-32 mt-10 rounded-2xl"> ${donateValueQuota} Taka is Donated for famine-2024 at Feni, Bangladesh.
      <br>
      <span class = "font-medium text-lg"> ${Date()} <span/> <p/>
   `

   document.getElementById('history-container').appendChild(div);

      
       }
      
       else(
          alert('wrong input')
       )
      })



      // history........

      document.getElementById('donate-btn').addEventListener('click', function(){
         showSectionById('donate-card-container')
      })

      document.getElementById('history-btn').addEventListener('click', function(){
         showSectionById('history-container')
      })
  
     
  

