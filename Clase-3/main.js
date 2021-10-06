let ingresarNumero = parseInt(prompt("Ingresa un numero del 1 al 10"));

// Voy a recorrer en el while si la variable es distinta de 0 (0 = exit)
while(ingresarNumero != "0" ){
    switch(ingresarNumero) {
        case 1:
            alert("Ingresaste el número 1");
            break;
        case 2:
            alert("Ingresaste el número 2");
            break;
        case 3:
            alert("Ingresaste el número 3");
            break;
        case 4:
            alert("Ingresaste el número 4");
            break;
        case 5:
            alert("Ingresaste el número 5");
            break;
        case 6:
            alert("Ingresaste el número 6");
            break;
        case 7:
            alert("Ingresaste el número 4");
            break;
        case 8:
            alert("Ingresaste el número 8");
            break;
        case 9:
            alert("Ingresaste el número 9");
            break;
        case 10:
            alert("Ingresaste el número 10");
            break;
        default:
            alert("Numero distinto de 1-10");
            break;        
    }
    ingresarNumero = parseInt(prompt("Ingresa un numero del 1 al 10"));
}
