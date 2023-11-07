import { isLoggedIn, logout } from './auth.js';

const welcomeUser = document.getElementById('welcomeUser');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');

function updateHomePage() {
    if (isLoggedIn()) {
        welcomeUser.textContent = 'Welcome ' + localStorage.getItem('loggedInUser');
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        welcomeUser.textContent = '';
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
}

updateHomePage();

logoutBtn.addEventListener('click', () => {
    logout();
    updateHomePage();
});