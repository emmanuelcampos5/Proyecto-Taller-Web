$ = el => document.getElementById(el)

const loginForm = $('loginForm')

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const predefinedUser = {
        username: 'user1',
        password: 'pass1'
    }

    const username = $('username').value
    const password = $('password').value
    let response = $('responseMessage')

    if (username === predefinedUser.username
        && password === predefinedUser.password) {
        response.innerText = 'Inicio de sesion existoso!';
    } else {
        response.innerText = 'Nombre de usuario o contraseña son incorrectos!';
    }

});