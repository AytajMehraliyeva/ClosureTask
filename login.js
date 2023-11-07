import { login } from './auth.js';

const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');

const loginSubmit = document.getElementById('loginSubmit');
const goToRegister = document.getElementById('goToRegister');

loginSubmit.addEventListener('click', () => {
    const usernameOrEmail = loginUsername.value;
    const password = loginPassword.value;

    if (login(usernameOrEmail, password)) {
        location.href = 'index.html';
    } else {
        alert('Istifadəçi adı və ya email səhvdir');
    }
});

goToRegister.addEventListener('click', () => {
    location.href = 'register.html';
});