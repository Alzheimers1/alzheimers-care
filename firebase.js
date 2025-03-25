// 🔥 Firebase Configuration (Replace with Your Credentials)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// 🔥 Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

// 📌 Ensure Only Logged-In Users Can Access Dashboards
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "index.html"; // Redirect to login if not authenticated
    }
});

// 📌 Login Function
function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log("✅ Login Successful!");
            redirectToDashboard(email);
        })
        .catch(error => {
            alert("❌ Login Failed: " + error.message);
        });
}

// 📌 Redirect Based on Role
function redirectToDashboard(email) {
    if (email.includes("caretaker")) {
        window.location.href = "caretaker_dashboard.html";
    } else if (email.includes("doctor")) {
        window.location.href = "doctor_dashboard.html";
    } else {
        window.location.href = "patient_dashboard.html";
    }
}

// 📌 Logout Function
function logoutUser() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
    });
}
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");

// 📌 Send Message
function sendMessage() {
    const message = chatInput.value.trim();
    const user = firebase.auth().currentUser;

    if (user && message !== "") {
        db.ref("messages").push({
            role: user.email.includes("doctor") ? "Doctor" :
                  user.email.includes("caretaker") ? "Caretaker" : "Patient",
            text: message,
            timestamp: Date.now()
        });

        chatInput.value = "";
    } else {
        alert("❌ You must be logged in to send messages.");
    }
}

// 📌 Load Messages in Real-Time
db.ref("messages").on("child_added", snapshot => {
    const msg = snapshot.val();
    chatBox.innerHTML += `<p><strong>${msg.role}:</strong> ${msg.text}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
});
