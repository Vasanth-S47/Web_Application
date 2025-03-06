let countdownInterval;

function startCountdown() {
    clearInterval(countdownInterval);

    let eventDateInput = document.getElementById("eventDate").value;
    if (!eventDateInput) {
        alert("Please enter a valid date and time.");
        return;
    }

    let eventDate = new Date(eventDateInput).getTime();

    countdownInterval = setInterval(function() {
        let now = new Date().getTime();
        let timeLeft = eventDate - now;
        console.log(now);
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "Time's up! The event has started!";
            return;
        }

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            ` ${days}d ${hours}h ${minutes}m ${seconds}s remaining`;

    }, 1000);
}
