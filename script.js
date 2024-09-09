const img=document.getElementById("img");
const temp =document.getElementById("h1")
const weatherbody= document.getElementById("h3")
const humidity=document.getElementById("h4")
const windspeed=document.getElementById("h6")
const humidity1=document.getElementById("h5")
const feelslike=document.getElementById("h7")
const input=document.getElementById("in")
const button=document.getElementById("btn");

input.addEventListener("keyup" ,e =>{

    e.preventDefault();
    if(e.keyCode===13){
    
        console.log("Enter is pressed")
        button.click();
    }
})

const buttoncall= async (city)=>{

    const api_key="08728246a47d4c40e1a748a17b6c5125"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data=await fetch(`${url}`)
    .then(res=>res.json())
    console.log(weather_data);
    temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`
    weatherbody.innerHTML=`${weather_data.weather[0].description}`
    humidity.innerHTML=`Humidity: ${weather_data.main.humidity}%`
    windspeed.innerHTML=`Wind Speed: ${weather_data.wind.speed} km/h`
    feelslike.innerHTML=`Feels Like: ${Math.round(weather_data.main.feels_like-273.15)}°C` 

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