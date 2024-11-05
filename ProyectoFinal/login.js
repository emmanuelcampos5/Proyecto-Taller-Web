// https://cdn.jsdelivr.net/npm/sweetalert2@11
// http://www.tallerweb.somee.com/api/Usuario

let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(evt){
    evt.preventDefault();
    let datos = new FormData(formulario);

    let datosEnviar = {
        correo: datos.get('email'),
        contraseña: datos.get('password'),
    }

    fetch('http://www.tallerweb.somee.com/api/Usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosEnviar)
    })
    .then(response => response.json())
    .then((respuesta) => {
        if(respuesta == true){
            window.location.href = 'index.html';
        }else{
            Swal.fire({
                title: "Credenciales Incorrectas",
                text: "El correo o la contraseña son incorrectos",
                timer: 2000,
                icon: "error"
            });
        }
    })
    .catch(console.log);
})