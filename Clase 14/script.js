let formulario = document.getElementById('formulario');

// formulario.addEventListener('submit', function(e){
//     e.preventDefault();

//     let datos = new FormData(formulario);

//     let datosEnviar = {
//         correoUsuario : datos.get('email'),
//         contraseñaUsuario : datos.get('password'),
//     };
   
//     fetch('https://localhost:44396/Usuario/login',
//     {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(datosEnviar)
//     })
//     .then(response => response.json())
//     .then((respuesta) => {
//         if(respuesta.code == 200){
//             alert(respuesta.data);
//         }else{
//             alert(respuesta.data)
//         }
//     })
//     .catch(console.log)
// })

fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5', {
    method : 'GET',
})
.then(response => response.json())
.then()