// Store audio instances globally to control them
let currentAudio = null;

// Function to smoothly scroll to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Function to play sounds in the Sounds section and stop after 3 seconds
function playSound(soundFile) {
    // Stop any currently playing audio before starting a new one
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(soundFile);
    currentAudio.play();

    // Stop the sound after 3 seconds
    setTimeout(() => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }, 3000);
}
// Function to smoothly scroll to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Function to start breathing exercise with a timer
function startBreathingExercise() {
    let timeLeft = 10; // Set the timer to 10 seconds
    const timerDisplay = document.getElementById("breathing-timer");
    const countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(countdown); // Stop the timer
            timerDisplay.textContent = "Done!"; // Update UI

            // Play timer-end sound
            let endSound = new Audio("alarm.mp3"); // Ensure this file exists
            endSound.play();
        }
    }, 1000);
}

// Function to play clicking sound and stop after 3 seconds
function playClickSound() {
    // Stop any currently playing audio before starting a new one
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio('click.wav');
    currentAudio.play();

    // Stop the sound after 3 seconds
    setTimeout(() => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }, 3000);
}
