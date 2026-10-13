
    var form = document.getElementById("form")
    var firstname=document.getElementById("firstname")
    var lastname=document.getElementById("lastname")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var cpassword = document.getElementById("cpassword")
    var btn = document.getElementById("btn")

    form.addEventListener("submit",(e)=>{
        
        if(!validateInputs()){
            e.preventDefault();
        }
    })

    function validateInputs(){
        var firstnameVal = firstname.value.trim()
         var lastnameVal = lastname.value.trim()
        var emailVal = email.value.trim()
        var passwordVal = password.value.trim()
        var cpasswordVal = cpassword.value.trim()

        let success = true;

        if(firstnameVal  ===""){
            success=false;
            setError(firstname,"FirstName is required")
        }
        else{
            setSuccess(firstname)
        }
         if(lastnameVal  ===""){
            success=false;
            setError(lastname,"LastName is required")
        }
        else{
            setSuccess(lastname)
        }
        
        if(emailVal===""){
            success=false;
            setError(email, "Email is required")
        }
        else if(!validateEmail(emailVal)){
            success=false;
            setError(email,"Please enter a valid email")
        }
        else{
            setSuccess(email)
        }

        if(passwordVal===""){
            success=false;
            setError(password,"Password is required")
        }
        else if(passwordVal.length<6){
            success=false;
            setError(password,"Password mustbe atleat 6 characters")
        }
        else{
            setSuccess(password)
        }
        if(cpassword === "")
        {
            success=false;
            setError(cpassword, "Confirm password is required")
        }
        else if(cpasswordVal!==passwordVal)
        {
            success=false;
            setError(cpassword, "Password is not matching")
        }
        else{
            setSuccess(cpassword)
        }

        return success;
              
    }

    function setError(element,message){
        var input = element.parentElement;
        var errorElement = input.querySelector(".error")

        errorElement.innerText=message;
        input.classList.add("error")
        input.classList.remove("success")
    }
     function setSuccess(element){
        var input = element.parentElement;
        var errorElement = input.querySelector(".error")

        errorElement.innerText="";
        input.classList.add("success")
        input.classList.remove("error")
    }
    const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


   
   
    

    

    

