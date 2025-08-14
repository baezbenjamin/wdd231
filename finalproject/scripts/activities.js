const all_activities = document.querySelector('article');

const closest = document.querySelector('.closest')

async function getActivityData() {
    try {
        const response = await fetch("data/activities.json");
        if (response.ok) {
            const data = await response.json();
            displayActivities(data.activities);
            // closestActivity(data.activities);
            displayClosest(data.activities);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        all_activities.textContent = error;
        // console.log(error)
    }
}

getActivityData();

// Display Each Activity

const displayActivities = (activities) => {
    activities.forEach((activity) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let date = document.createElement('p');
        let openDescription = document.createElement('button');

        name.textContent = activity.name;
        image.setAttribute("src", `images/${activity.image}`);
        image.setAttribute("alt", `${activity.name}`);
        image.setAttribute("loading", "lazy");
        date.setAttribute("class", "date")
        date.innerHTML = `<strong>Date:</strong> ${activity.date}`;
        
        openDescription.textContent = "Open Description";
        openDescription.addEventListener('click', () => {
            displayActivityDescription(activity);
        });

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(date);
        card.appendChild(openDescription);

        all_activities.appendChild(card);
    })
}

const activityDescription = document.querySelector('#activity-description');

// Display a Dialog for each Activity

function displayActivityDescription(activity) {
    activityDescription.innerHTML = '';
    activityDescription.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${activity.name}</h2>
    <p>${activity.description}</p>`;

    activityDescription.showModal();

    closeModal.addEventListener("click", () => {
        activityDescription.close();
    });
}

// Finds which Activity is closer

let currentDate = new Date();
let thisMonth = currentDate.getMonth();
let thisYear = currentDate.getFullYear();
let thisDay = currentDate.getDate();
let todayString = `${thisMonth + 1}-${thisDay}-${thisYear}`;
// console.log(todayString);

let closestOne = new Date(todayString);
let dates = [];
let differences = [];

const closestActivity = (activities) => {
    activities.forEach((activity) => {
        let otherDate = new Date(`${activity.date}`);
        let otherMonth = otherDate.getMonth();
        if (thisMonth > otherMonth) {
            dates.push(`${activity.date}-${thisYear + 1}`);
        } else {
            dates.push(`${activity.date}-${thisYear}`);
        }
        differences.push(closestOne - otherDate);
    })

    // console.log(dates);
    // console.log(differences);

    smallestDifference = differences[0];

    differences.forEach(diff => {
        if (diff <= smallestDifference) {
            smallestDifference = diff;
        }
    })

    let index = differences.indexOf(smallestDifference);
    let theActivity = dates[index];
    // console.log(theActivity)
    return theActivity;
}

// Display the Closest Activity

const displayClosest = (activities) => {
    activities.forEach((activity) => {
        if (`${activity.date}-${thisYear}` == closestActivity(activities) || `${activity.date}-${thisYear + 1}` == closestActivity(activities)) {
            let name = document.createElement('h2');
            let image = document.createElement('img');
            let date = document.createElement('p');
            let desc = document.createElement('p');

            name.textContent = activity.name;
            image.setAttribute("src", `images/${activity.image}`);
            image.setAttribute("alt", `${activity.name}`);
            image.setAttribute("loading", "lazy");
            date.setAttribute("class", "date");
            date.innerHTML = `<strong>Date:</strong> ${closestActivity(activities)}`;
            desc.textContent = activity.description;

            closest.appendChild(name);
            closest.appendChild(image);
            closest.appendChild(date);
            closest.appendChild(desc);
        }
    })
}