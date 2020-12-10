
// Function that makes it possible to have multiple JavaScript windows.onload functions
function addLoadEvent(func) { 
	var oldonload = window.onload; 
	if (typeof window.onload != 'function') { 
		window.onload = func; 
	} else { 
		window.onload = function() { 
			if (oldonload) { 
				oldonload(); 
			} 
			func(); 
		} 
	} 
} 

// When loading homepage, data inputs from User is already loaded in form
addLoadEvent(function() { 
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
});

// https://html-online.com/articles/get-url-parameters-javascript/
// Function to get URL parameters with JavaScript - Example: doing so, the users email will 
// apear - example: "http://127.0.0.1:5500/Frontend/View/homepage.html?user=andreaskonigs@live.dk"
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// Update users input in different id-values in LocalStorage
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
// When update-button is clicked, trigger function updateuser.
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('updatebtn').addEventListener('click', updateuser);
});

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
    window.location.href = "login.html"; // If user is deleted, redirect to loginpage 
}
// When delete-button is clicked, trigger function deleteuser.
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('deletebtn').addEventListener('click', deleteuser);
});



// Function that makes it possible to have multiple JavaScript windows.onload functions
function addLoadEvent(func) { 
	var oldonload = window.onload; 
	if (typeof window.onload != 'function') { 
		window.onload = func; 
	} else { 
		window.onload = function() { 
			if (oldonload) { 
				oldonload(); 
			} 
			func(); 
		} 
	} 
} 

// Create innerHTML - import user-data from LocalStorage in order to display in HTML-table "matchtable"
addLoadEvent(function() { 
    var MyUsersList = localStorage.getItem('MyUsersList');

    var UserList = JSON.parse(MyUsersList);

    table = document.getElementById('matchtable');

    var inner = ""

    var btn = document.createElement("button"); 
    btn.appendChild(document.createTextNode("Like")); 
    btn.id = "likebtn";
    
    // Input user data in <td>
    for(var i = 1; i < UserList.length; i++) {
        inner += "<tr>"
        var obj = UserList[i];
        inner += "<td>" + obj.fname + "</td>"
        inner += "<td>" + obj.bday + "</td>"
        inner += "<td>" + obj.age + "</td>"
        inner += "<td>" + obj.gender + "</td>"
        inner += "<td>" + obj.city + "</td>"
        inner += "<td>" + obj.interest1 + "</td>"
        inner += "<td>" + obj.interest2 + "</td>"
        inner += "<td>" + obj.interest3 + "</td>"
        inner += "<td>" + btn.outerHTML + "</td>"
        inner += "<td>" + '<button>Dislike</button>' + "</td></tr>"
    }
    table.innerHTML += inner
});

// Function that makes it possible to have multiple JavaScript windows.onload functions
function addLoadEvent(func) { 
	var oldonload = window.onload; 
	if (typeof window.onload != 'function') { 
		window.onload = func; 
	} else { 
		window.onload = function() { 
			if (oldonload) { 
				oldonload(); 
			} 
			func(); 
		} 
	} 
} 
// Get element of likebutton - when clicked, copy userdata from HTML-table "matchtable" and input this data in HTML-table "listofmatches"
addLoadEvent(function likeuser() { 
var source = document.getElementById('matchtable');
var destination = document.getElementById('listofmatches');
var copy = source.cloneNode(true);
copy.setAttribute('id', 'listofmatches');


var button = document.getElementById("likebtn");
button.addEventListener("click",function likeuser(){
    button.onclick = alert("You have liked a user") & destination.parentNode.replaceChild(copy, destination);;
},false);

});


// Function that makes it possible to have multiple JavaScript windows.onload functions
function addLoadEvent(func) { 
	var oldonload = window.onload; 
	if (typeof window.onload != 'function') { 
		window.onload = func; 
	} else { 
		window.onload = function() { 
			if (oldonload) { 
				oldonload(); 
			} 
			func(); 
		} 
	} 
}
// Get element of remove match button - when clicked, delete row and therefore the userdata has been deleted from "listofmatches"-table.
addLoadEvent(function removematch() { 
var button = document.getElementById("removematchbuttondiv");
button.addEventListener("click",function removematch(){
    button.onclick = alert("You have removed your match") & document.getElementById('listofmatches').deleteRow(1);;
},false);

});
