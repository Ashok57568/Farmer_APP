const loginbtn = document.getElementById('loginbtn');
const signbtn = document.getElementById('signbtn');

function login(){
    window.location.href = 'Login.html';
}

loginbtn.addEventListener('click', login)

function signup(){
    window.location.href = 'signup.html';
}

signbtn.addEventListener('click', signup)