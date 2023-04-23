function validateForm(){
    var returnvalue = true;
    var fname = document.signUpform.fname.value;
    // var laname = document.signUp.lastname.value;
    if(fname.length <2){
        alert("Name is Too short!")
         returnvalue = false;
}
    var email = document.signUpform.email.value;
    if(email.length>25){
        alert("Email is too long!")
        returnvalue = false;
    }
    var phone = ducument.signUpform.mobile.value;
    if(phone.length !=10){
        alert("Phone number should be 10 digits only!")
        returnvalue = false;
    }
    var password = document.signUpform.password.value;
        if(password.length < 6){
            alert("Password should be atleast 6 character long!")
            returnvalue = false;
        }
        var cpassword = document.signUpform.cpassword.value;
        if(cpassword != password){
            alert("Password and confirm password should be match!")
            returnvalue = false;
        }
        return returnvalue;
}