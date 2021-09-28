let registro = [];
usuario = document.getElementById('in_usuario').value
contrasena = document.getElementById('in_contrasena').value


function agregarRegistro(){

    //VALIDACIÓN
   /* const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if (usuario.length < 3 || usuario.length > 9  && contrasena.length < 6) {
        console.log("longitud");
    } else if (!ptr.test(string)) {
        console.log("caracteres");
    } else {
        let persona = [usuario,contrasena]
        registro.push(persona);
        console.log(persona);
    }*/
    registro.push(usuario);

}

agregarRegistro()

function filtrarPorContrasena(arreglo, filtro){

}

module.export.registros = registros;
module.export.filtrarPorContrasena = filtrarPorContrasena;
module.export.agregarRegistro = agregarRegistro;
