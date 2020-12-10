// Unit test

// In this Unit Test i will test my function check() in regards to the log-in verification. 
// My login-function check if stored data from register form was equal to entered data in the login form.
// Since there is no registered users and therefore no registered data, the test will import hardcoded users from the Model folder.


// Import hardcoded users to define the registered userdata
const { user1, user2 } = require("./Frontend/Model/user");

// Test of User1
console.log("User1:")
function testCheck1(){

    // 1. Arrange
    // Define hardcoded users as the registered userdata
    var registeredemail1 = user1.email;
    var registeredpsw1 = user1.psw;

    // Define email/password inputs that is presumably entered in login-form
    var inputemail1 = "andreaskonigs@live.dk"
    var inputpsw1 = "111111"

    var equalemail1 = registeredemail1 == inputemail1
    var equalpsw1 = registeredpsw1 == inputpsw1

    // 2. Act
    console.log("testCheck1() should return a succes if the registered and input values of user1 are equal")
    console.log("Registered email: " + registeredemail1 + " Input email: " + inputemail1)
    console.log("Registered password: " + registeredpsw1 + " Input password: " + inputpsw1)
    
    // 3. Assert
        if(equalemail1 & equalpsw1)
            {
                return console.log("Output: " + "Succes")
            } else {
                return console.log("Output: " + "Failed")
            }  

}

testCheck1()


// Test of User2   
console.log("User2:")
function testCheck2(){

    // 1. Arrange
    // Define hardcoded users as the registered userdata
    var registeredemail2 = user2.email;
    var registeredpsw2 = user2.psw;

    // Define email/password inputs that is presumably entered in login-form
    var inputemail2 = "andreaskonigs@live.dk"
    var inputpsw2 = "222222"

    var equalemail2 = registeredemail2 == inputemail2
    var equalpsw2 = registeredpsw2 == inputpsw2

    // 2. Act
    console.log("testCheck2() should return a succes if the registered and input values of user2 are equal")
    console.log("Registered email: " + registeredemail2 + " Input email: " + inputemail2)
    console.log("Registered password: " + registeredpsw2 + " Input password: " + inputpsw2)
    // 3. Assert
        if(equalemail2 & equalpsw2)
            {
                return console.log("Output: " + "Succes")
            } else {
                return console.log("Output: " + "Failed")
            }  

}

testCheck2()