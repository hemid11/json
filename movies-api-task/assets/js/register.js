const registerForm = document.getElementById('registerForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    const isValid = validateInputs(username, email, password);

    if (isValid) {
        const registered = await registerUser(username, email, password);
        
        if (registered) {
            alert('Qeydiyyat Ugurla icra olundu!');
            window.location.href = 'login.html';
        } else {
            alert('Qeydiyyat icra olunmadi,zehmet olmasa duzgun daxil edin');
        }
    }
});

function validateInputs(username, email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

    if (username.trim() === '') {
        alert('Ad xanasi bos olmamalidir');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Zehmet olmasa dogru email daxil edin');
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert('Sifreniz 8 uzunluqda,1 boyuk,en az 1 reqemden ibaret olmalidir');
        return false;
    }

    return true;
}

async function registerUser(username, email, password) {
    return true;
}
