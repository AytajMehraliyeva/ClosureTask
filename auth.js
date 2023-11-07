import { users, getUsersFromLocalStorage, saveUsersToLocalStorage, findUserByUsernameOrEmail } from './user.js';

export function login(usernameOrEmail, password) {
    getUsersFromLocalStorage();
    const user = findUserByUsernameOrEmail(usernameOrEmail);

    if (user && user.password === password) {
        localStorage.setItem('loggedInUser', user.name + ' ' + user.surname);
        return true;
    }

    return false;
}

export function logout() {
    localStorage.removeItem('loggedInUser');
}

export function isLoggedIn() {
    return !!localStorage.getItem('loggedInUser');
}