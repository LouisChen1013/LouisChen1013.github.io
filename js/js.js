function adduser() {
    alert("adding user!");
    var email = document.getElementById("addemail").value;
    var password = document.getElementById("addpassword").value;
    var second_password = document.getElementById("signCheckPassword").value;
    if (password != second_password) {
        alert("password not match!");
    } else {
        firebase.auth().createUserWithEmailAndPassword(email,
            password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("error" + error.message);
        });
    }
}

function signIn() {
    alert("Signing In");
    var email = document.getElementById("signemail").value;
    var password = document.getElementById("signpass").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        alert("Error signing in");
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

function signOut() {
    firebase.auth().signOut().then(function () {
        alert("Signed out!");
    }).catch(function (error) {});
}


function check_contact() {
    var email = document.getElementById("email_required").value;
    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (document.getElementById("fname_required").value == "") {
        alert("Please enter your first name");
    } else if (document.getElementById("lname_required").value == "") {
        alert("Please enter your last name");
    } else if (document.getElementById("email_required").value == "") {
        alert("Please enter your email");
    } else if (document.getElementById("msg").value == "") {
        alert("Please enter your message");
    } else if (emailFormat.test(email) == false) {
        alert("You have entered an invalid email address!");
    } else {
        alert("Thanks for your submission");
    }
}