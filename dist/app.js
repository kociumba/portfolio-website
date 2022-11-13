// Import the functions you need from the SDKs you need
//import { initializeApp } from "./firebase/app";
//import { getAnalytics } from "./firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
//  apiKey: "AIzaSyCjs1ByMOHbhTk-zcVrj6kUCzR7jetm5MY",
//  authDomain: "test-site-c9999.firebaseapp.com",
//  projectId: "test-site-c9999",
//  storageBucket: "test-site-c9999.appspot.com",
//  messagingSenderId: "13892104054",
//  appId: "1:13892104054:web:dca94ff620dce5986bd457",
//  measurementId: "G-NKFPTJPTXD"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); // observe each element

document.getElementById("youtube").addEventListener("click", youtube);

function youtube() {
    document.getElementById("clickable");
    window.location.href = "https://www.youtube.com/@kociumba";
  }

document.getElementById("github").addEventListener("click", github);

function github() {
  document.getElementById("clickable");
  window.location.href = "https://www.github.com/kociumba";
}

document.getElementById("discord").addEventListener("click", discord);

function discord() {
  document.getElementById("clickable");
  window.location.href = "https://discord.gg/h2t8TxYffk";
}

document.getElementById("twitter").addEventListener("click", twitter);

function twitter() {
  document.getElementById("clickable");
  window.location.href = "https://www.twitter.com/kociumba";
}

document.getElementById("email").addEventListener("click", email);

function email() {
  document.getElementById("clickable");
  window.location.href = "mailto: kociumbaofficial@gmail.com?subject=Business Inquiry&body = Message";
}

