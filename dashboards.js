// Detect user role from URL
const role = window.location.pathname.includes("patient") ? "Patient" :
             window.location.pathname.includes("caretaker") ? "Caretaker" :
             "Doctor";

// Update Dashboard Content
document.getElementById("role-name").textContent = role;
document.getElementById("dashboard-title").textContent = role + " Dashboard";
const dashboardContent = document.getElementById("dashboard-content");

// Load Features Based on Role
if (role === "Patient") {
    dashboardContent.innerHTML = `
        <div class="feature-card">📸 View Memory Album</div>
        <div class="feature-card">🎵 Play Music Therapy</div>
        <div class="feature-card">📅 Daily Routine Guide</div>
        <div class="feature-card">🔴 Emergency SOS</div>
    `;
} else if (role === "Caretaker") {
    dashboardContent.innerHTML = `
        <div class="feature-card">📤 Upload Patient Photos/Videos</div>
        <div class="feature-card">📅 Set Medication Reminders</div>
        <div class="feature-card">📍 Track Patient Location</div>
        <div class="feature-card">💬 Chat with Doctor</div>
    `;
} else {
    dashboardContent.innerHTML = `
        <div class="feature-card">📑 View Patient Reports</div>
        <div class="feature-card">📋 Provide Care Instructions</div>
        <div class="feature-card">📅 Manage Appointments</div>
        <div class="feature-card">📢 Communicate with Caretakers</div>
    `;
}
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");

function sendMessage() {
    const message = chatInput.value;
    if (message.trim() !== "") {
        const userRole = window.location.pathname.includes("patient") ? "Patient" :
                         window.location.pathname.includes("caretaker") ? "Caretaker" :
                         "Doctor";

        const chatMessage = `<p><strong>${userRole}:</strong> ${message}</p>`;
        chatBox.innerHTML += chatMessage;
        chatInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
