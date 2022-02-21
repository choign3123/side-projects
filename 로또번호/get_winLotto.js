let url = "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=903";

let xhr = new XMLHttpRequest();
xhr.open("GET",url);
xhr.send();

xhr.onload = () => {
    console.log(xhr.response);
}