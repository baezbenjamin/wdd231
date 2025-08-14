const menus = document.querySelector('article');

async function getDishData() {
    try {
        const response = await fetch("data/menu.json");
        if (response.ok) {
            const data = await response.json();
            displayMenu(data.dishes);
            displayFilterOptions(data.dishes);
            fullMenu.addEventListener('click', () => {
                displayMenu(data.dishes);
                document.querySelector('.active')?.classList.remove('active');
                fullMenu.classList.add('active');
            })
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        menus.textContent = error;
    }
}

getDishData();

const displayMenu = (menu) => {
    document.querySelector('.menu').innerHTML = ""
    menu.forEach((dish) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let calories = document.createElement('p');
        let description = document.createElement('p');

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

        menus.appendChild(card);
    })
}

const fullMenu = document.querySelector('#all');

const options = document.querySelector('.filter');

const displayFilterOptions = (menu) => {
    let dishList = [];
    menu.forEach((option) => {

        if (dishList.includes(`${option.category}`)) {
            let times = 1;
        } else {
            let select = document.createElement('li');
            let link = document.createElement('a');

            link.textContent = option.category

            link.setAttribute("href", "#");
            link.setAttribute("class", "option");

            select.appendChild(link);
            options.appendChild(select);

            select.addEventListener('click', () => {
                displayMenu(menu.filter(dish => dish.category == `${option.category}`))
                document.querySelector('.active')?.classList.remove('active');
                link.classList.add('active');
            })
        }
        dishList.push(`${option.category}`);
    })
}