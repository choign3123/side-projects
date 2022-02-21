const bonus_checkBox = document.querySelector("#bonus-checkBox");
const bonus_num = document.querySelector("#rotto_num_plus");
const test = document.querySelector("#test");

bonus_num.style.display = "none";
bonus_checkBox.addEventListener("change", (e) => {
    if(e.currentTarget.checked){
        bonus_num.style.display = "inline-flex";
        console.log("hello");
    }
    else{
        bonus_num.style.display = "none";
    }
})