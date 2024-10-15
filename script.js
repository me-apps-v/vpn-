let countdownElement = document.querySelector('.countdown');
let countdown = 60;

function updateCountdown() {
    countdown--;
    countdownElement.textContent = countdown;
    if (countdown === 0) {
        clearInterval(countdownInterval);
        alert("Time's up! Your data has been leaked.");
    }
}

let countdownInterval = setInterval(updateCountdown, 1000);
