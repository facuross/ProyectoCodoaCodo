const bDay = document.querySelector(".bday")

//creamos los días para el select dia
for (i=0; i<31; i++){
    const option = document.createElement("option");
    option.textContent = `${i+1}`;

    bDay.appendChild(option)
}

const month = document.querySelector(".month")
const months = ["ene", "feb", "mar", "abr", "mar", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]

//creamos los meses para el select mes
for (mes of months) {
    const option = document.createElement("option");
    option.textContent = mes 

    month.appendChild(option)
}


const year = document.querySelector(".year")
const date = new Date()

//creamos los años para el select año
for(i=date.getFullYear(); i>= 1930; i--){
    const option = document.createElement("option")
    option.textContent = `${i}`

    year.appendChild(option)
}

    
function validar(){
    const nameError = document.querySelector(".name-error")
    const lastnameError = document.querySelector(".lastname-error")
    const emailError = document.querySelector(".email-error")
    const phoneError = document.querySelector(".phone-error")
    const adressError = document.querySelector(".adress-error")
    const cityError = document.querySelector(".city-error")
    const cpError = document.querySelector(".cp-error")
    const dateError = document.querySelector(".date-error")
    const motiveError = document.querySelector(".motive-error")

    nameError.innerHTML = ""
    lastnameError.innerHTML = ""
    emailError.innerHTML = ""
    phoneError.innerHTML = ""
    adressError.innerHTML = ""
    cityError.innerHTML = ""
    cpError.innerHTML = ""
    dateError.innerHTML = ""
    motiveError.innerHTML = ""

    const form = document.getElementsByTagName("form")

    for (element of form[0]) {
        element.classList.remove("input-error")
    }

    if (document.getElementById("name").value === ""){
        nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">El campo nombre no puede estar vacio</p>`
        document.getElementById("name").focus()
        document.getElementById("name").classList.add("input-error")
        return 0;
    } else if (document.getElementById("name").value.length < 4){
        nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">El nombre debe contener al menos 4 caracteres</p>`
        document.getElementById("name").focus()
        document.getElementById("name").classList.add("input-error")
        return 0;
    }
    
    if (document.form.apellido.value === ""){
        lastnameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">El campo apellido no puede estar vacio</p>`
        document.form.apellido.focus()
        document.form.apellido.classList.add("input-error")
        return 0;
    }

    if (document.form.email.value === ""){
        emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">El campo correo no puede estar vacio</p>`
        document.form.email.focus()
        document.form.email.classList.add("input-error")
        return 0;
    }

    function validarCorreo(correo){
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(correo)
        if(esValido) {
            return true
        } else {
            return false
        }
    }

    if(!validarCorreo(document.form.email.value)){
        emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">El correo ingresado no es válido</p>`
        document.form.email.focus()
        document.form.email.classList.add("input-error")
        return 0;
    }

    if (!document.form.codigo.value) {
        phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                                <p style="margin-left: 5px">Debe ingresar el codigo de área</p>`
        document.form.codigo.focus()
        document.form.codigo.classList.add("input-error")
        return 0;
    } else if (document.form.codigo.value.length != 3) {
        phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                                <p style="margin-left: 5px">El código de área debe tener 3 dígitos</p>`
        document.form.codigo.focus()
        document.form.codigo.classList.add("input-error")
        return 0;
    } else if (!document.form.phone.value) {
        phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                                <p style="margin-left: 5px">El campo telefono no puede estar vacío</p>`
        document.form.phone.focus()
        document.form.phone.classList.add("input-error")
        return 0;
    } else if (document.form.phone.value.length < 6) {
        phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                                <p style="margin-left: 5px">El campo telefono debe tener al menos 6 dígitos</p>`
        document.form.phone.focus()
        document.form.phone.classList.add("input-error")
        return 0;
    }

    if (document.form.domicilio.value === ""){
        adressError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">El campo domicilio no puede estar vacio</p>`
        document.form.domicilio.focus()
        document.form.domicilio.classList.add("input-error")
        return 0;
    }
    
    if (document.form.ciudad.value === ""){
        cityError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">El campo ciudad no puede estar vacio</p>`
        document.form.ciudad.focus()
        document.form.ciudad.classList.add("input-error")
        return 0;
    }

    if (!document.form.cp.value) {
        cpError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">Ingrese el CP</p>`
        document.form.cp.focus()
        document.form.cp.classList.add("input-error")
        return 0;
    }
    
    const bDay = document.querySelector(".bday");
    const month = document.querySelector(".month");
    let mes = 0
    switch (month.value) {
        case "ene":
            mes = 1
            break;
        case "feb":
            mes = 2
            break;
        case "mar":
            mes = 3
            break;
        case "abr":
            mes = 4
            break;
        case "may":
            mes = 5
            break;
        case "jun":
            mes = 6
            break; 
        case "jul":
            mes = 7
            break;
        case "ago":
            mes = 8
            break;
        case "sep":
            mes = 9
            break;
        case "oct":
            mes = 10
            break;
        case "nov":
            mes = 11
            break;
        case "dic":
            mes = 12
            break;   
    }
    const year = document.querySelector(".year")

    const date = new Date();
    currentYear = date.getFullYear()
    currentMonth = date.getMonth() + 1
    currentDay = date.getDate()

    if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        if (bDay.value == 31) {
            dateError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                                    <p style="margin-left: 5px">La fecha ingresada es incorrecta</p>`
            bDay.focus()    
            return 0; 
        }
    }

    function añoBisiesto(year) {
        if(year % 4 === 0 && year % 100 != 0 || year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    if(mes == 2) {
        if(añoBisiesto(year.value)) {
            if(bDay.value > 29) {
                dateError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                                        <p style="margin-left: 5px">La fecha ingresada es incorrecta</p>`
                bDay.focus()    
                return 0;        
            }
        }
        if (!añoBisiesto(year.value)){
            if(bDay.value > 28) {
                dateError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                                        <p style="margin-left: 5px">La fecha ingresada es incorrecta</p>`
                bDay.focus()    
                return 0;        
            }
        }   
    }

    function getAge() {
        if(mes > currentMonth) {
            return currentYear - year.value - 1
        } else if ( mes == currentMonth) {
            if (bDay.value <= currentDay) {
                return currentYear - year.value
            } else {
                return currentYear - year.value - 1
            }
        } else {
            return currentYear - year.value
        }
    }

    if (bDay.selectedIndex === 0 || month.selectedIndex === 0 || year.selectedIndex === 0 ){
        dateError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">Debe ingresar una fecha de nacimiento</p>`
        bDay.focus()    
        return 0;
    }

    if (year.value == currentYear) {
        if (mes > currentMonth) {
            dateError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">La fecha de nacimiento no puede ser mayor a la fecha actual</p>`
            bDay.focus()
            return 0;
        } else if (mes === currentMonth) {
            if (bDay.value > currentDay) {
                dateError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">La fecha de nacimiento no puede ser mayor a la fecha actual</p>`
                bDay.focus()    
                return 0;
            }
        } 
    }

    if (getAge() < 12) {
        dateError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">Debe ser mayor de 12 años para enviar el formulario</p>`
        bDay.focus()  
        return 0;
    }
    

    if(document.form.motivo.selectedIndex === 0){
        motiveError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                            <p style="margin-left: 5px">Por favor indique el motivo de contacto</p>`
        document.form.motivo.focus()
        return 0;
    }


    function openModal() {
        const modal = document.querySelector(".modal")
        modal.classList.add("modal-show");
    }

    async function enviar(){
        openModal()
        return new Promise (resolve => {
            setTimeout(() => {
                resolve(document.form.submit()
                )}, 5000)
        })
    }

    enviar();
}



function limpiar() {
    location.reload()
    window.scrollTo(0,0)
}