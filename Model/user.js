// Creating class of User

class User {
    constructor(fname, birthday, age, gender, city, interest, email, password){
this.fname = fname;
this.birthday = birthday;
this.age = age;
this.gender = gender;
this.city = city;
this.interest = interest;
this.email = email;
this.password = password;
}}

// Creating class of Interest

class Interest {
    constructor(interest1, interest2, interest3){
this.interest1 = interest1;
this.interest2 = interest2;
this.interest3 = interest3;
}}

// Hardcode two Users

// First declare interests
var user1int = new Interest ("computer", "sport", "food");
var user2int = new Interest ("food", "military", "clotches");

// Next declare two Users

let User1 = new User('Andreas Kønigsfeldt', [28, 11, 1998], 21, 'male', 'Copenhagen', user1int , 'andreaskonigs@live.dk', '111111',);
let User2 = new User('Kirstine Rasmussen', [01, 08, 1997], 23, 'female', 'Copenhagen', user2int, 'kirstine@tksf.dk', '222222',);

/* // Export hardcoded Users?
exports.user1 = user1
exports.user2 = user2 */

console.log(User1, User2);