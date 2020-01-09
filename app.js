// $(".email-signup").hide();
// $("#signup-box-link").click(function(){
//   $(".email-login").fadeOut(100);
//   $(".email-signup").delay(100).fadeIn(100);
//   $("#login-box-link").removeClass("active");
//   $("#signup-box-link").addClass("active");
// });
// $("#login-box-link").click(function(){
//   $(".email-login").delay(100).fadeIn(100);;
//   $(".email-signup").fadeOut(100);
//   $("#login-box-link").addClass("active");
//   $("#signup-box-link").removeClass("active");
// });
var showLogin = (e)=>{
    document.getElementsByClassName('email-login')[0].style.display="block";
    document.getElementsByClassName('email-signup')[0].style.display="none";
    console.log(e);
}

var showSignUp = ()=>{
    document.getElementsByClassName('email-login')[0].style.display="none";
    document.getElementsByClassName('email-signup')[0].style.display="block";
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementsByClassName('welcomeNote')[0].style.display="block";
      document.getElementsByClassName('login-box')[0].style.display="none";
      if(user !=null){
          console.log(user);
          document.getElementById('welcomNote').innerHTML= "Welcome "+user.email;
      }
    } else {
      // No user is signed in.
      document.getElementsByClassName('welcomeNote')[0].style.display="none";
      document.getElementsByClassName('login-box')[0].style.display="block";
    }
});

/*
function for Normal login 
*/
var logIn = ()=>{
   var email =  document.getElementById('logInEmail').value;
   var pass  =  document.getElementById('logInPass').value;
   console.log(email, pass);
   firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });   
}
var signUp = ()=>{
    var email =  document.getElementById('regEmail').value;
    var pass  =  document.getElementById('regPass').value;
    console.log(email, pass);
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    }); 
 }


var logOut = ()=>{
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
        alert("Sign Out successfully")
    }).catch(function(error) {
    // An error happened.
        alert(error);
    });
}



//function for google login 
var googleLogin = ()=>{
  
}