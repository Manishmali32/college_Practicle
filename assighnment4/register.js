function validateForm() {

let fname=document.getElementById("fname").value;
let lname=document.getElementById("lname").value;
let mobile=document.getElementById("mobile").value;
let email=document.getElementById("email").value;
let Address=document.getElementById("address").value;
let password=document.getElementById("password").value;

if(fname==""){
    alert("Please Enter your First Name ");
    return false;
}

if(lname=="")
{
    alert("Please Enter Your Last Name");
    return false;
}
if (mobile.length != 10 || isNaN(mobile)) {
    alert("Please Enter Valid Mobile Number");
    return false;
}

if(!email.includes("@") || !email.includes("."))
{
    alert("Please Enter Valid Email");
    return false;
}
if(Address=="")
{
    alert("Please Enter Your Address");
    return false;
}
if(password.length<6)
{
    alert("Password must be at least 6 characters long");
    return false;
}

alert("Registration Successful");
return true;
}

