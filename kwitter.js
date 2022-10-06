var user = "";
function addUser(){
    user = document.getElementById("user_name").value;
    console.log(user);
    localStorage.setItem("user", user);
    window.location = "kwitter_room.html";
}