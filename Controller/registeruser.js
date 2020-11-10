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

    console.warn('added' , {user} );
    
    // to clear the form for the next entries: document.querySelector('form').reset();
    users.push(user);

    // Get the existing data
    var existing = localStorage.getItem('MyUsersList');

    if (existing) {
        existing = JSON.parse(existing);

        // Add new data to localStorage Array
        existing.push(user);
    } else {
        existing = users
    }

    // Save back to localStorage
    localStorage.setItem('MyUsersList', JSON.stringify(existing));
    window.location.href = "homepage.html?user="+document.getElementById('email').value;

}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('registerbtn').addEventListener('click', addUser);
});