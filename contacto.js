const bDay = document.querySelector(".bday")

for (i=0; i<31; i++){
    const option = document.createElement("option");
    option.textContent = `${i+1}`;

    bDay.appendChild(option)
}

const year = document.querySelector(".year")
const date = new Date()

for(i=1930; i<=date.getFullYear(); i++){
    const option = document.createElement("option")
    option.textContent = `${i}`

    year.appendChild(option)
}


    
function validar(){
    const error = document.querySelector(".error")


    if (document.getElementById("name").value === ""){
        error.textContent = "El campo nombre no puede estar vacio"
        document.getElementById("name").focus()
        return 0;
    } else if (document.getElementById("name").value.length < 4){
        error.textContent = "El nombre debe contener al menos 4 caracteres"
        document.getElementById("name").focus()
        return 0;
    }
    
    if (document.form.apellido.value === ""){
        error.textContent = "El campo apellido no puede estar vacio"
        document.form.apellido.focus()
        return 0;
    }
    
    if (document.form.direccion.value === ""){
        error.textContent = "El campo dirección no puede estar vacio"
        document.form.direccion.focus()
        return 0;
    }
    
    if (document.form.ciudad.value === ""){
        error.textContent = "El campo ciudad no puede estar vacio"
        document.form.ciudad.focus()
        return 0;
    }
    
    const fechaNac = document.getElementById("date");

    if (!fechaNac){
        error.textContent = "Seleccione su fecha de nacimiento"
        return 0;        
    } 

    if(document.form.motivo.selectedIndex === 0){
        error.textContent = "Por favor indique el motivo de contacto"
        return 0;
    }


    document.form.submit();
}

