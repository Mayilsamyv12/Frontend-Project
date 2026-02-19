// REGISTER FUNCTION
function register() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill in all fields (Name, Email, Password).");
    return;
  }

  const user = {
    name: name,
    email: email,
    password: password
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

  const loginEmail = document.getElementById("loginEmail").value.trim();
  const loginPassword = document.getElementById("loginPassword").value.trim();

  if (!loginEmail || !loginPassword) {
    alert("Please fill in both Email and Password.");
    return;
  }

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


