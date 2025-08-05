const currentTime = new Date();

document.querySelector("#timestamp").value = `${currentTime.toLocaleString()}`; 

// Non Profit Membership

const npDetails = document.querySelector("#np-details");
const displayNp = document.querySelector("#displayNp");
const closeNp = document.querySelector("#closeNp");

displayNp.addEventListener('click', () => {
    npDetails.showModal();
    closeNp.addEventListener("click", () => {
        npDetails.close();
    });
})

// Bronze Membership

const bronzeDetails = document.querySelector("#bronze-details");
const displayBronze = document.querySelector("#displayBronze");
const closeBronze = document.querySelector("#closeBronze");

displayBronze.addEventListener('click', () => {
    bronzeDetails.showModal();
    closeBronze.addEventListener("click", () => {
        bronzeDetails.close();
    });
})

// Silver Membership

const silverDetails = document.querySelector("#silver-details");
const displaySilver = document.querySelector("#displaySilver");
const closeSilver = document.querySelector("#closeSilver");

displaySilver.addEventListener('click', () => {
    silverDetails.showModal();
    closeSilver.addEventListener("click", () => {
        silverDetails.close();
    });
})

// Gold Membership

const goldDetails = document.querySelector("#gold-details");
const displayGold = document.querySelector("#displayGold");
const closeGold = document.querySelector("#closeGold");

displayGold.addEventListener('click', () => {
    goldDetails.showModal();
    closeGold.addEventListener("click", () => {
        goldDetails.close();
    });
})

