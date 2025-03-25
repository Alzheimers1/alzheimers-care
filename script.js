function detectRole() {
    let userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes("mobile")) {
        alert("Detected Role: Caretaker");
        window.location.href = "caretaker_dashboard.html";
    } else if (userAgent.includes("windows") || userAgent.includes("mac")) {
        alert("Detected Role: Doctor");
        window.location.href = "doctor_dashboard.html";
    } else {
        alert("Detected Role: Patient (Face Recognition Required)");
        window.location.href = "patient_dashboard.html";
    }
}

function showLogin() {
    document.getElementById("login-form").classList.remove("hidden");
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "doctor") {
        alert("Welcome, Doctor");
        window.location.href = "doctor_dashboard.html";
    } else if (username === "caretaker") {
        alert("Welcome, Caretaker");
        window.location.href = "caretaker_dashboard.html";
    } else {
        alert("Invalid credentials");
    }
}

document.getElementById("patient-card").onclick = function() {
    alert("Redirecting to Patient Interface");
    window.location.href = "patient_dashboard.html";
};

document.getElementById("caretaker-card").onclick = function() {
    alert("Redirecting to Caretaker Interface");
    window.location.href = "caretaker_dashboard.html";
};

document.getElementById("doctor-card").onclick = function() {
    alert("Redirecting to Doctor Interface");
    window.location.href = "doctor_dashboard.html";
};
function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log("✅ Login Successful!");

            // Redirect based on role
            if (email.includes("caretaker")) {
                window.location.href = "caretaker_dashboard.html";
            } else if (email.includes("doctor")) {
                window.location.href = "doctor_dashboard.html";
            }
        })
        .catch(error => {
            alert("❌ Login Failed: " + error.message);
        });
}

// Logout function
function logoutUser() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
    });
}
