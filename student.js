function confirmReset() {
    return confirm("Are you sure you want to reset the form?");
}
function santhiya() {
    var firstname = document.regist.first.value;
    var lastname = document.regist.last.value;
    var dob = document.regist.birth.value;
    var mobile = document.regist.mob.value;
    var email = document.regist.email.value;
     var gender = "";
    var genderOptions = document.getElementsByName("gender");
    for (var i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            gender = genderOptions[i].value;
            break;
        }
    }
    var address = document.regist.address.value;
    var city = document.regist.city.value;
    var state = document.getElementById("state").value;
    var pin = document.regist.code.value;
    var department = "";
    var departmentOptions = document.getElementsByName("department");
    for (var i = 0; i < departmentOptions.length; i++) {
        if (departmentOptions[i].checked) {
            department = departmentOptions[i].value;
            break;
        }
    }
    var photo = document.regist.photo.value;
    
    if (firstname == null || firstname == "") {
        alert("Please enter the firstname");
        return false;
    }

    if (lastname == null || lastname == "") {
        alert("Please enter the lastname");
        return false;
    }
    if (dob == "") {
        alert("Please select the date, month, and year");
        return false;
    }
    if (mobile == "") {
        alert("Please enter the phone number");
        return false;
    }
    if (mobile.length != 10 || isNaN(mobile)) {
        alert("Please enter a valid 10-digit phone number");
        return false;
    }
    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");
    if (email == null || email == "") {
        alert("Email id should not be empty");
        return false;
    }
    if (at < 1 || dot < at + 2 || dot + 2 >= email.length) {
        alert("Not a valid email");
        return false;
    }
    if (gender == "") {
    alert("Please select the gender");
    return false;
}
   
 if (address == null || address == "") {
        alert("Please enter the address");
        return false;
    }
    if (city == null || city == "") {
        alert("Please enter the city");
        return false;
    }
    if (state === "Select a state") {
        alert("Please select a valid state");
        return false;
    }

    if (pin == null || pin == "") {
        alert("Please enter the pin");
        return false;
    }
    if (pin.length != 6 || isNaN(pin)) {
        alert("Please enter a valid 6-digit pin code");
        return false;
    }
   if (department === "") {
        alert("Please select a department");
        return false;
    }
    if (photo === "") {
    alert("Please upload your photo");
    return false;
}
    alert("Thanks for registering, " + firstname + "!");
 return true;
}
   
