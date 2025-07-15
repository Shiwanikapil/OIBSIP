function register() {
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;
  const message = document.getElementById("message");

  if (!username || !password) {
    message.textContent = "Please fill all fields.";
    message.style.color = "red";
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  message.textContent = "Registered successfully! Redirecting to login...";
  message.style.color = "green";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const message = document.getElementById("message");

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    message.textContent = "Login successful!";
    message.style.color = "green";
    setTimeout(() => {
    window.location.href = "welcome.html";
  }, 2000);
    
  } else {
    message.textContent = "Invalid credentials!";
    message.style.color = "red";
  }
}