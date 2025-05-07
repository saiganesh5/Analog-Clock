const circle = document.querySelector('.circle');
const seconds_hand=document.querySelector('.seconds-hand');
const minutes_hand = document.querySelector('.minute-hand');
const hours_hand = document.querySelector('.hour-hand');

// window.onload = () => {
//     if (intervalId) return;
//     intervalId = setInterval(() => {
//         second_angle +=6;
//         minute_angle +=0.1;
//         hour_angle +=(1/120);
//         seconds_hand.style.transform = `rotate(${second_angle}deg)`;
//         minutes_hand.style.transform = `rotate(${minute_angle}deg)`;
//         hours_hand.style.transform = `rotate(${hour_angle}deg)`;
//     }, 1000);
//
// };
function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate angles
    const second_angle = seconds * 6; // 360 / 60
    const minute_angle = minutes * 6 + seconds * 0.1; // 360 / 60 + smoothness
    const hour_angle = ((hours % 12) * 30) + (minutes * 0.5); // 360 / 12 + smoothness

    // Rotate hands
    seconds_hand.style.transform = `rotate(${second_angle}deg)`;
    minutes_hand.style.transform = `rotate(${minute_angle}deg)`;
    hours_hand.style.transform = `rotate(${hour_angle}deg)`;

    const digitalClock = document.getElementById("digitalClock");
    const formattedTime = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    digitalClock.textContent = formattedTime;
}

// Initialize immediately
updateClock();
// Update every second
setInterval(updateClock, 1000);


