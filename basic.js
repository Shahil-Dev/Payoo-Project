document.getElementById('logedin').addEventListener("click", function (e) {
    e.preventDefault();
    const addedNumber = document.getElementById('accountNumber').value;
    const pin = document.getElementById('pin').value;
    const amount = document.getElementById('taka').value;
    console.log(addedNumber, pin, amount);

    if (pin === '111' && addedNumber === '12345') {
        console.log('Payment successful');

        const poisha = document.getElementById("total").innerText;
        const newMoney = parseFloat(poisha);
        const newAdd = parseFloat(amount);
        const totalBalance = newMoney + newAdd;

        document.getElementById('total').innerText = totalBalance;

        // Show the alert
        const alertBox = document.getElementById('alert');
        alertBox.classList.remove('hidden'); // Remove the 'hidden' class to make it visible
        alertBox.style.display = 'block';

        // Optionally hide the alert after a few seconds
        setTimeout(() => {
            alertBox.classList.add('hidden'); // Add back the 'hidden' class to hide it
        }, 3000);
    } else {
        alert("Something went wrong");
    }
});
 