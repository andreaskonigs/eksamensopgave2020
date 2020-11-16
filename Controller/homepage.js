// When loading homepage, data inputs from User is already loaded in form
window.onload = function() {
    var MyUsersList = localStorage.getItem('MyUsersList');

    var UserList = JSON.parse(MyUsersList);

    var useremail = getUrlVars()["user"]

    // Entered data from the login-form
    for(var i = 0; i < UserList.length; i++) {
        var obj = UserList[i];

        if(obj.email == useremail) {
            document.getElementById('fname').value = obj.fname;
            document.getElementById('bday').value = obj.bday;
            document.getElementById('age').value = obj.age;
            document.getElementById('gender').value = obj.gender;
            document.getElementById('city').value = obj.city;
            document.getElementById('int1').value = obj.interest1;
            document.getElementById('int2').value = obj.interest2;
            document.getElementById('int3').value = obj.interest3;
            document.getElementById('email').value = obj.email;
            document.getElementById('psw').value = obj.psw;
        }
    }
};

// https://html-online.com/articles/get-url-parameters-javascript/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// Update User input in different Id-values
function updateuser() {

    var MyUsersList = localStorage.getItem('MyUsersList');

    var UserList = JSON.parse(MyUsersList);

    var useremail = getUrlVars()["user"]

    for(var i = 0; i < UserList.length; i++) {
        var obj = UserList[i];

        if(obj.email == useremail) {
            obj.fname = document.getElementById('fname').value;
            obj.bday = document.getElementById('bday').value;
            obj.age = document.getElementById('age').value;
            obj.gender = document.getElementById('gender').value;
            obj.city = document.getElementById('city').value;
            obj.interest1 = document.getElementById('int1').value;
            obj.interest2 = document.getElementById('int2').value;
            obj.interest3 = document.getElementById('int3').value;
            obj.email = document.getElementById('email').value;
            obj.psw = document.getElementById('psw').value;
        }
    }

    localStorage.setItem('MyUsersList', JSON.stringify(UserList));
    window.location.href = "homepage.html?user=" + document.getElementById('email').value;
}

// Delete User
function deleteuser() {

    var MyUsersList = localStorage.getItem('MyUsersList');

    var UserList = JSON.parse(MyUsersList);

    var useremail = getUrlVars()["user"]

    for(var i = 0; i < UserList.length; i++) {
        var obj = UserList[i];

        if(obj.email == useremail) {
           UserList.splice(i, 1);
        }
    }

    localStorage.setItem('MyUsersList', JSON.stringify(UserList));
    window.location.href = "login.html";
}


// EventListeners, button for update/delete
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('updatebtn').addEventListener('click', updateuser);
});

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('deletebtn').addEventListener('click', deleteuser);
});