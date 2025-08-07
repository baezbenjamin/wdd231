const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

const mod = document.querySelector("#lastModified");

mod.innerHTML = `<p>Last Modification: ${document.lastModified}</p>`;