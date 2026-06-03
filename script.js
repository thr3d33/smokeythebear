function getNextWednesdayAtSeven() {

    const now = new Date();

    const target = new Date(now);

    const currentDay = now.getDay();

    let daysUntilWednesday = (3 - currentDay + 7) % 7;

    target.setHours(19, 0, 0, 0);

    if (daysUntilWednesday === 0 && now >= target) {
        daysUntilWednesday = 7;
    }

    target.setDate(
        target.getDate() + daysUntilWednesday
    );

    return target;
}

function updateCountdown() {

    const now = new Date();

    const target = getNextWednesdayAtSeven();

    const distance = target - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);