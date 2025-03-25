const dashboardContent = document.getElementById("dashboard-content");

// Event Listeners for Sidebar Options
document.getElementById("upload-content").addEventListener("click", uploadPatientContent);
document.getElementById("medication-reminders").addEventListener("click", setMedicationReminders);
document.getElementById("track-location").addEventListener("click", trackPatientLocation);
document.getElementById("chat-doctor").addEventListener("click", chatWithDoctor);

// **1️⃣ Upload Patient Content Feature**
function uploadPatientContent() {
    dashboardContent.innerHTML = `<h2>📤 Upload Patient Photos & Videos</h2>
        <div class="upload-section">
            <input type="file" id="file-upload" multiple>
            <button onclick="saveFiles()">Upload</button>
        </div>
        <p id="upload-status"></p>`;
}

function saveFiles() {
    document.getElementById("upload-status").innerText = "✅ Files Uploaded Successfully!";
}

// **2️⃣ Medication Reminders Feature**
function setMedicationReminders() {
    dashboardContent.innerHTML = `<h2>💊 Set Medication Reminders</h2>
        <div class="medication-section">
            <input type="text" id="medicine-name" placeholder="Medicine Name">
            <input type="time" id="medicine-time">
            <button onclick="saveReminder()">Set Reminder</button>
        </div>
        <p id="reminder-status"></p>`;
}

function saveReminder() {
    const medicine = document.getElementById("medicine-name").value;
    const time = document.getElementById("medicine-time").value;
    if (medicine && time) {
        document.getElementById("reminder-status").innerText = `✅ Reminder set for ${medicine} at ${time}`;
    } else {
        alert("Please enter all fields!");
    }
}

// **3️⃣ Track Patient Location Feature**
function trackPatientLocation() {
    dashboardContent.innerHTML = `<h2>📍 Patient Live Location</h2>
        <div class="location-section">
            <div id="map">Loading Map...</div>
        </div>`;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("map").innerText = "Geolocation is not supported.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("map").innerHTML = `<iframe width="100%" height="300px" frameborder="0" 
        style="border:0" referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=${lat},${lon}&output=embed"></iframe>`;
}

function showError(error) {
    document.getElementById("map").innerText = "Error retrieving location.";
}

// **4️⃣ Chat with Doctor Feature**
function chatWithDoctor() {
    dashboardContent.innerHTML = `<h2>💬 Chat with Doctor</h2>
        <div class="chat-section">
            <textarea id="chat-box" placeholder="Type a message..."></textarea>
            <button onclick="sendMessage()">Send</button>
        </div>
        <p id="chat-status"></p>`;
}

function sendMessage() {
    const message = document.getElementById("chat-box").value;
    if (message.trim() !== "") {
        document.getElementById("chat-status").innerText = "✅ Message sent to the Doctor!";
    } else {
        alert("Please type a message.");
    }
}
// Upload Patient Reports
function uploadPatientContent() {
    dashboardContent.innerHTML = `<h2>📤 Upload Patient Reports</h2>
        <input type="file" id="file-upload">
        <button onclick="saveReport()">Upload</button>
        <p id="upload-status"></p>`;
}

function saveReport() {
    const fileInput = document.getElementById("file-upload");
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        db.ref("patientReports").push({ file: fileName, uploadedBy: "Caretaker" });
        document.getElementById("upload-status").innerText = "✅ Report Uploaded!";
    }
}

// Store Medication Reminders
function saveReminder() {
    const medicine = document.getElementById("medicine-name").value;
    const time = document.getElementById("medicine-time").value;
    if (medicine && time) {
        db.ref("medicationReminders").push({ medicine, time });
        document.getElementById("reminder-status").innerText = "✅ Reminder Saved!";
    }
}
