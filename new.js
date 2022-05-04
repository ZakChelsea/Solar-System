/*let input = document.getElementsByTagName("input")[0];

input.addEventListener("change", function(){
    document.getElementById("demo").innerHTML=input.value; 
});*/

let date = new Date();
let currentHour = date.getHours();

let createTxtMsg;

if(currentHour >= 4 && currentHour < 10){
    createTxtMsg = "GOOD MORNING!";
}else if(currentHour >= 10 && currentHour < 12){
    createTxtMsg = "GOOD DAY!";
}else if(currentHour >= 12 && currentHour < 18){
    createTxtMsg = "GOOD AFTERNOON!";
}else if(currentHour >= 18 && currentHour < 22){
    createTxtMsg = "GOOD EVENING!";
}else{
    createTxtMsg = "GOOD NIGHT!";
}

let getBody = document.getElementById("main");

let newElement = document.createElement("h2");
newElement.append(createTxtMsg);
newElement.setAttribute("class", "welcome");

newElement.style.cssText = "font-family: arial; color: green; position: sticky; text-align:center;"

getBody.appendChild(newElement);

let objPeople = [
{
    username: "zak",
    password: "roma2014"
},
{
    username: "natuka",
    password: "kato123"
},
{
    username: "teo",
    password: "mia4"
}
]
function getInfo(){
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
//console.log("Your username is " + username + " and your password is " + password);
for(i = 0; i < objPeople.length; i++){
    if(username == objPeople[i].username && password == objPeople[i].password){
        console.log(username + " is logged in!!!");
        return;
    }
  } console.log("incorrect username or password!"); 
}

function myFunction(){
    let x = document.getElementById("password");
    if(x.type === "password"){
        x.type = "text";
    } else{
        x.type = "password";
    }
}
