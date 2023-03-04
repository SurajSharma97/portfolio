
// fetching joke from api



const head = document.querySelector(".heading");
const btn1 =document.querySelector(".btn");
const url="https://official-joke-api.appspot.com/random_joke";
const input1 =document.getElementById("input")
const randomjokeGnerator=btn1.addEventListener("click", function(){
    
    fetch(url)
    
    
    .then((response)=>{
        
        // console.log(response)
       return  response.json();
    })
    .then((e)=>{    
        const set=e.setup;
        const punch=e.punchline;
        const type=e.type;

        head.textContent=`${set} : ${punch}`;

        // console.log(data)
        return type;
    })
    .then((type)=>{
        console.log(type);
        
    }) 
})


function debounce(func, delay){
let timeoutID;
return function (...args)
{
    if(timeoutID){

        clearTimeout(timeoutID);
    }

timeoutID= setTimeout(()=>{
    func.call(this, ...args);
}, delay);
};

}

//input 

function suggest(e){
    console.log("",e.target.value);
    e.target.value==type;
}

const decoratedfunc= debounce(suggest,1000);
const fun = input1.addEventListener("input", decoratedfunc);

console.log(fun)



console.log(randomjokeGnerator)



