function login(){
    console.log(password)
    var password=document.querySelector(".password")
    var username=document.querySelector("#username");
    if(username.value.trim()===""|username.value.length<6){
        username.style="background-color:red"
        alert("Invalid username")
    }
    if(password.value.trim()===""|password.value.length<6){
        password.style="background-color:red"
        alert("Invalid password")
    }
    

}

function showHidePassword(){
    var password=document.querySelector(".password")
    var btn=document.querySelector("#button-addon2")
    var type=password.type
    if (type==="password"){
        password.type="text"
        btn.innerHTML="&#xe106;"
    }
    else{
        password.type="password"
        btn.innerHTML="&#128065;"
    }
}
