
// DOM
// login
let btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click",respuestaClick)

function respuestaClick() {

        let user, pass;
        user = document.getElementById("name").value;
        pass = document.getElementById("pwd").value 

        if (user == "nico" && pass=="lopez") {
              alert("inicio sesion correcto");
        }else {
               alert("Inicio sesion incorrecto");
        }
}

// al presionar enter en el campo de contraseña, llamo a la funcion que devuelve la respuesta de inicio de sesion
let presspwd = document.getElementById("pwd");

pwd.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        respuestaClick();
    }
});






