// los productos seran tazas y vasos, con un valor fijo 
// le preguntaré al usuario que desea comprar, teniendo como opcion tazas o vasos
// luego se le mostrará el total, mostraré el valor de cada cuota tanto para 3,6,9,12

const tazas = 200;
const vasos = 400;
let total = 0;

function carrito() {
        let producto = prompt("Desea comprar tazas o vasos?");
        let precio = 0;

        switch (producto) {
            case "tazas" :
                precio = tazas;
                break;
            case "vasos" :
                precio = vasos;
                break;
            default :
                alert("Alguno de los datos ingresados es incorrecto");
                precio = 0;
                cantidad = 0;
        }

        let cantidad = parseInt(prompt("¿Cuantos queres comprar?", 0));

        total = total + precio * cantidad;

        if (confirm("El total de su compra es de: "+total +"\n¿Desea Continuar?")) {
            return true;
            
          } else {
            return false;
        }
        
}

function calculaCuota(total) {

    let cuotas = parseInt(prompt("En cuantas cuotas desea abonar esta compra?" + "\nValores disponibles: 3-6-9-12"))

        switch(cuotas) {
            case 3:
                total = total / 3;
                alert("Cada cuota tendrá un valor de "+ Math.round(total));
                break;
            case 6:
                total = total / 6;
                alert("Cada cuota tendrá un valor de "+ Math.round(total));
                break;
            case 9:
                total = total / 9;
                alert("Cada cuota tendrá un valor de "+ Math.round(total));
                break;
            case 12:
                total = total / 12;
                alert("Cada cuota tendrá un valor de "+ Math.round(total));
                break;
        }


    } 

// si la function de carrito es true continuo a mostrar el calculo de cuotas, sino no llamo a la funcion
if (carrito()==true) {
    calculaCuota(total);
}

