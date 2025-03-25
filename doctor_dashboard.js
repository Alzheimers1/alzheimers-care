const dashboardContent = document.getElementById("dashboard-content");

// Event Listeners for Sidebar Options
document.getElementById("view-reports").addEventListener("click", viewPatientReports);
document.getElementById("care-instructions").addEventListener("click", provideCareInstructions);
document.getElementById("manage-appointments").addEventListener("click", manageAppointments);
document.getElementById("chat-caretaker").addEventListener("click", chatWithCaretaker);

// **1️⃣ View Patient Medical Reports Feature**
function viewPatientReports() {
    dashboardContent.innerHTML = `<h2>📑 Patient Medical Reports</h2>
        <div class="report-section">
            <p><strong>Last Report:</strong> MRI Scan - Normal</p>
            <p><strong>Uploaded By:</strong> Caretaker</p>
            <button onclick="downloadReport()">📥 Download Report</button>
        </div>`;
}

function downloadReport() {
    alert("✅ Report Downloaded Successfully!");
}

// **2️⃣ Provide Care Instructions Feature**
function provideCareInstructions() {
    dashboardContent.innerHTML = `<h2>📋 Provide Care Instructions</h2>
        <textarea id="care-instructions-text" placeholder="Write instructions here..."></textarea>
        <button onclick="saveCareInstructions()">Save Instructions</button>
        <p id="instruction-status"></p>`;
}

function saveCareInstructions() {
    const instructions = document.getElementById("care-instructions-text").value;
    if (instructions.trim() !== "") {
        document.getElementById("instruction-status").innerText = "✅ Instructions Saved!";
    } else {
        alert("Please write some instructions.");
    }
}

// **3️⃣ Manage Appointments Feature**
function manageAppointments() {
    dashboardContent.innerHTML = `<h2>📅 Manage Appointments</h2>
        <input type="date" id="appointment-date">
        <input type="time" id="appointment-time">
        <button onclick="scheduleAppointment()">Schedule Appointment</button>
        <p id="appointment-status"></p>`;
}

function scheduleAppointment() {
    const date = document.getElementById("appointment-date").value;
    const time = document.getElementById("appointment-time").value;
    if (date && time) {
        document.getElementById("appointment-status").innerText = `✅ Appointment scheduled on ${date} at ${time}`;
    } else {
        alert("Please select a date and time.");
    }
}

function chatWithCaretaker() {
    dashboardContent.innerHTML = `
        <h2>💬 Chat with Caretaker</h2>
        <div class="chat-container">
            <div id="chat-box"></div>
            <input type="text" id="chat-input" placeholder="Type a message...">
            <button onclick="sendMessage()">Send</button>
        </div>
    `;

    loadMessages(); // Ensure messages load when chat opens
}

// Load Patient Reports
function viewPatientReports() {
    dashboardContent.innerHTML = `<h2>📑 Patient Medical Reports</h2><div id="reports-list"></div>`;
    db.ref("patientReports").on("child_added", snapshot => {
        const report = snapshot.val();
        document.getElementById("reports-list").innerHTML += `<p>${report.file} (Uploaded by: ${report.uploadedBy})</p>`;
    });
}

// Load Medication Reminders
function setMedicationReminders() {
    dashboardContent.innerHTML = `<h2>💊 Medication Reminders</h2><div id="medication-list"></div>`;
    db.ref("medicationReminders").on("child_added", snapshot => {
        const reminder = snapshot.val();
        document.getElementById("medication-list").innerHTML += `<p>${reminder.medicine} at ${reminder.time}</p>`;
    });
}
