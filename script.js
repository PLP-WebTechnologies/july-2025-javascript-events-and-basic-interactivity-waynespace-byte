// =====Interactive Features =====

// Light/Dark mode toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});
//DOM property
document.getElementById("onInput").oninput=function(){
    console.log("Input changed to: " + this.value);
}

// ===== Form Validation =====
document.getElementById("signUp").onsubmit = function(event){
    event.preventDefault();

    //fetch form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    //clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText ="";

    let isValid = true;

    //validate username
    if (name ===""){
        document.getElementById("nameError").innerText = "Username Required.";
        isValid = false;
    } else if(name.length < 3){
        document.getElementById("nameError").innerText = "Username Too Short it must be at least 3 characters.";
        isValid = false;
    }
    //validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === ""){
        document.getElementById("emailError").innerText = "Email is Required.";
        isValid = false;
    }else if(!emailPattern.test(email)){
        document.getElementById("emailError").innerText = "Invalid Email format.";
        isValid=false;
    }
    //validate password
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(password===""){
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid=false;
    }else if(!passwordPattern.test(password)){
        document.getElementById("passwordError").innerText="Password must be atleast 8 characters.";
        isValid=false;
    }

    if(isValid){
        alert("Form submitted successfully!");
        document.getElementById("signUp").reset();
    }
}