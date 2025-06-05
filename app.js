
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const statusMessage = document.getElementById("status-message");

function toggleForm() {
  loginForm.classList.toggle("hidden");
  signupForm.classList.toggle("hidden");
  statusMessage.textContent = '';
}

// Signup with Firebase
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      statusMessage.textContent = "Signup successful! Please log in.";
      toggleForm();
    })
    .catch((error) => {
      statusMessage.textContent = error.message;
    });
});

// Login with Firebase
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      statusMessage.textContent = "Login successful! ✅";
    })
    .catch((error) => {
      statusMessage.textContent = "Login failed: " + error.message;
    });
});
