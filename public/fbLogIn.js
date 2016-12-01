  "use strict";
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyD9xeq34gctsKfIajyTC7DRo1o13knB-zU",
      authDomain: "coffeestop-820c3.firebaseapp.com",
      databaseURL: "https://coffeestop-820c3.firebaseio.com",
      storageBucket: "coffeestop-820c3.appspot.com",
      messagingSenderId: "282398477281"
    };
    firebase.initializeApp(config);
    var userName;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      $("#firebaseui-auth-container").hide();
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      userName = user.uid;

      var providerData = user.providerData;
      $("#header").show();
      $("#login-reg").hide();

      user.getToken().then(function(accessToken) {
          document.getElementById('sign-in-status').textContent = "Welcome, " + displayName;
      });
  } else {

      console.log("Signed out");
      // User is signed out.
      $("#header").hide();
      $("#login-reg").show();

      // FirebaseUI config.
      var uiConfig = {
          'signInFlow': 'popup',
          'signInSuccessUrl': '/', //URL that we get sent BACK to after logging in
          'signInOptions': [
              // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//            firebase.auth.GithubAuthProvider.PROVIDER_ID,
//            firebase.auth.EmailAuthProvider.PROVIDER_ID
          ],
          // Terms of service url.
          'tosUrl': '<your-tos-url>',
      };


    //  ReactDOM.render(<LoginRegister/>, document.getElementById('content_log'));
      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
    }
}, function(error) {
  console.log(error);
});
