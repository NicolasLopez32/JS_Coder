
let usuario = prompt("Ingrese su usuario");
let email = prompt("Ingrese su email");
let contrasenia = prompt("Ingrese su contraseña");

alert ("El usuario " +usuario+ " ha sido registado");

class Usuario{
        constructor(usuario,email,contrasenia) {
                this.usuario = usuario;
                this.email = email;
                this.contrasenia = contrasenia;
                
        }
        welcome() {
                alert("Bienvenido usuario "+usuario)
        }
}

const usuario1 = new Usuario(usuario,email,contrasenia);
usuario1.welcome();

const infoUsuario = [usuario,email,contrasenia];

if (confirm("Queres ver la informacion ingresada?")) {
// si se desea ver la informacion cargada, utilizo un array para ver lo que el usuario ingresó
        alert("Usuario: "+infoUsuario[0]+ "\nEmail: "+infoUsuario[1]+ "\nContraseña: "+infoUsuario[2]);
}




