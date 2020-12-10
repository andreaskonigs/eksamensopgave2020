
// Function to verify if stored data from register form is equal to entered data in the login-form
function check() {

    // Get stored data from the register form
    var MyUsersList = localStorage.getItem('MyUsersList');

    // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
    var UserList = JSON.parse(MyUsersList);

    console.log(UserList);

    // Declare entered data from the login-form
    var useremail = document.getElementById('email').value;
    var userpsw = document.getElementById('psw').value;

    // For-loop through JSON array
    for(var i = 0; i < UserList.length; i++) {
        var obj = UserList[i];
    
        console.log(obj.email);

        // Verifiy if users registered email and password match with entered email/password in login form input
        if(obj.email == useremail) {
            if(obj.psw == userpsw) {
                window.location.href = "homepage.html?user="+useremail; // If correct, redirect to Homepage
            } else {
                alert("Email/Password is incorrect");
            }
            break;    
        }
        if(i == UserList.length - 1) {
            alert("Email/Password is incorrect")
        }
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('loginbtn').addEventListener('click', check);
});