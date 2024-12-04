document.getElementById('cash')
.addEventListener('click' , function(){
    console.log("okk Thik ache");
    document.getElementById('core').classList.remove('hidden')
    document.getElementById('pro').classList.add('hidden')
    
})

// document.getElementById('book').addEventListener('click',function(){
//     console.log("okk cholteche");
//     document.getElementById('pro').classList.add('hidden')
// })







document.getElementById('cashOutLogin').addEventListener('click',function(e){
    e.preventDefault()
    console.log("it's work");
    
  const cashOutPin  =  document.getElementById('cashOutPin').value
  const cashOutAmount = document.getElementById('cashOutAmount').value
   console.log(cashOutPin , cashOutAmount);
   if(cashOutPin === '111'){
       console.log('Cash out successful');
      const totalMoney = document.getElementById('total').innerText
      const newBd = parseFloat(totalMoney)
      const newtaka = parseFloat(cashOutAmount)     
      const cashOutTaka = newBd - newtaka
      console.log(cashOutTaka);
      document.getElementById('total').innerText = cashOutTaka
   }
   else{
    alert("something want wrong")
   }
})