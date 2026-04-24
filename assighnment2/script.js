let uname = document.getElementById("uname");
let city = document.getElementById("city");
let result = document.getElementById("result");

function validateForm() {
    if (uname.value === "") {
        alert("Please fill the name");
      
        return false;
    } 
    else {
        result.innerHTML= "name:" + uname.value +",city:"+city.value;
        console.log(uname.value);
        return false ;
    }
}
