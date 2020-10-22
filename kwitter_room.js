//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAvHka8imvYLUGN63O21TGyZsu_oLGTSWA",
      authDomain: "kwitter-93576.firebaseapp.com",
      databaseURL: "https://kwitter-93576.firebaseio.com",
      projectId: "kwitter-93576",
      storageBucket: "kwitter-93576.appspot.com",
      messagingSenderId: "300729601786",
      appId: "1:300729601786:web:740ad11ab5f7afb90a8343"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}