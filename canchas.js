
const filter = document.getElementsByClassName("filter-options");
const option = document.getElementById("option");
const value = document.querySelectorAll(".values")
const info = document.querySelectorAll(".description")
const card = document.querySelectorAll(".cancha-info")
const arrow = document.getElementById("arrow")
const buscador = document.getElementById("buscador")
console.log(document.querySelectorAll(".apply-searchFilter").length)

//desplegar menu filtro
filter[0].onclick = () => {
    filter[0].classList.toggle("show")
    arrow.classList.toggle("flip")

}

//evento para seleccionar la opcion dentro del menu
value.forEach((valor, i) => {
    value[i].addEventListener("click", () => {
        value.forEach((valor, i) => {
            value[i].classList.remove("selected")
        })
        value[i].classList.add("selected")
        option.innerHTML = value[i].innerHTML
        let filterSelected = document.querySelector(".selected")
        filtro(filterSelected)
    })
})

//función para buscar coincidencia entre el texto del filtro y la descripción de la tarjeta
function filtro(filter) {
    info.forEach((e, i) => {
        if (info[i].textContent.includes(filter.innerHTML)) {
            card[i].classList.remove("apply-filter")
        } else if (filter.innerHTML === "Todas") {
            card[i].classList.remove("apply-filter")
        }
        else {
            card[i].classList.add("apply-filter")
        }
    })
}

//buscar por palabras a través del inputer
buscador.addEventListener("keyup", e => {
    console.log(e.target.value)
    let counter = 0;
    info.forEach((ele, i) => {
        if (info[i].textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            card[i].classList.remove("apply-searchFilter")

                if(!card[i].classList.contains("apply-filter")){
                counter =+ 1;
            }
        } else {
            card[i].classList.add("apply-searchFilter")
        }
        })

        if(counter === 0) {
            const notFound = document.querySelector(".not-found")
            notFound.style.display = `flex`;    
        } else {
            const notFound = document.querySelector(".not-found")
            notFound.style.display = `none`;
        }
        console.log(counter)
})
