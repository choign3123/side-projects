let rotto_nums = document.querySelectorAll(".rotto_num");

let rotto_list = [];

const reset_rotto = () => {
    rotto_list = [];

    for(let i =0; i<7; i++){
        while(1){
            const n = Math.floor(Math.random() * 45 + 1);
            if(!rotto_list.includes(n)){
                rotto_list.push(n);
                break;
            }
        }

        
    }
}

const reset_button = document.querySelector("#reset_button");

reset_button.addEventListener("click", () => {
    reset_rotto();
    rotto_nums.forEach((num, i) => {
        num.textContent = `${rotto_list[i]}`;
    });
} )