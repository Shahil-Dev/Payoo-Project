document.getElementById('button-click')
        .addEventListener('click', function(e){
            e.preventDefault()
            // console.log("it's work");
            const numberValue  = document.getElementById('number').value
            const pinNumber    = document.getElementById('pin').value
            console.log(numberValue , pinNumber);
            if(numberValue === '12345' && pinNumber =='111'){
                console.log("it's okk");
                window.location.href = './basic.html'
            }
            else{
                alert("something went wrong")
            }
        })