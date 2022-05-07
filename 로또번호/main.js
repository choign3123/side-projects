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

Kakao.init('e39db69f7d81c9032d9ac31aa25b070d');

const button_kakao = document.querySelector("#kakao");
button_kakao.addEventListener("click", () => {
    Kakao.Link.sendScrap({
        requestUrl: 'http://localhost:8080/lotto_num/main.html'
      });
})