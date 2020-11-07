// Data from the register-form
var email = document.getElementById('email');
var psw = document.getElementById('psw');

// Storing input from register-form
function store() {
    localStorage.setItem('email', email.value);
    localStorage.setItem('psw', psw.value);
}

// Check if stored data from register-form is equal to entered data in the login-form
function check() {

    // Stored data from the register-form
    var storedemail = localStorage.getItem('email');
    var storedpsw = localStorage.getItem('psw');

    // Entered data from the login-form
    var useremail = document.getElementById('email');
    var userpsw = document.getElementById('psw');

    // Check if stored data from register-form is equal to data from login form
    if(useremail.value == storedemail && userpsw.value == storedpsw) {
        alert('Email and/or password incorrect');
    }else {
        alert('You are logged in!');
    }
}