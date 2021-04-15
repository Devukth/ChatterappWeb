function addUser() {
    localStorage.setItem('name', document.getElementById('name').value);
    document.location = "chatterapp.html";
}