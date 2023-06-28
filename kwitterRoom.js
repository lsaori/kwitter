
//ADICIONE SEUS LINKS FIREBASE - C93
const firebaseConfig = 
{
  apiKey: "AIzaSyAg5FqM-OKMsvycjJhdzudXnItdYIjveT8",
  authDomain: "vamosconversar-d4295.firebaseapp.com",
  databaseURL: "https://vamosconversar-d4295-default-rtdb.firebaseio.com",
  projectId: "vamosconversar-d4295",
  storageBucket: "vamosconversar-d4295.appspot.com",
  messagingSenderId: "281735848590",
  appId: "1:281735848590:web:f94318627a7c6b5b9edfdf"
};

// Initialize Firebase - C93
firebase.initializeApp(firebaseConfig);

//C95 
userName = localStorage.getItem("userName");
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });
  localStorage.setItem("roomName", roomName);
  window.location = "kwitterPage.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) 
    {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
        roomNames = childKey;
        console.log("Nome da Sala - " + roomNames);
        row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      }
      );
    }
  );
}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
