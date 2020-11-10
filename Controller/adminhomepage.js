// When loading homepage, data inputs from User is already loaded in form
window.onload = function() {
    var MyUsersList = localStorage.getItem('MyUsersList');

    var UserList = JSON.parse(MyUsersList);

    table = document.getElementById('admintable');

    var inner = ""

    // Entered data from the login-form
    for(var i = 0; i < UserList.length; i++) {
        inner += "<tr>"
        var obj = UserList[i];
        inner += "<td>" + obj.id + "</td>"
        inner += "<td>" + obj.fname + "</td>"
        inner += "<td>" + obj.bday + "</td>"
        inner += "<td>" + obj.age + "</td>"
        inner += "<td>" + obj.gender + "</td>"
        inner += "<td>" + obj.city + "</td>"
        inner += "<td>" + obj.interest1 + "</td>"
        inner += "<td>" + obj.interest2 + "</td>"
        inner += "<td>" + obj.interest3 + "</td>"
        inner += "<td>" + obj.email + "</td>"
        inner += "<td>" + obj.psw + "</td>"
        inner += "</tr>"
    }
    table.innerHTML += inner
};

// Update User input in different Id-values
function adminupdate () {

    table = document.getElementById('admintable');

    let users = [];

    for(i = 1; i < table.rows.length;i++) {

        let user = {
            id: table.rows[i].cells[0].textContent,
            fname: table.rows[i].cells[1].textContent,
            bday: table.rows[i].cells[2].textContent,
            age: table.rows[i].cells[3].textContent,
            gender: table.rows[i].cells[4].textContent,
            city: table.rows[i].cells[5].textContent,
            interest1: table.rows[i].cells[6].textContent,
            interest2: table.rows[i].cells[7].textContent,
            interest3: table.rows[i].cells[8].textContent,
            email: table.rows[i].cells[9].textContent,
            psw: table.rows[i].cells[10].textContent
        }
        users.push(user);
    }
    localStorage.setItem('MyUsersList', JSON.stringify(users));
}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('adminupdate').addEventListener('click', adminupdate);
});