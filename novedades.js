//consumo de la API del SMN Argentino - Lo dejo comentado porque no estaba recibiendo los datos actualizados

/*const url ='https://ws.smn.gob.ar/map_items/weather'

fetch(url)
.then((response) =>{
    
    return response.json();
})

.then((data) =>{
    console.log(data)

    const clima = document.querySelector(".weather-info")

   for (i=0; i<218; i++){
        if(data[i].name === "Capital Federal"){
            console.log(i)
        }
   }

    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = today.toLocaleString('es-ES', options)
    const currentDate = 
    
    clima.innerHTML = `<p>${data[120].name}, Argentina. ${date} </p>
                        <p class="temp"> ${data[120].weather.temp} °C</p>    
                        <p>${data[120].weather.description}</p>
                        <p>Humedad: ${data[120].weather.humidity}</p>`


})*/

const response = fetch('https://api.openweathermap.org/data/2.5/weather?id=3433955&appid=11e3aefbf5ce7b90bb1c5410214fd701&units=metric&lang=es')

.then((response) =>{
    
    return response.json();
})

.then((data) =>{
    console.log(data)

    const clima = document.querySelector(".weather-info")
    const fecha = new Date().toLocaleString('es-es', {weekday: "long", year: "numeric", month:"long", day:"numeric"})
    const dia = fecha[0].toUpperCase() + fecha.slice(1)
    
    clima.style.position = "absolute"

    const date = document.querySelector(".date")
    const city = document.querySelector(".city")
    const temp = document.querySelector(".temp")
    const max = document.querySelector(".max")
    const min = document.querySelector(".min")
    const description = document.querySelector(".description")
    const background = document.querySelector(".background")

    console.log(data.name)
    date.textContent = dia
    city.textContent = data.name.slice(0, data.name.indexOf("F")) + ", Argentina"
    temp.textContent = Math.round(data.main.temp) + "°C";
    max.textContent = "Max.:" + " " + Math.round(data.main.temp_max) + "°C"
    min.textContent = "Min.:" + " " + Math.round(data.main.temp_min) + "°C"
    description.textContent = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1)
    
    //Icono del clima
    const icon = data.weather[0].icon

    
    

    if (icon === '01d' || icon === '02d') {
        background.src = "/img/Clima/clearSky.mp4"
    } else if( icon === '01n' || icon === '02n'){
        background.src = "/img/Clima/clearNightSky.mp4"
        date.style.color = "#fff"
        city.style.color = "#fff"
        temp.style.color = "#fff"
        max.style.color = "#fff"
        min.style.color = "#fff"
        description.style.color = "#fff"
    } else if ( icon === '03d') {
        background.src = "/img/Clima/parcialmenteNublado.mp4"
    } else if ( icon === '04d') {
        background.src = "/img/Clima/nublado.mp4"
    } else if ( icon === '03n' || icon === '04n' ) {
        background.src = "/img/Clima/nubladonoche.mp4"
        date.style.color = "#fff"
        city.style.color = "#fff"
        temp.style.color = "#fff"
        max.style.color = "#fff"
        min.style.color = "#fff"
        description.style.color = "#fff"
    } else if ( icon === '09d' || icon === '09n' || icon === '10n' || icon === '10d' ) {
        background.src = "/img/Clima/llovizna.mp4"
    } else {
        background.src = "/img/Clima/lightningStorm.mp4"
    }
})