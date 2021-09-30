let registros = [];

function agregarRegistro(){
    let persona = [];
    usuario = document.getElementById('in_usuario').value;
    contrasena = document.getElementById('in_contrasena').value;
    validarUsuario = false;
    validarContrasena = false;
    const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if (usuario.length < 3 || usuario.length > 9) {
        console.log("Usuario no tiene la longitud");
    } else if (!ptr.test(usuario)) {
        console.log("Usuario usa caracteres especiales");
    } else {
        if(usuario != ""){
            validarUsuario = true;
        }
        else{
            console.log("Usuario no tiene info")
        }

    }
    if (contrasena.length < 6) {
        console.log("Contrasena no tiene la longitud");
    } else if (!ptr.test(contrasena)) {
        console.log("Contrasena tiene caracteres especiales");
    } else {
        if(contrasena != ""){
            validarContrasena = true;
        }
        else{
            console.log("Usuario no tiene info")
        }

    }
    if(validarUsuario == true && validarContrasena == true){
        persona = {"usuario" : usuario, "contrasena" : contrasena}
        registros.push(persona);
        console.log(persona);
        console.log(registros);
    }
}


function filtrarPorContrasena(arreglo,filtro){
    let newRegistro = [];

    for (var i=0; i<arreglo.length; i++){

        if(arreglo[i].contrasena.length <= filtro){
        newRegistro.push(arreglo[i]);
        }
    }
    console.log(newRegistro);
    return newRegistro;
}


module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;
