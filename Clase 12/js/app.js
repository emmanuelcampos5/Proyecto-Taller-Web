document.getElementById('loginForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        const predefinedUser = {
            username: 'user1',
            password: 'pass1'
        }

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === predefinedUser.username
            && password === predefinedUser.password) {
            document.getElementById('responseMessage').innerText = 'Inicio de sesion existoso!'
        } else {
            document.getElementById('responseMessage').innerText = 'Nombre de usuario o contraseña son incorrectos!';
        }
    });