fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5', {
    method : 'GET',
})
.then(response => response.json())
.then((datos) => {
    document.getElementById('contenedorImagen').innerHTML = `
    <img src="${datos[0].url}" alt="imagen">
    `
})