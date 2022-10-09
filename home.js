/* Activar animación del elemento al hacer scroll*/
window.addEventListener('scroll', ()=>{
    const title = document.querySelector('.title')
    const description = document.querySelector('.description')
    const circle = document.getElementById('circle')
    const p1 = document.getElementById('text-1')
    const p2 = document.getElementById('text-2')
    const screenSize = window.innerHeight

    if (circle.getBoundingClientRect().top < screenSize + 50) {
        circle.classList.add('scrolled')
        setTimeout(()=> p1.classList.add('scrolled'), 1000)
        setTimeout(()=> p2.classList.add('scrolled'), 2500)
    } else {
        circle.classList.remove('scrolled')
        p1.classList.remove('scrolled')
        p2.classList.remove('scrolled')
    }

    if (title.getBoundingClientRect().top < screenSize ) {
        title.classList.add('scrolled')
        description.classList.add('scrolled')
    } else {
        title.classList.remove('scrolled')
        description.classList.remove('scrolled')
    }   
})


/* Funciones para botones y flechas carrusel*/
const screen = document.querySelector('.screen');
const button = document.querySelectorAll('.button');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
var counter = 0
console.log(button)
button.forEach((punto, i) => {
    button[i].addEventListener('click', () => {


        let position = i;
        let calcPosition = position * -25;

        screen.style.transform = `translateX(${calcPosition}%)`;

        button.forEach((punto, i) => {
            button[i].classList.remove('active')
        })
        button[i].classList.add('active');
        counter = i
    })
})


rightArrow.onclick = () => {
    if (counter < 3) {
        rightArrow.classList.add('fa-beat-fade')
        counter++;
        console.log(counter)
        button[counter - 1].classList.remove('active')
        button[counter].classList.add('active')
        screen.style.transform += `translateX(-25%)`;
        setTimeout(() => rightArrow.classList.remove('fa-beat-fade'), 1000)
    }
}

leftArrow.onclick = () => {
    if (counter > 0) {
        leftArrow.classList.add('fa-beat-fade')
        counter--;
        console.log(counter)
        button[counter + 1].classList.remove('active')
        button[counter].classList.add('active')
        screen.style.transform += `translateX(25%)`;
        setTimeout(() => leftArrow.classList.remove('fa-beat-fade'), 1000)
    }
}


//Opción de mostrar mapa con botón
/*
const showMap = document.querySelector('.show-map');

showMap.addEventListener('click', () => {
    const map = document.querySelector('.location');
    if (showMap.innerHTML == "Ver ubicación en mapa") {
        map.style.display = `flex`;
        showMap.innerHTML = "Ocultar mapa";
    }
    else {
        map.style.display = `none`;
        showMap.innerHTML = "Ver ubicación en mapa";
    }
});*/
