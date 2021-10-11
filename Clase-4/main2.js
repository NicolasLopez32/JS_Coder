// function saludar() {
//     console.log("¡Hola estudiantes!");
// }

// saludar();



























// // INGRESAR UN NOMBRE POR PANTALLA 3 VECES

// var nombreIngresado   = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado);

// var nombreIngresado   = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado);

// var nombreIngresado   = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado);

























// //CON FUNCIONES

// function solicitarNombre(){
//     let nombreIngresado   = prompt("Ingresar nombre");
//     alert("El nombre ingresado es " + nombreIngresado);
// }

// solicitarNombre();
// solicitarNombre();
// solicitarNombre();






















//PARÁMETROS

// function conParametros(parametro1, parametro2) {
//     console.log(parametro1 + " " + parametro2);
// }

// conParametros(6,7);

























// //Declaración de variable para guardar el resultado de la suma
// let resultado = 0;

// //Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero){
//   resultado = primerNumero + segundoNumero;
// }
// //Función que muestra resultado por consola
// function mostrar(resultadoDeLaSuma) {
//     console.log(resultadoDeLaSuma);
// }
// //Llamamos primero a sumar y luego a mostrar
// sumar(10, 40);
// mostrar(resultado);

















// RESULTADO DE UNA FUNCIÓN

// function sumar(primerNumero, segundoNumero) {
//     return primerNumero + segundoNumero;
// }
// let resultado = sumar(10, 20);

// console.log(resultado);



















// EJEMPLO CALCULADORA

// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }
// console.log(calculadora(10, 5,"+"));


















// VARIABLES


// VARIABLES LOCALES

// function sumar(primerNumero, segundoNumero) {
//     let resultado = primerNumero + segundoNumero;
// }
// //No se puede acceder a la variable resultado fuera del bloque
// console.log(resultado);



















// VARIABLES GLOBALES

// let resultado = 0

// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero;
// }

// sumar(5,6);
// //Se puede acceder a la variable resultado porque es global
// console.log(resultado);





















// FUNCIONES ANÓNIMAS

// const suma = function (a, b) { return a + b };
// const resta = function (a, b) { return a - b };

// console.log(suma(15,20));
// console.log(resta(15,5));




















// FUNCIONES FLECHA

// const suma  = (a, b) => { return a + b };
// //Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
// const resta = (a, b) =>  a - b ;

// console.log(suma(15,20));
// console.log(resta(20,5));
























// // EJEMPLO APLICADO: CALCULAR PRECIO

// const suma  = (a,b) => a + b;
// const resta = (a,b) => a - b;
// //Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
// const iva   = x => x * 0.21;

// let precioProducto  = 500;
// let precioDescuento = 50;

// //Calculo el precioProducto + IVA - precioDescueto
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
// console.log(nuevoPrecio);









let total = 0;

function agregarAlCarrito() {

    do {
        let producto = prompt("¿Querés comprar shampoo, acondicionador o ambos?", "Ej: ambos");
        let cantidad = parseInt(prompt("¿Cuantos queres comprar?", 0));

        let precio = 0;

        switch (producto) {
            case "shampoo" :
                precio = 500;
                break;
            case "acondicionador" :
                precio = 700;
                break;
            case "ambos" :
                precio = 1100;
                break;
            default :
                alert("Alguno de los datos ingresados es incorrecto");
                precio = 0;
                cantidad = 0;
        }

        total = total + precio * cantidad;
        otroProducto = confirm("¿Querés agregar otro producto?")
    } while (otroProducto);
}

function aplicarDescuento(total) {
    if(total >= 5000) {
        total = total * 0.80;
    }
    return total;
}

function calcularEnvio(total) {
    let confirmacion = confirm("¿Querés envío a domicilio?");

    if( confirmacion && total >= 2000) {
        alert("Tenés envio gratis. El total de tu compra es $"+total);
    } else if ( confirmacion && total < 2000 && total != 0) {
        alert("El envío cuesta $700. El total de tu compra es $"+ total )
        total = total + 700;
    } else {
        alert("El total de tu compra es $"+total);
    }

    return total;
}

agregarAlCarrito();
calcularEnvio(aplicarDescuento(total));


















