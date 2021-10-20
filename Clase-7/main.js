
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

// limpio el localStorage antes de añadir la información
localStorage.clear();

//recorro el array y voy grabando la informacion en localStorage
for (let i = 0; i < infoUsuario.length; i++) {
        localStorage.setItem("usuario",infoUsuario[0]);
        localStorage.setItem("mail",infoUsuario[1]);
        localStorage.setItem("pwd",infoUsuario[2]);
     }
    
// muestro el array en formato JSON 
const toJSON = JSON.stringify(usuario1);
console.log(toJSON);

if (confirm("Queres ver la informacion ingresada?")) {
// si se desea ver la informacion cargada, pregunto por las claves en el localStorage
         alert("Usuario: "+localStorage.getItem("usuario")+ "\nEmail: "+localStorage.getItem("mail")+ "\nContraseña: "+localStorage.getItem("pwd"));
}

