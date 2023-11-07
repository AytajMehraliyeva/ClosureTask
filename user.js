export let users = [];

export function getUsersFromLocalStorage() {
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
    }
}

export function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

export function findUserByUsernameOrEmail(usernameOrEmail) {
    return users.find(u => u.username === usernameOrEmail || u.email === usernameOrEmail);
}

export function addUser(user) {
    users.push(user);
    saveUsersToLocalStorage();
}