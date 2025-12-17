//character sets
const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
const numberCharacter = "0123456789";
const specialCharacter = "!@#$%^&*(){}|?/';<>`~-+:_";

function generatePassword(){
//password lenght
let lenght =document.getElementById("length").value; 

//empty character string
let character = "";

if(document.getElementById("uppercase").checked){
    character += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if(document.getElementById("lowercase").checked){
   character += "abcdefghijklmnopqrstuvwxyz";
}
if(document.getElementById("number").checked){
    character += "0123456789";
}
if(document.getElementById("symbol").checked){
    character += "!@#$%^&*(){}|?/';<>`~-+:_";
}

//if user not selected something 
if(character === ""){
    document.getElementById("msg").innerText = "⚠ please select at least one options";
    return;
}

let password  = "";
for(let i=0; i<lenght; i++){
 let randomIndex = Math.floor(Math.random() * character.length);
 password += character[randomIndex];
} 
document.getElementById("password").value = password;
document.getElementById("msg").innerText = "";

} 

function copyPassword(){
    let passwordFeild = document.getElementById("password");
    
    if(passwordFeild.value.trim() === ""){
        "msg".innerText ="⚠ Nothing to Copy!";
        return;
    }

    passwordFeild.select();
    document.execCommand("copy");
    document.getElementById("msg").innerText = "✔ password copied successfully";
}

function updateLengthValue(val){
     document.getElementById("lengthValue").innerText = val;
}