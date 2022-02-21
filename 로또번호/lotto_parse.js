let xhr = new XMLHttpRequest();
xhr.open("GET","https://www.google.co.kr/search?newwindow=1&sxsrf=APq-WBvPUioe0OTsIX8CNSDh3kqQjfpxJw%3A1645253158652&lei=JpIQYpG1J6TUmAWRzrqQAg&q=javascript%20%EC%9B%B9%20%ED%8E%98%EC%9D%B4%EC%A7%80%20%EA%B8%81%EC%96%B4%EC%98%A4%EA%B8%B0&ved=2ahUKEwiR4NjQlYv2AhUkKqYKHRGnDiIQsKwBKAB6BAg7EAE&biw=912&bih=920&dpr=1");

// function test(){

//     if(xhr.readyState == '4'){
//     console.log('complete road');

//     let i;
//     var el = document.createElement('yoso')
//     el.innerHTML = xhr.responseText;

//     for(i=0;i<el.querySelectorAll('.card-title').length;i++) {
//     document.writeln(el.querySelectorAll('.card-title')[i].innerText+'<br>');
//     }
//     clearInterval(timer);
//     }
//     else{
//         console.log('loading');

//     }
// }

// console.log("안됨");
xhr.onload = () => {
    console.log("됨");
    console.log(xhr.responseText);
}

xhr.send();
