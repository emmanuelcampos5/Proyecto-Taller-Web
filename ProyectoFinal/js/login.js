let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    let datos = new FormData(formulario);

    let datosEnviar = {
        correo: datos.get('email'),
        contraseña: datos.get('password'),
    };

    fetch('http://www.tallerweb.somee.com/api/Usuario',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosEnviar)
        })
        .then(response => response.json())
        .then((respuesta) => {
            if (respuesta == true) {
                window.location.href = '../index.html';
            } else {
                alertLoginFail();
            }
        })
        .catch(console.log)
})