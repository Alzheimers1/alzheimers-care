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

// 📌 Store & Load Messages in Real-Time
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");

function sendMessage() {
    const message = chatInput.value.trim();
    if (message !== "") {
        const userRole = window.location.pathname.includes("patient") ? "Patient" :
                         window.location.pathname.includes("caretaker") ? "Caretaker" :
                         "Doctor";

        // Save message to Firebase
        db.ref("messages").push({
            role: userRole,
            text: message,
            timestamp: Date.now()
        });

        chatInput.value = "";
    }
}

// 📌 Load Messages in Real-Time
db.ref("messages").on("child_added", snapshot => {
    const msg = snapshot.val();
    chatBox.innerHTML += `<p><strong>${msg.role}:</strong> ${msg.text}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
});
// 🔥 Firebase Auth (Email & Password)
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "index.html"; // Redirect if not logged in
    }
});

// 📌 Login Function
function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log("✅ Login Successful!");
        })
        .catch(error => {
            console.error("❌ Error: " + error.message);
        });
}

// 📌 Logout Function
function logoutUser() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html"; // Redirect after logout
    });
}
