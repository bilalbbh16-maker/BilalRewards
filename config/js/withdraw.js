Enterdocument.getElementById("withdraw-form").addEventListener("submit", function(e){
    e.preventDefault();
    const wallet = document.getElementById("wallet").value;
    const amount = parseFloat(document.getElementById("amount").value);
    if(amount < SETTINGS.minWithdraw){
        document.getElementById("withdraw-message").innerText = "Minimum withdraw is $" + SETTINGS.minWithdraw;
        return;
    }
    // إرسال API request إلى FaucetPay
    fetch("https://faucetpay.io/api/v1/send",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization": SETTINGS.faucetPayApiKey
        },
        body: JSON.stringify({
            currency1:"USDT",
            amount1:amount,
            address:wallet,
            custom:"USER_ID"
        })
    }).then(res=>res.json()).then(data=>{
        document.getElementById("withdraw-message").innerText = "Withdraw processed!";
        console.log(data);
    }).catch(err=>{
        console.error(err);
        document.getElementById("withdraw-message").innerText = "Error processing withdraw.";
    });
});
