import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCvulO7FD2dwyV-1cAiaqf-Iq3SrbiO78k",
  authDomain: "booksr-us-9f1e6.firebaseapp.com",
  databaseURL: "https://booksr-us-9f1e6-default-rtdb.firebaseio.com",
  projectId: "booksr-us-9f1e6",
  storageBucket: "booksr-us-9f1e6.appspot.com",
  messagingSenderId: "853405259540",
  appId: "1:853405259540:web:57dad89954e22014661401",
  measurementId: "G-0SEE00KPG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


const submit = document.getElementById('submit');
submit.addEventListener('click', function(event){
  event.preventDefault()

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Account created successfully!")
    window.location.href = "index.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})
