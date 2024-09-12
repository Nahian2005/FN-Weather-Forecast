const img=document.getElementById("img");
const temp =document.getElementById("h1");
const weatherbody= document.getElementById("h3");
const humidity=document.getElementById("h4");
const windspeed=document.getElementById("h6");
const humidity1=document.getElementById("h5");
const feelslike=document.getElementById("h7");
const input=document.getElementById("in");
const button=document.getElementById("btn");
const more=document.getElementById("h2");

const dhakaweather= async ()=>{

const url2= `http://api.weatherapi.com/v1/current.json?key=83217e8a1a6a447697071440240809&q=Dhaka&aqi=no`
const weather2= await fetch(`${url2}`)
.then(res=>res.json())


//console.log(weather2)
temp.innerHTML=`${Math.round(weather2.current.temp_c)}°C`,
weatherbody.innerHTML=`${weather2.current.condition.text}`
feelslike.innerHTML=`Feels like: ${Math.round(weather2.current.feelslike_c)}°C`
humidity.innerHTML=`Humidity percentage: ${weather2.current.humidity}%`
windspeed.innerHTML=`Speed of wind: ${weather2.current.wind_kph} km/h`
more.innerHTML=`Current weather of ${weather2.location.name}`

}
dhakaweather()



input.addEventListener("keyup" ,e =>{

    e.preventDefault();
    if(e.keyCode===13){
    
        console.log("Enter is pressed")
        button.click();
    }
})

let buttoncall= async (city)=>{

const api_key="08728246a47d4c40e1a748a17b6c5125"
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data=await fetch(`${url}`)
    .then(res=>res.json())
    console.log(weather_data);
    temp.innerHTML=`${Math.round(weather_data.main.temp-273)}°C`
    weatherbody.innerHTML=`${weather_data.weather[0].description}`
    humidity.innerHTML=`Humidity percentage: ${weather_data.main.humidity}%`
    windspeed.innerHTML=`Speed of wind: ${weather_data.wind.speed} km/h`
    feelslike.innerHTML=`Feels Like: ${Math.round(weather_data.main.feels_like-273.15)}°C` 
    more.innerHTML=`Showing Weather Of: ${input.value}`

    switch(weather_data.weather[0].main){

        case "Clouds":
          img.src="cloud.png"
          break;
    
          case "Clear":
    
          img.src="clear.png"
          break;
          case "Rain":
    
          img.src="rain.png"
          break;
          case "Mist":
    
          img.src="mist.png"
          break;
          case "Snow":
    
          img.src="snow.png"
          break; 
    
       } 
}  


button.addEventListener('click',()=>{
    buttoncall(input.value);
} )

setInterval(t,1000)
function t(){

    const h4=document.getElementById("time")
    const date= new Date()
    h4.innerHTML=`Bangladesh Standard Time: ${date.toLocaleTimeString()}`

}
