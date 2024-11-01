fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=8', {
    method : 'GET',
})
.then(response => response.json())
.then((datos) => {
    let contenido = '';
    datos.forEach(imagen => {
        contenido += `<img class="col-3 p-2" src="${imagen.url}" alt="imagen">`;
    });
    document.getElementById('contenedorImagen').innerHTML = contenido;
})