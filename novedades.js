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

//Api openweather del clima actual
const respuesta = fetch('https://api.openweathermap.org/data/2.5/weather?id=3433955&appid=11e3aefbf5ce7b90bb1c5410214fd701&units=metric&lang=es')

.then((respuesta) =>{
    return respuesta.json();
})

.then((datos) =>{
    console.log(datos)

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
    const forecast = document.querySelectorAll(".forecast")

    date.textContent = dia
    city.textContent = datos.name.slice(0, datos.name.indexOf("F")) + ", Argentina"
    temp.textContent = Math.round(datos.main.temp) + "°C";
    max.textContent = "Max.:" + " " + Math.round(datos.main.temp_max) + "°C"
    min.textContent = "Min.:" + " " + Math.round(datos.main.temp_min) + "°C"
    description.textContent = datos.weather[0].description[0].toUpperCase() + datos.weather[0].description.slice(1)

        //Icono del clima
        const icon = datos.weather[0].icon

        //Asignamos el background de acuerdo al código del icono que nos trae la API
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
            forecast[0].style.color = "#fff"
            forecast[1].style.color = "#fff"
            forecast[2].style.color = "#fff"
        } else if ( icon === '03d') {
            background.src = "/img/Clima/parcialmenteNublado.mp4"
        } else if ( icon === '04d') {
            background.src = "/img/Clima/nubladodia.mp4"
        } else if ( icon === '03n' || icon === '04n' ) {
            background.src = "/img/Clima/nubladonoche.mp4"
            date.style.color = "#fff"
            city.style.color = "#fff"
            temp.style.color = "#fff"
            max.style.color = "#fff"
            min.style.color = "#fff"
            description.style.color = "#fff"
            forecast[0].style.color = "#fff"
            forecast[1].style.color = "#fff"
            forecast[2].style.color = "#fff"
        } else if ( icon === '09d' || icon === '09n' || icon === '10n' || icon === '10d' ) {
            background.src = "/img/Clima/llovizna.mp4"
        } else {
            background.src = "/img/Clima/lightningStorm.mp4"
        }
    
    })

//Api openweather del pronostico extendido
const response = fetch('https://api.openweathermap.org/data/2.5/forecast?id=3433955&appid=11e3aefbf5ce7b90bb1c5410214fd701&units=metric&lang=es')

.then((response) =>{
    
    return response.json();
})

