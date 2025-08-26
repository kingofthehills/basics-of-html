 const input=document.getElementById('input')
 const search=document.getElementById('search')
 const weather_img=document.getElementById('weatherimg')
 const city=document.getElementById('city')
 const temp=document.getElementById('temp')
 const wind=document.getElementById('wind')
 const humidity=document.getElementById('humidity')
 const apiUrl='https://api.openweathermap.org/data/2.5/weather?&units=metric&q='
const apiKey='12a15334ee2ff243c9bf080ae0666f77'

async function Search(e){
    const res=await fetch(apiUrl+e+`&appid=${apiKey}`)
    const data=await res.json()
    console.log(data)//this all are based on api to get the data to redirect fropm the web api
    document.getElementById('temp').innerHTML="temp :"+data.main.temp+"°C"
    document.getElementById('city').innerHTML="city :"+data.name
    document.getElementById('wind').innerHTML="wind speed :"+data.wind.speed+"km/hr"
    document.getElementById('humidity').innerHTML="humidity :"+data.main.humidity+"%"

    if(data.weather[0].main==="Clear"){
        weather_img.src="pictures/log.jpeg"  
    }
    if(data.weather[0].main==="Clouds"){
        weather_img.src="pictures/cloudy.jpeg"  
    }
    if(data.weather[0].main==="Rain"){
        weather_img.src="pictures/rain.jpeg"  
    }
}

search.addEventListener("click",()=>{
    Search(input.value)
})