const cards = document.querySelector('article');

async function getMemberData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('p');
        let adress = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let join = document.createElement('p');

        logo.setAttribute("src", `images/${member.img}`)
        logo.setAttribute("alt", `${member.name} Logo`)
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "340");
        logo.setAttribute("height", "auto");
        name.textContent = member.name;
        name.setAttribute("class", "name");
        adress.textContent = member.adress;
        phone.textContent = member.phone_number;
        website.setAttribute("href", `${member.website_url}`);
        website.textContent = member.website_url;
        join.textContent = `Member since: ${member.join_date}`

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(adress);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(join);

        cards.appendChild(card);
    })
}

const gridbutton = document.querySelector("#grid-button");
const listbutton = document.querySelector("#list-button");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
})
