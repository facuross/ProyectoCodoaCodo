const menu = document.getElementById("menu-icon");
const menuList = document.querySelector(".nav");
const nav = document.querySelector(".prueba");
let active = true;

menu.onclick= () => {
    if(active){
        newElement = document.createElement("div")
        newElement.classList.add("nav-menu")
        newElement.innerHTML = menuList.innerHTML
        nav.appendChild(newElement)
        active = false
        } else {
            nav.removeChild(newElement)
            active = true    
        }
    }