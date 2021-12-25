
var firebaseConfig = {
      apiKey: "AIzaSyAdYikA77hq0CFed9O9vG3t9LaKR9P6sto",
      authDomain: "kwitter-6a9d8.firebaseapp.com",
      databaseURL: "https://kwitter-6a9d8-default-rtdb.firebaseio.com",
      projectId: "kwitter-6a9d8",
      storageBucket: "kwitter-6a9d8.appspot.com",
      messagingSenderId: "622368014116",
      appId: "1:622368014116:web:fb298e4c9748b34e6c7db1"
    };
    
      firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome"+ user_name+ "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
 Room_names = childKey;
 console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row; });
 });
 }
      
getData();

function redirectToRoomName(name)
{
      console.log(name);
      loaclStorage.setItem("room_name", name);
      wondow.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
