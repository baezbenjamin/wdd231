const menus = document.querySelector('article');

async function getDishData() {
    try {
        const response = await fetch("data/menu.json");
        if (response.ok) {
            const data = await response.json();
            displayMenu(data.dishes);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getDishData();

const displayMenu = (menu) => {
    menu.forEach((dish) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let calories = document.createElement('p');
        let description = document.createElement('p');
        // let add = document.createElement('button');

        name.textContent = dish.name;
        image.setAttribute("src", `images/${dish.image}`);
        image.setAttribute("alt", `${dish.name}`);
        image.setAttribute("loading", "lazy")
        calories.textContent = `Calories per serving: ${dish.calories_per_serving}`
        description.textContent = dish.description;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(calories);
        card.appendChild(description);
        // card.appendChild(add);

        menus.appendChild(card);
    })
}