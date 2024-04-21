const loginForm = document.getElementById('loginForm');
const logoutLink = document.getElementById('logoutLink');
const navbarUsername = document.getElementById('navbarUsername');
const passwordInput = document.getElementById('password');
const showPasswordButton = document.getElementById('showPasswordButton');

showPasswordButton.addEventListener('mousedown', () => {
    passwordInput.type = 'text';
});

showPasswordButton.addEventListener('mouseup', () => {
    passwordInput.type = 'password';
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loggedInUser = await loginUser(email, password);
    
    if (loggedInUser) {
        alert('Giriş edildi!');
        window.location.href = 'index.html'; 
    } else {
        alert('Giriş edilmedi.');
    }
});

logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    logoutUser();
});

function setNavbarUsername(username) {
    navbarUsername.textContent = username;
    logoutLink.style.display = 'inline';
}

function removeNavbarUsername() {
    navbarUsername.textContent = '';
    logoutLink.style.display = 'none';
}

async function loginUser(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert('E-mailniz standartlara uygun deyil.');
        return false;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{5,}$/;
    if (!passwordRegex.test(password)) {
        alert('Sifre en az 5 uzunluqda olmali,1boyuk herf,en az 1reqem olmalidir');
        return false;
    }
    
    return true;
}

function logoutUser() {
    removeNavbarUsername();
    window.location.href = 'login.html';
}
