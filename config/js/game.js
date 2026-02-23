here// Canary Clicker Example
let clicks = 0;
const btn = document.getElementById("canary-btn");
const display = document.getElementById("canary-clicks");
btn.addEventListener("click",()=>{
    clicks++;
    display.innerText = clicks;
    if(clicks % 10 === 0){
        alert("Watch a video ad now!");
        // هنا تضيف كود الفيديو الإعلاني
    }
});

// Snake Game placeholder
// يمكن إضافة كود اللعبة هنا مع عداد المكافآت كل دقيقة
