

let body = document.body;
// console.log(body);

let btn= document.querySelector(".btn");
// console.log(btn);

let textContent=document.querySelector("h1");
// console.log(textContent);
let type=textContent.innerText;
// console.log(type);
// event listner
let change = document.querySelector(".span");

function colorGenerator(){
    let red= Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    const randomColor=`rgb(${red},${green},${blue})`;
    return randomColor;
}

btn.addEventListener("mouseover",()=>{
let func=colorGenerator;
body.style.backgroundColor = func();
change.innerText=func();
});










// console.log(random);




