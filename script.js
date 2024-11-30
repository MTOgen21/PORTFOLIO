// Countdown timer logic
let timeLeft = 15; // Timer duration in seconds
const timerElement = document.getElementById('timer');

// Start the countdown
const countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time left: ${timeLeft} seconds`;

    // If time runs out, redirect to locked.html
    if (timeLeft <= 0) {
        clearInterval(countdown);
        window.location.replace = "locked.html";
    }
}, 1000);

// Handle form submission
document.getElementById('login-btn').addEventListener('click', function () {
    const name = document.getElementById('name').value;

    if (name) {
        // Save the name in localStorage
        localStorage.setItem('visitorName', name);

        // Stop the countdown
        clearInterval(countdown);

        // Redirect to landing.html
        window.location.href = "landing.html";
    } else {
        alert('Please enter your name.');
    }
});
