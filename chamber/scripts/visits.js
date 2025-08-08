
const visitsDisplay = document.querySelector("#visits");
const currentTimeStamp = Date.now();

let numVisits = Number(localStorage.getItem("visitsCounter")) || 0;
let lastVisit = Number(localStorage.getItem("timeStamp")) || 0;
let difference = currentTimeStamp - lastVisit;

if (numVisits == 0 && lastVisit == 0) {
    visitsDisplay.innerHTML = `Welcome! Let us know if you have any questions.`;
} else if (difference < 86400000) {
    visitsDisplay.innerHTML = `Back so soon! Awesome!`;
} else if (difference < (86400000 * 2)) {
    visitsDisplay.innerHTML = `You last visited 1 day ago`;
} else if (difference > (86400000 * 2)) {
    visitsDisplay.innerHTML = `You last visited ${(difference / 86400000).toFixed(0)} days ago`;
}

numVisits++;

localStorage.setItem("visitsCounter", numVisits);
localStorage.setItem("timeStamp", currentTimeStamp);
