function validate(event){
    event.preventDefault();
    let user = document.getElementById('name').value;
    let status = document.getElementById('status');

    // console.log('name =', name);

    if (user.length == 0) {
        status.innerHTML = "enter userName"
        status.style.color = " red";
    } else if (user.length  > 5) {
        status.innerText = "valid userName"
        status.style.color = " green";
}
    // email
let email = document.getElementById("email").value;
let mani = document.getElementById("error");

let regax = /^\S+@\S+\.\S+$/;

if (email == "") {
mani.innerText = 'email field must be filled';
mani.style.color = "red";
} else {
if(regax.test(email) === false){
mani.innerText = ' invalid email id';
mani.style.color = "red";
} else {
mani.innerText = ' valid email-id';
mani.style.color = "green";
}
}

// MOBILE
let mobile = document.getElementById("mobile").value;
let error = document.getElementById("chinnu");

var regax1 = /^[6-9]\d{9}$/;

if (mobile == ""){
error.innerText = 'mobile field must be filled';
error.style.color = "red";
} else {
if(regax1.test(mobile) === false){
error.innerText = 'invalid mobile number';
error.style.color = "red";
} else {
error.innerText = "valid mobile number";
error.style.color = "green"
}
}

   //CITY

var city = document.getElementById("city").value
var mani1 = document.getElementById("mani1");

if (city == "null") {
mani1.innerHTML = "please select the city"
mani1.style.color = "red"
} else {
mani1.innerHTML = `you are selected the ${city}`;
mani1.style.color = "green"
}
    


// GENDER
let male = document.getElementById("male").checked ;
let female = document.getElementById("female").checked ;
let others = document.getElementById("others").checked ;

let jaga = document.getElementById("jaga");
if ((male=="")&&(female=="")&&(others=="")) {
jaga.innerHTML="select your gender";
jaga.style.color="red"
} else {
jaga.innerHTML = "valid"
jaga.style.color="green"
}

// LANGUAGES

var div = document.getElementById("telugu").checked;
var div1 = document.getElementById("english").checked;
var div2 = document.getElementById("kannada").checked;
var div3 = document.getElementById("hindi").checked;
var div4 = document.getElementById("urdu").checked;
var div5 = document.getElementById("kannada").checked;

var vinny = document.getElementById("vinny");
if((div=="")&&(div1=="")&&(div2=="")&&(div3=="")&&(div4=="")&&(div5=="")) {
vinny.innerHTML = "please select languages"
vinny.style.color = "red"
} else{
vinny.innerHTML = "valid language "
vinny.style.color = "green"
}

} 
function mani(){
var user = document.getElementById("name").value;
var status = document.getElementById("status");
status.innerHTML = "";

var email = document.getElementById("email").value;
var mani = document.getElementById("error");
mani.innerHTML = "";

var mobile = document.getElementById("mobile").value;
var error = document.getElementById("chinnu");
error.innerHTML = "";

var city = document.getElementById("city").value;
var mani1 = document.getElementById("mani1");
mani1.innerHTML = "";

var male = document.getElementById("male").value;
var jaga = document.getElementById("jaga");
jaga.innerHTML = "";

var div = document.getElementById("telugu").value;
var vinny = document.getElementById("vinny");
vinny.innerHTML = "";
} 
