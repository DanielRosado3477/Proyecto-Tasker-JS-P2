// Clase de Usuario
class Usuario {
    constructor(username, password, mensaje) {
        this.username = username;
        this.password = password;
        this.mensaje = mensaje;
    }
}

// Array de usuarios e instancias
const usuarios = [
    new Usuario("Pro", "ProUser12345",
        `Get full features and help 24/7\nUS $4/month\nThis plan includes:
        - Full features
        - No limits
        - Offline adding tasks
        - Support Desk 24/7`),
    
    new Usuario("Pay", "PayUser12344",
        `Get full features\nUS $1.5/month\nThis plan includes:
        - Full features
        - No limit team members
        - No limit projects at the time
        - Offline adding tasks`),
    
    new Usuario("Free", "FreeUser12345",
        `Start with the basics\nUS $0/month\nThis plan includes:
        - Until 5 projects at the time
        - Online adding of tasks
        - Integration with your personal calendar
        - Until 4 members`)
];

const verificarCredenciales = (username, password) => 
    usuarios.find(usuario => usuario.username === username && usuario.password === password);


const manejarEnvioFormulario = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página (Esto lo saque de youtube pero no entiendo que tan útil o no pueda llegar a ser)

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const mensajeElement = document.getElementById('message');

    // Verifica las credenciales
    const usuarioValido = verificarCredenciales(username, password);

    if (usuarioValido) {
        mensajeElement.textContent = "Login successful! Access granted to:\n" + usuarioValido.mensaje; //Concatenado con los privilegios de cada usuario
        mensajeElement.style.color = 'green';
    } else {
        mensajeElement.textContent = "Wrong credentials. Please try again.";
        mensajeElement.style.color = 'red';
    }
};

document.getElementById('login-form').addEventListener('submit', manejarEnvioFormulario);
