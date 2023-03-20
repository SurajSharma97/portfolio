const clock =document.querySelector(".clock");



let second= 0,minute=0, hour=0;
let intervalId;



const startStopWatch=()=>{
intervalId=setInterval(()=>{
    if(second<59){
        second++;
    }else if(minute>=59){
        hour++;
        minute=0;
    }else{
        second=0;
        minute++;
    }
hr=String(hour).padStart(2,"0");
min=String(minute).padStart(2,"0");
sec=String(second).padStart(2,"0");

   const tiktok=`${hr}:${min}:${sec}`;
   console.log(tiktok)
   clock.textContent=tiktok;
    },1000)
}
const stopStopWatch=()=>{
clearInterval(intervalId);
alert(`yeah its over ! ${tiktok}`);
}