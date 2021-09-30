let nombre = prompt("Ingresa tu nombre:");
let edad = prompt("Ingresa tu edad");


// Si la variable nombre y edad estan vacios, no muestro ningun mensaje
// Luego, verifico si la edad es mayor o menor a 18, y muestro un mensaje de acuerdo a eso.
if((nombre !="") && (edad !="")) {
    if (edad > 18) {
        alert("Hola " +nombre + " \nBienvenido!");
    } else {
        alert("Lo lamentamos, " + nombre + "\nDebes ser mayor de edad para acceder a éste sitio");
    }
} else {
    alert("El nombre y edad son obligatorios.");
}

