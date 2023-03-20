const temperatureField = document.querySelector(".weather1");
const cityField=document.querySelector(".weather2 p");
const dateField=document.querySelector(".weather2 span");
const conditionField=document.querySelector(".weather3 span");
const emojiField=document.querySelector(".weather3 img");
const weatherField=document.querySelector(".weather3 span");
const searchField=document.querySelector(".search");
const form=document.querySelector(".form");



let city="Gurgaon";

const fetchApi=async (city)=>{
    try{
    const url= `http://api.weatherapi.com/v1/current.json?key=e93b5f8bc2e6442ab1d105118231802&q=${city}`;
    const response=await fetch(url);
    const data = await response.json();

    const {current:{temp_c,condition:{text,icon},},
    location:{name},
    location:{localtime},}=data;

    updateDom(temp_c,name,localtime,icon,text);
}
catch(error){
    alert("there is an error with api ")
}

}

 function updateDom(temp,city,time,emoji,text) {
    temperatureField.innerHTML=temp;
    cityField.innerHTML=city;
    dateField.innerHTML=time;
    emojiField.src=emoji;
    weatherField.innerHTML=text;}

    const search=(e)=>{
         e.preventDefault();
        city=searchField.value;
         fetchApi(city);   
            
    }
    form.addEventListener("submit",search);
    

 fetchApi()