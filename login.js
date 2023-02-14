// step -1: addEvent click handler
const btnSubmit = document.getElementById('btn-id').addEventListener('click', function(){
    
    // step-2: get the email address inside then input field

    const email = document.getElementById('email-id').value;
   
    // step-3: get the password  inside then input field

    const  password = document.getElementById('pwd').value;
    // console.log(email);
    // console.log(password);

    // step-4: DO NOT VERIFY email password on client side

    // step-4: verifying user

    if(email === "sontan@baper.com" && password === "secret"){
        console.log("valid user")
    }

    else 
        console.log("invalid user");
})