
const filter = document.getElementsByClassName("filter-options");
const option = document.getElementById("option");
const value = document.querySelectorAll(".values")
const info = document.querySelectorAll(".description")
const card = document.querySelectorAll(".cancha-info")


//desplegar menu filtro
filter[0].onclick = () => {
    filter[0].classList.toggle("show")
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
        console.log(filterSelected.innerHTML)
        filtro(filterSelected)
    })
})


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
    console.log(info[i].textContent)
})
}
