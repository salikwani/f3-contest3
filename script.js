var fullName = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordCheck = document.getElementById("password-check");
var signupPage = document.getElementById("signup");
var profilePage = document.getElementById("profile");
var message = document.getElementById("msg");

var signupBtn = document.getElementById("signup-btn");
signupBtn.addEventListener("click",() => {
    if(fullName.value == "" || email.value == "" || password.value == "" || passwordCheck.value == ""){
        message.innerHTML = "All values are mandatory";
        message.style.color = "red";
    } else if(password.value.trim() != passwordCheck.value.trim()) {
        message.innerHTML = "Passwords don't match";
        message.style.color = "red";
    } else {
        var user = {name: fullName.value.trim(),
                    email: email.value.trim(),
                    password: password.value.trim()            
        }
        localStorage.setItem("user",JSON.stringify(user));
        message.innerHTML = "Successfully signed up";
        message.style.color = "green";
        setTimeout(() => {profileDisplay()},2000);
    }
});

function profileDisplay() {
    var user = JSON.parse(localStorage.getItem("user"));
    signupPage.style.display = "none";
    profilePage.style.display = "block";
    profilePage.innerHTML += `   <h1>Full Name: ${user.name}</h1>
                                <h1>Email: ${user.email}</h1>
                                <h1>Password: ${user.password}</h1>
                                <button onclick="logout()">Log Out</button>`
}
 function logout() {
    localStorage.removeItem("user");
    signupPage.style.display = "flex";
    profilePage.style.display = "none";
 }
