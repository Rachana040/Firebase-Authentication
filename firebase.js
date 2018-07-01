var app_firebase={};
(function(){
    
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyB-cQAAnuRPwHBzmF_OFnExS-G9gWRm3go",
            authDomain: "auth-d6c1f.firebaseapp.com",
            databaseURL: "https://auth-d6c1f.firebaseio.com",
            projectId: "auth-d6c1f",
            storageBucket: "auth-d6c1f.appspot.com",
            messagingSenderId: "753838809512"
        };
        firebase.initializeApp(config);
        app_firebase = firebase;
})()