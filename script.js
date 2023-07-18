// registerForm.addEventListener('submit', validateForm);

function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('error')[0].innerHTML = error;

}

function validateForm(){
    console.log("..............................")
    const fnameValue = document.getElementById("fname").value.trim();
    console.log(fnameValue)
    
    const lnameValue = document.getElementById("lname").value.trim();
    // const emailValue = document.getElementById("email").value.trim();

    if (fnameValue === '') {
        seterror(fname, "Please enter the first name properly");
        return false;
    }
   
    if (lnameValue === '') {
        seterror(lname, "Please enter the last name properly");
        return false;
    }
   
    alert('Form submitted successfully!');
    return true;
}