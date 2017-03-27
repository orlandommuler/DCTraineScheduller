 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCSto1e8t8uPFIWEPxLz1JSu8TbJnelbdk",
    authDomain: "dctrainescheduleapp.firebaseapp.com",
    databaseURL: "https://dctrainescheduleapp.firebaseio.com",
    storageBucket: "dctrainescheduleapp.appspot.com",
    messagingSenderId: "752714268344"
  };
  firebase.initializeApp(config);
var url = "https://dctrainescheduleapp.firebaseio.com/";
var dataRef = new Firebase(url);
var traineName = "";
var dipartureFrom = "";
var destination = "";
var frequency = "";
var nextArrival = "";
var nextTrain
var minutesAway = "";

