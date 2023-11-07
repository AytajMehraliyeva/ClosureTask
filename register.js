import { addUser } from './user.js';

const regName = document.getElementById('regName');
const regSurname = document.getElementById('regSurname');
const regUsername = document.getElementById('regUsername');
const regPassword = document.getElementById('regPassword');
const regEmail = document.getElementById('regEmail');

const regSubmit = document.getElementById('regSubmit');
const goToLogin = document.getElementById('goToLogin');

regSubmit.addEventListener('click', () => {
    const name = regName.value;
    const surname = regSurname.value;
    const username = regUsername.value;
    const password = regPassword.value;
    const email = regEmail.value;

    if (name && surname && username && password && email) {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            const user = {
                name,
                surname,
                username,
                password,
                email
            };
            addUser(user);
            alert('Registration successful');
            location.href = 'login.html';
        } else {
            alert('Email yazilisi duz deyil');
        }
    } else {
        alert('Zəhmət olmasa formu tam doldurun');
    }
});

goToLogin.addEventListener('click', () => {
    location.href = 'login.html';
});