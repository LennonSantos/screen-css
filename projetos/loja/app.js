var config = {
    apiKey: "AIzaSyBIIDO9G-cqPIfiJpcbEH4xZ89ywp4NAjQ",
    authDomain: "lennonsantos-50dc4.firebaseapp.com",
    databaseURL: "https://lennonsantos-50dc4.firebaseio.com",
    projectId: "lennonsantos-50dc4",
    storageBucket: "lennonsantos-50dc4.appspot.com",
    messagingSenderId: "341619828154"
};
var firebaseApp = firebase.initializeApp(config)
    var db = firebaseApp.database()

    var vm = new Vue({
    el: '#produtos',
    firebase: {
        // simple syntax, bind as an array by default
        anArray: db.ref('produtos'),
        // can also bind to a query
        // anArray: db.ref('url/to/my/collection').limitToLast(25)
        // full syntax
        anObject: {
        source: db.ref('produtos'),
        // optionally bind as an object
        asObject: true,
        // optionally provide the cancelCallback
        cancelCallback: function () {},
        // this is called once the data has been retrieved from firebase
        readyCallback: function () {}
        }
    }
})