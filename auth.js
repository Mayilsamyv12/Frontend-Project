// REGISTER FUNCTION
function register() {
  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  // store in localStorage
  localStorage.setItem("user", JSON.stringify(user));

  // show in console
  console.log("Registered User:", user);

  alert("Registration successful!");
  window.location.href = "login.html";
}

// LOGIN FUNCTION
function login() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  const loginData = {
    email: loginEmail,
    password: loginPassword
  };

  // show login values in console
  console.log("Login Attempt:", loginData);

  if (
    storedUser &&
    storedUser.email === loginEmail &&
    storedUser.password === loginPassword
  ) {
    console.log("Login Success:", storedUser);

    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html"; // go to home page
  } else {
    alert("Invalid email or password");
  }
}


function logout() {
  localStorage.removeItem("isLoggedIn");
  location.href = "login.html";
}


