// REGISTER

let btnRegister = document.getElementById("btnRegister");

btnRegister.addEventListener("click",saveData)

function saveData() {
    let name;
    let pwd;
    let mail;
    
    name = document.getElementById("name").value;
    pwd = document.getElementById("pwd").value;
    mail = document.getElementById("mail").value;

    let user = {
        name:name,
        pwd:pwd,
        mail:mail

    }

    localStorage.setItem("usuario", JSON.stringify(user));
    alert("Se ha creado el usuario "+name);

    }

    // if(infousers.some((v)=>{return v.mail==mail})) {
    //     alert("Ya se encuentra registrado este usuario");
    // } else {
    //     infousers.push({
    //         "user":user,
    //         "mail":mail,
    //         "pwd":pwd
    //     })

    //     alert("Usuario creado exitosamente.") 
    // }
   
    // // limpio el localStorage antes de añadir la información
    // localStorage.clear();

    // localStorage.setItem("users",JSON.stringify(infousers));


