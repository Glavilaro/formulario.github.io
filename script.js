let signUp = document.getElementById("signUp");
let signIn = document.getElementById ("signIn");
let NameInput = document.getElementById ("NameInput");
let title = document.getElementById("title");

signIn.onclick= function() {
    NameInput.style.maxHeight="0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUp.onclick= function(){
    NameInput.style.maxHeight="60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}