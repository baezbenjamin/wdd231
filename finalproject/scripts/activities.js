const all_activities = document.querySelector('article');

async function getActivityData() {
    try {
        const response = await fetch("data/activities.json");
        if (response.ok) {
            const data = await response.json();
            displayMenu(data.activities);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getActivityData();

const displayMenu = (activities) => {
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