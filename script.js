// Redirects user to the dashboard after login
function login() {
    window.location.href = "dashboard.html";
}

// Handles user registration
function register() {
    alert("Account created! Redirecting to login...");
    window.location.href = "index.html";
}

// Logs out user and redirects to login page
function logout() {
    window.location.href = "index.html";
}

// Navigates back to the previous page
function goBack() {
    window.history.back();
}

// Redirect to English Sign Language Course
function goToEnglishCourse() {
    window.location.href = "english-course.html";
}

// Redirect to Tamil Sign Language Course
function goToTamilCourse() {
    window.location.href = "tamil-course.html";
}
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password.");
    }
}function login() {
    let enteredUsername = document.getElementById("username").value;
    let enteredPassword = document.getElementById("password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to another page
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
  });
  