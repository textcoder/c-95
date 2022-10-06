

const firebaseConfig = {
      apiKey: "AIzaSyBcnklNywBE7qlB8bN8fiB-H48_NfKxI7g",
      authDomain: "kwitter-a7b1b.firebaseapp.com",
      databaseURL: "https://kwitter-a7b1b-default-rtdb.firebaseio.com",
      projectId: "kwitter-a7b1b",
      storageBucket: "kwitter-a7b1b.appspot.com",
      messagingSenderId: "82321889700",
      appId: "1:82321889700:web:d923f2e27a38971f42c931",
      measurementId: "G-NQPFZCWF8M"
    };
    firebase.initializeApp(firebaseConfig);

    user = localStorage.getItem("user");
console.log(user + " is username");
document.getElementById("user_display").innerHTML="Welcome " + user;

function addRoom(){
      RoomName = document.getElementById("room_name").value;
      console.log(RoomName);
      localStorage.setItem("RoomName", RoomName);
      firebase.database().ref("/").child(RoomName).update({ purpose : "adding room name" });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
      console.log(Room_names);
      output_div="<div id='output_div'><h1>Hi</h1></div" 

      //End code
      });});}
getData();