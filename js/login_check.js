firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        alert(user.email);
        console.log(user.toJSON());
    } else {
        alert("user not signed in");
    }
});