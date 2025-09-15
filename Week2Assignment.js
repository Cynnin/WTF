//Create any example program using these concepts: type conversion, basic functions, while - for loops, arrays, function methods, array methods, object.keys, values, entries...
//Creating a simple alarm clock program for 24 hours format, to set alarms and check if the alarm time is reached. (Set for 12am, 5am, 3pm, 6pm, and 11pm)

//Function to update and display the current time
// Function to update and display the current time

   setInterval(() => {
    const timeElement = document.querySelector(".display #hours");
    if (!timeElement) return;

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    if (hours > 12) {
        day_night = "PM";
        hours = hours - 12;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    timeElement.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
}, 1000);

// Helper: format time as HH:MM
function formatTime(date) {
    let h = date.getHours();
    let m = date.getMinutes();
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    return `${h}:${m}`;
}

// Alarm logic
let alarms = [];
let alarmActive = false;
let alarmAudio = new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"); // Free bell sound



// Display preset alarms using Object.entries
const clocking = document.getElementById("clocking");
if (clocking) {
    updateAlarmDisplay();
}

// Function to update the displayed alarm list
function updateAlarmDisplay() {
    clocking.innerHTML = "<b>Preset Alarms:</b><br>" + Object.entries(alarms).map(([i, t]) => 
            `Alarm ${parseInt(i) + 1}: ${t} <button onclick="removeAlarm(${i})">Remove</button>`
        ).join("<br>");
    saveAlarms();
}

// Check alarms every second
setInterval(() => {
    const now = new Date();
    const nowTime = formatTime(now);

    // Use array method .includes for alarm check
    if (alarms.includes(nowTime) && !alarmActive) {
        alarmActive = true;
        alarmAudio.play();
        alert("⏰ Alarm! Time: " + nowTime);
    }
    // Reset alarmActive when minute changes
    if (!alarms.includes(nowTime)) {
        alarmActive = false;
    }
}, 1000);

// Set new alarm from input
   document.getElementById("set-alarm");
   onclick = function() {
    const input = document.getElementById("alarm-time").value;
    if (!input) {
        alert("Please enter a time.");
        return;
    } console.log(input);

    // Validate time format HH:MM
    const timeRegex = /^(\d|2[0-3]):([0-5]\d)$/;
    if (!timeRegex.test(input)) {
        alert("Please enter a valid time in HH:MM format.");
        return;
    }

    // Type conversion: "HH:MM" string
    if (!alarms.includes(input)) {
        alarms.push(input);
        updateAlarmDisplay();
        alert("Alarm set for " + input);
    } else {
        alert("Alarm already exists.");
    }
};

// Stop alarm (pause sound)
document.getElementById("stop-alarm");
onclick = function() {
    alarmAudio.pause();
    alarmAudio.currentTime = 0;
    alarmActive = false;
    alert("Alarm stopped.");
};

// Remove an alarm
function removeAlarm(index) {
    if (index >= 0 && index < alarms.length) {
        alarms.splice(index, 1);
        updateAlarmDisplay();
        alert("Alarm removed.");
    }
}

// Example: show all alarms using Object.values
console.log("All alarms:", Object.values(alarms));

// Example: show alarm entries
console.log("Alarm entries:", Object.entries(alarms));

//This will have to wait till I can gain more wxperience



