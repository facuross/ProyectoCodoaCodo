/*Realizar una función, a la que se le pase como parámetro un número N,
y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
curso Full Stack*/

function mostrarMsje(n) {
    for (i=0; i<n; i++) {
        console.log("Bienvenidos al curso Full Stack")
    }
}

/*Diseñar una función que tenga como parámetros dos números, y que
calcule el máximo.*/

function mostrarMax(n1, n2) {
    if (n1>n2){
        console.log(n1)
    } else if (n1 == n2) {
        console.log("Son iguales")
    } else {
        console.log(n2)
    }
}

/*Crear una función que se llame promedio3, que reciba como
parámetro tres valores y devuelva el promedio de los mismos.
*/

function promedio3(x,y,z) {
    console.log((x+y+z)/3) 
}

/*Crear una función que lea notas hasta que ingrese -1 y devuelve el
promedio de las notas leídas. ( aunque no se suele leer valores en una
función)Una función que se llame siguiente, que reciba como
parámetro un valor entero, y devuelva el siguiente del número
ingresado como parámetro
*/

function promedio() {
    suma = 0
    contador = 0
    while (nota !== -1) {
        a = parseInt(nota, 10)
        suma += a
        contador += 1
    }
}

function siguiente(n) {
    console.log(n+1)
}