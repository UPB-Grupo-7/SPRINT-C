let registro = [];

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
            console.log("Contrasena no tiene info")
        }

    }
    if(validarUsuario == true && validarContrasena == true){
        persona.push(usuario, contrasena);
        registro.push(persona);
        console.log(persona);
        console.log(registro);
    }

}


function filtrarPorContrasena(arreglo, filtro){

    let newRegistro = [];

    for (var i=0; i<arreglo.length; i++){
        if(arreglo(i,1).length <= filtro)
        newRegistro.push(arreglo(i,1));
        console.log(newRegistro);
   }
}

module.export.registros = registros;
module.export.filtrarPorContrasena = filtrarPorContrasena;
module.export.agregarRegistro = agregarRegistro;
