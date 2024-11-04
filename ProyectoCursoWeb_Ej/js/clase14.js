let formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function(e){
    e.preventDefault();

    let datos = new FormData(formulario);

    let datosEnviar = {
        correo : datos.get('email'),
        contraseña : datos.get('password'),
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
        if(respuesta == true){
            window.location.href = 'ejemploAPOD.html';
        }else{
            Swal.fire({
                title: "Creedenciales Incorrectas",
                text: "El correo o la contraseña son incorrectos",
                timer: 2000,
                icon: "error"
              });
        }
    })
    .catch(console.log)
})

function alertPedido(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Su pedido está siendo procesado",
        showConfirmButton: false,
        timer: 1500
      });
}
function alertdDelivery(){
    Swal.fire({
        position: "center",
        icon: "info",
        title: "Contáctenos, llámenos o envienos un whatsapp al 0000-0000",
        showConfirmButton: false,
        timer: 1800
      });
}