.then((data) =>{
    console.log(data)
        
    let weekDay = new Date().getDay()
    let today = new Date().getDate()
    console.log(today)
    console.log(data.list[0].dt_txt.slice(8,10))
    const week =["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]

    //Funcion para obtener la temperatura maxima de un día
    function getMaxTemp(day) {
        let max_temp = 0
        data.list.forEach((el, i) => {
            if(data.list[i].dt_txt.slice(8,10) == day) {
                if (max_temp < Math.round(data.list[i].main.temp_max)) {
                    max_temp = Math.round(data.list[i].main.temp_max)
                }
            }
        })
        return max_temp
    }

     //Funcion para obtener la temperatura minima de un día
    function getMinTemp(day) {
        let min_temp = 100
        data.list.forEach((el, i) => {
            if(data.list[i].dt_txt.slice(8,10) == day) {
                if (min_temp > Math.round(data.list[i].main.temp_min)) {
                    min_temp = Math.round(data.list[i].main.temp_min)
                }
            }
        })
        return min_temp
    }


    //Definimos las variables para los 3 días posteriores
    let day1 = ""
    let day2 = ""
    let day3 = ""

    //Asignamos el valor a las variables usando como referencia el dia actual
    if (weekDay<=3){
        day1 = week[weekDay + 1]
        day2 = week[weekDay + 2]
        day3 = week[weekDay + 3]
    } else if (weekDay === 4) {
        day1 = week[weekDay + 1]
        day2 = week[weekDay + 2]
        day3 = week[0]
    } else if (weekDay === 5) {
        day1 = week[weekDay + 1]
        day2 = week[0]
        day3 = week[1]
    } else {
        day1 = week[0]
        day2 = week[1]
        day3 = week[2]
    }

    const dayAfter = document.getElementById("dia-1")
    const dayAfterMinMax = document.getElementById("dia1-M&M")
    const dayAfter1 = document.getElementById("dia-2")
    const dayAfter1MinMax = document.getElementById("dia2-M&M")
    const dayAfter2 = document.getElementById("dia-3")
    const dayAfter2MinMax = document.getElementById("dia3-M&M")
    const img_1 = document.querySelector(".icon-1")
    const img_2 = document.querySelector(".icon-2")
    const img_3 = document.querySelector(".icon-3")

    //Asignamos al elemento el día y su temperatura max y min invocando las funciones definidas previamente
    dayAfter.textContent = day1
    dayAfterMinMax.textContent = "Min.:" + " " + getMinTemp(today + 1) + "° " + " " + "Max.:" + " " + getMaxTemp(today + 1) + "°"
    dayAfter1.textContent = day2
    dayAfter1MinMax.textContent = "Min.:" + " " + getMinTemp(today + 2) + "° " +  " " + "Max.:" + " " + getMaxTemp(today + 2) + "°"
    dayAfter2.textContent = day3
    dayAfter2MinMax.textContent = "Min.:" + " " + getMinTemp(today + 3) + "°" + " " + "Max.:" + " " + getMaxTemp(today + 3) + "°" 

    
    function getWeather(day) {
        let icono = []
        data.list.forEach((e, i) => {
            if(data.list[i].dt_txt.slice(8,10) == day) {
                //creamos un array con los codigos de los iconos del día pasado como argumento
                if(data.list[i].weather[0].icon.includes('01') || data.list[i].weather[0].icon.includes('02')){
                    icono.push('01d')
                } else if (data.list[i].weather[0].icon.includes('03')){
                    icono.push('03d')
                } else if (data.list[i].weather[0].icon.includes('04')){
                    icono.push('04d')
                } else if (data.list[i].weather[0].icon.includes('09') || data.list[i].weather[0].icon.includes('10') ){
                    icono.push('09d')
                } else if (data.list[i].weather[0].icon.includes('11')){
                    icono.push('11d')
                } else if (data.list[i].weather[0].icon.includes('12')){
                    icono.push('12d')
                } else if (data.list[i].weather[0].icon.includes('13')){
                    icono.push('13d')
                }
            }
        })
        //creamos una funcion para obtener el elemento que mas se repite en el array icono
        const masRepetido = ar => ar.reduce((acum, el, i, ar) =>{
            const count = ar.filter(e => e==el).length;
            return count > acum[1] ? [el, count] : acum;
        }, ["", 0]
        )
        return masRepetido(icono)[0]
    }

    //Asignamos el icono del clima de los días posteriores en función al icono
    const icon_1 = getWeather(today + 1)
    console.log(icon_1)
    const icon_2 = getWeather(today + 2)
    console.log(icon_2)
    const icon_3 = getWeather(today + 3)
    console.log(icon_3)

    if (icon_1.includes('01') || icon_1.includes('02') ) {
        img_1.src = "/img/Clima/iconos/soleado.png"
    } else if (icon_1.includes('03')) {
        img_1.src = "/img/Clima/iconos/parcial nublado.png"
    } else if (icon_1.includes('04')) {
        img_1.src = "/img/Clima/iconos/nublado.png"
    } else if ( icon_1.includes('09') || icon_1.includes('10')) {
        img_1.src = "/img/Clima/iconos/lluvia.png"
    } else if (icon_1.includes('11')) {
        img_1.src = "/img/Clima/iconos/tormenta.png"
    } else if (icon_1.includes('13')) {
        img_1.src = "/img/Clima/iconos/nieve.png"
    } else {
        img_1.src = "/img/Clima/iconos/niebla.png"
    }

    if (icon_2.includes('01') || icon_2.includes('02') ) {
        img_2.src = "/img/Clima/iconos/soleado.png"
    }  else if (icon_2.includes('03')) {
        img_2.src = "/img/Clima/iconos/parcial nublado.png"
    } else if (icon_2.includes('04')) {
        img_2.src = "/img/Clima/iconos/nublado.png"
    } else if ( icon_2.includes('09') || icon_2.includes('10')) {
        img_2.src = "/img/Clima/iconos/lluvia.png"
    } else if (icon_2.includes('11')) {
        img_2.src = "/img/Clima/iconos/tormenta.png"
    } else if (icon_2.includes('13')) {
        img_2.src = "/img/Clima/iconos/nieve.png"
    } else {
        img_2.src = "/img/Clima/iconos/niebla.png"
    }

    if (icon_3.includes('01') || icon_3.includes('02') ) {
        img_3.src = "/img/Clima/iconos/soleado.png"
    }  else if (icon_3.includes('03')) {
        img_3.src = "/img/Clima/iconos/parcial nublado.png"
    } else if (icon_3.includes('04')) {
        img_3.src = "/img/Clima/iconos/nublado.png"
    } else if ( icon_3.includes('09') || icon_3.includes('10')) {
        img_3.src = "/img/Clima/iconos/lluvia.png"
    } else if (icon_3.includes('11')) {
        img_3.src = "/img/Clima/iconos/tormenta.png"
    } else if (icon_3.includes('13')) {
        img_3.src = "/img/Clima/iconos/nieve.png"
    } else {
        img_3.src = "/img/Clima/iconos/niebla.png"
    }
})