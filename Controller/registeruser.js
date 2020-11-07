let users = [];
// example {id:1592304983049, fname: 'Andreas Kønigsfeldt', age: 21}
const addUser = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let user = {
        id: Date.now(),
        fname: document.getElementById('fname').value,
        bday: document.getElementById('bday').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        city: document.getElementById('city').value,
        interest1: document.getElementById('int1').value,
        interest2: document.getElementById('int2').value,
        interest3: document.getElementById('int3').value,
        email: document.getElementById('email').value,
        psw: document.getElementById('psw').value,
    }
    users.push(user);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {user} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(users, '\t', 2);

    //saving to localStorage
    localStorage.setItem('MyUsersList', JSON.stringify(users));
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('registerbtn').addEventListener('click', addUser);
});
