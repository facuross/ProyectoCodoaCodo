
const filter = document.getElementsByClassName("filter-options");
const option = document.getElementById("option");
const value = document.querySelectorAll(".values")
const info = document.querySelectorAll(".description")
const card = document.querySelectorAll(".cancha-info")
const arrow = document.getElementById("arrow")

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
function filtro(filter){
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
