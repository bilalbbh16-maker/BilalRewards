heredocument.addEventListener("DOMContentLoaded", function(){
    // مثال تحديث واجهة المستخدم
    const user = auth.currentUser;
    if(user){
        db.collection("users").doc(user.uid).get().then(doc=>{
            if(doc.exists){
                const balance = doc.data().balance;
                console.log("Your balance:", balance);
            }
        });
    }
    document.getElementById("banner-ad").innerHTML = SETTINGS.bannerAdCode;
    document.getElementById("smart-links").innerHTML = SETTINGS.smartLinkCode;
});
