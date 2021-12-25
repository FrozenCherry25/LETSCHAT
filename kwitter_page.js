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
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});

document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['Like'];
name_width_tag = "<h4> "+ name +"<img class='user_tick' src=tick.png";
message_with_tag = "<h4> class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_width_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    windows.location.replace("index.html");
}
