function alertPedido() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Su pedido está siendo procesado",
        showConfirmButton: false,
        timer: 1500
    });
}

function alertdDelivery() {
    Swal.fire({
        position: "center",
        icon: "info",
        title: "Contáctenos, llámenos o envienos un whatsapp al 0000-0000",
        showConfirmButton: false,
        timer: 1800
    });
}

function alertLoginFail() {
    Swal.fire({
        title: "Creedenciales Incorrectas",
        text: "El correo o la contraseña son incorrectos",
        timer: 2000,
        icon: "error"
    });
}