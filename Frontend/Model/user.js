// Creating class of User

class User {
    constructor(fname, bday, age, gender, city, int1, int2, int3, email, psw){
this.fname = fname;
this.bday = bday;
this.age = age;
this.gender = gender;
this.city = city;
this.int1 = int1;
this.int2 = int2;
this.int3 = int3;
this.email = email;
this.psw = psw;
}}

// Hardcode two Users

var user1 = new User('Andreas Kønigsfeldt', [28, 11, 1998], 21, 'male', 'Copenhagen', 'computer', 'sport', 'food', 'andreaskonigs@live.dk', '111111');
var user2 = new User('Kirstine Rasmussen', [01, 08, 1997], 23, 'female', 'Copenhagen', 'clothes', 'music', 'food', 'kirstine@tksf.dk', '222222');

exports.user1 = user1;
exports.user2 = user2;