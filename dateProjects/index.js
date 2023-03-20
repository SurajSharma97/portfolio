// import sass2 from "./sass2.scss"
const second = 1000;
const minute = 60*second;
const hour = 60 *minute;
const day = 24* hour;
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const heading=document.querySelector(".heading")
const counterTimer= document.querySelector(".CounterTimer")
console.log(counterTimer);
// span.innerText=text;



// console.log(span)




const timer=()=>{
    let dd=String(new Date().getDate()).padStart(2,"0")
    let mm=String(new Date().getMonth()).padStart(2,"0")
    let yyyy=String(new Date().getFullYear());
    // console.log(yyyy);
    let now =`${dd}/${mm}/${yyyy}`;
    
let enteredDay=prompt("enter Day here").padStart(2,"0");
let enteredMonth= prompt("enter months here").padStart(2,"0");
// let enteredYear=prompt("enter year here");
let current =`${mm}/${dd}/${yyyy}`;
console.log(current)
const target= `${enteredMonth}/${enteredDay}/${yyyy}` 

// console.log(target)

if(current>target){
    target= `${enteredMonth}/${enteredDay}/${yyyy+1}`;
    // console.log(target)
}
    setInterval(()=>{
let update=new Date(target);
    const timediffer = update.getTime();
    const today = new Date().getTime();
    const difference = timediffer - today;
     const dayPeriod= Math.floor(difference / day);
 const hourPeriod =Math.floor((difference % day) / hour);
 const minutePeriod = Math.floor((difference%hour) / minute);
 const secondPeriod = Math.floor((difference%minute) /second);
//  const text=`${dayPeriod}: ${hourPeriod}: ${minutePeriod}: ${secondPeriod}`;
 days.textContent=dayPeriod;
 hours.textContent=hourPeriod;
 minutes.textContent=minutePeriod;
 seconds.textContent=secondPeriod;

if(difference < 0){counterTimer.style.display="none";
heading.textContent="Time's UP"}
// console.log(heading)





},0)

}
timer()

console.log(heading)