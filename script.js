document.getElementById("year").textContent = new Date().getFullYear();

function signup() {
    let username = document.getElementById("signupUsername").value.trim();
    let password = document.getElementById("signupPassword").value.trim();

    if (username && password) {
        localStorage.setItem("user", username);
        localStorage.setItem("pass", password);
        alert("✅ Account created! You can now login.");
        window.location.href = "login.html";
    } else {
        alert("⚠ Please fill all fields.");
    }
}

function login() {
    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if (username === savedUser && password === savedPass) {
        window.location.href = "dashboard.html";
    } else {
        alert("❌ Invalid username or password!");
    }
}

function logout() {
    window.location.href = "login.html";
}
