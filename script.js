let searchCity =()=> app()

let app = async () => {
let city= document.getElementById('city-input')
let usercity = city.value
let url= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${usercity}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`)
 // console.log(url)
cityDiv= document.getElementById('city-name')
weatherDiv= document.getElementById('weather-type')
temp=document.getElementById('temp')
minTemp=document.getElementById('min-temp')
maxTemp=document.getElementById('max-temp')
let data = await url.json()
  console.log(data)
 cityDiv.innerText = data.name
  weatherDiv.innerText = data.weather[0].description
  temp.innerText=data.main.temp
  minTemp.innerText=data.main.temp_min
  maxTemp.innerText=data.main.temp_max
  
}
