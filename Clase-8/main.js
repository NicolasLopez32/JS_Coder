
// LOGIN
let btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click",load)

function load() {

        let nameInput = document.getElementById("name").value;
        let pwdInput = document.getElementById("pwd").value;

        if(localStorage.getItem("usuario")) {

            let name = JSON.parse(localStorage.getItem("usuario"));
            
            if ((name['name'] === nameInput) && (nameInput != "") && (name['pwd'] === pwdInput) && (pwdInput != ""))  {
               alert("Bienvenido "+name['name']);
            } else {
               alert("Usuario y/o contraseña incorrectos");
            }
        }
}
  
// al presionar enter en el campo de contraseña, llamo a la funcion que devuelve la respuesta de inicio de sesion
let presspwd = document.getElementById("pwd");

pwd.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        load();
    }
});






