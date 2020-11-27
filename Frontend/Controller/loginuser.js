
// Check if stored data from register-form is equal to entered data in the login-form
function check() {

    // Stored data from the register-form
    var MyUsersList = localStorage.getItem('MyUsersList');

    var UserList = JSON.parse(MyUsersList);

    console.log(UserList);

    // Entered data from the login-form
    var useremail = document.getElementById('email').value;
    var userpsw = document.getElementById('psw').value;

    // https://stackoverflow.com/questions/18238173/javascript-loop-through-json-array
    // For-loop that validates if users registered email and password match with entered email/password in Login.
    for(var i = 0; i < UserList.length; i++) {
        var obj = UserList[i];
    
        console.log(obj.email);

        if(obj.email == useremail) {
            if(obj.psw == userpsw) {
                window.location.href = "homepage.html?user="+useremail;
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