const dashboardContent = document.getElementById("dashboard-content");

// Event Listeners for Sidebar Options
document.getElementById("memory-album").addEventListener("click", showMemoryAlbum);
document.getElementById("music-therapy").addEventListener("click", playMusic);
document.getElementById("routine-guide").addEventListener("click", showRoutineGuide);
document.getElementById("sos").addEventListener("click", sendSOS);

// **1️⃣ Memory Album Feature**
function showMemoryAlbum() {
    dashboardContent.innerHTML = `<h2>📸 Memory Album</h2>
        <div class="memory-gallery">
            <div class="photo-card">
                <img src="images/family1.jpg" alt="Family">
                <p>Mom & Dad</p>
            </div>
            <div class="photo-card">
                <img src="images/friends1.jpg" alt="Friends">
                <p>Best Friend - John</p>
            </div>
            <div class="photo-card">
                <img src="images/childhood.jpg" alt="Childhood">
                <p>Me as a Child</p>
            </div>
        </div>`;
}

// **2️⃣ Music Therapy Feature**
function playMusic() {
    dashboardContent.innerHTML = `<h2>🎵 Music Therapy</h2>
        <div class="music-player">
            <audio controls>
                <source src="audio/relaxing_music.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>`;
}

// **3️⃣ Daily Routine Guide Feature**
function showRoutineGuide() {
    dashboardContent.innerHTML = `<h2>📅 Daily Routine</h2>
        <div class="routine-list">
            <label><input type="checkbox"> Wake up & Stretch</label>
            <label><input type="checkbox"> Take Medication</label>
            <label><input type="checkbox"> Have Breakfast</label>
            <label><input type="checkbox"> Memory Exercise</label>
            <label><input type="checkbox"> Afternoon Walk</label>
            <label><input type="checkbox"> Evening Relaxation</label>
        </div>`;
}

// **4️⃣ Emergency SOS Feature**
function sendSOS() {
    alert("🔴 SOS Alert Sent to Caretaker!");
}
