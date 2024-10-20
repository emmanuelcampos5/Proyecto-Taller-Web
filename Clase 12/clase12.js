fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5')
  .then(response => response.json())
  .then(data => {
    document.getElementById('imagen').setAttribute('src', data[0].url);
  })



  fetch('https://api.example.com/data')
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => console.log(data))     // Usar los datos obtenidos
  .catch(error => console.error('Error:', error));  // Manejar errores



  