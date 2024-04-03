

//Splash
document.addEventListener('DOMContentLoaded', () => {
    var splashLogin = document.querySelector('.splash');
    var splashFigure = document.querySelector('.header');
    var loginContainer = document.querySelector('.login-container');

    setTimeout(() => {
        splashLogin.classList.add('hidden');
        splashFigure.classList.add('hidden');
        
        setTimeout(() => {
            loginContainer.classList.remove('hidden');
        }, 1000); 

    }, 5000);
});


const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginSubmit = document.getElementById("loginSubmit");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginSubmit = document.querySelector('.button');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;

        if (passwordValue.includes('*')) {
            alert('La contraseña no debe contener el carácter "*".');
            return;
        }

        if (passwordValue.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            return;
        }


        guardarCredenciales(usernameValue, passwordValue);

        // Redireccion
        window.location.href = "../html/transferType.html"; 
    });
});




function verificarCamposCompletos() {

  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (usernameValue !== "" && passwordValue !== "") {
    loginSubmit.disabled = false;
  } else {
    loginSubmit.disabled = true;
  }
}

function guardarCredenciales() {
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

  
    localStorage.setItem("username", usernameValue);
    localStorage.setItem("password", passwordValue);
}


usernameInput.addEventListener("input", verificarCamposCompletos);
passwordInput.addEventListener("input", verificarCamposCompletos);


