var firebaseConfig = {
    apiKey: "AIzaSyDPE9gj2lYQfmLrlw5Wi8sDCNaAaog04mE",
    authDomain: "doctorapp-acd3b.firebaseapp.com",
    databaseURL: "https://doctorapp-acd3b-default-rtdb.firebaseio.com",
    projectId: "doctorapp-acd3b",
    storageBucket: "doctorapp-acd3b.appspot.com",
    messagingSenderId: "500119242143",
    appId: "1:500119242143:web:2bd9139d89a3b3680ca9aa",
    measurementId: "G-V7VDGWB29T"
};

firebase.initializeApp(firebaseConfig);

function getData() {
    // Done in next class..
}
getData();

function sendMessage(message, room) {
    firebase.database().ref("/").child(localStorage.getItem("roomName")).update ({
        msg: localStorage.getItem('name') + ': ' + message
    });
    document.getElementById("msginput").value = "";
}
