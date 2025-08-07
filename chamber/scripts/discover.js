const cards = document.querySelector('#all-activities');

async function getActivityData() {
    const response = await fetch("data/activities.json");
    const data = await response.json();
    displayActivities(data.activities);
    console.log(data.activities)
}

getActivityData()

const displayActivities = (activities) => {
    activities.forEach((activity) => {
        const card = document.createElement('div')
        const picture = document.createElement('img')
        const title = document.createElement('h2')
        const address = document.createElement('address')
        const description = document.createElement('p')
        const learnButton = document.createElement('a')

        picture.src = `images/${activity.photo_url}`
        picture.alt = activity.name
        picture.setAttribute("loading", "lazy")
        title.innerHTML = activity.name
        address.innerText = activity.address
        description.innerText = activity.description
        learnButton.innerHTML = `Learn More`

        card.appendChild(picture)
        card.appendChild(title)
        card.appendChild(address)
        card.appendChild(description)
        card.appendChild(learnButton)

        cards.appendChild(card)
    })
}