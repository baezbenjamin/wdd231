
const formInfo = new URLSearchParams(window.location.search);

if (formInfo.get("offers") == "on") {
    document.querySelector("#sentInfo").innerHTML = `
    <p><strong>Your name:</strong> ${formInfo.get("first")} ${formInfo.get("last")}</p>
    <p><strong>Your Email:</strong> ${formInfo.get("email")} </p>
    <p><strong>Your Phone:</strong> ${formInfo.get("phone")} </p>
    <p>Fun and Interesting Activities await you!</p>
    <p>We will be notifying you soon about special offers and promotions.</p>`
} else {
    document.querySelector("#sentInfo").innerHTML = `
    <p><strong>Your name:</strong> ${formInfo.get("first")} ${formInfo.get("last")}</p>
    <p><strong>Your Email:</strong> ${formInfo.get("email")} </p>
    <p><strong>Your Phone:</strong> ${formInfo.get("phone")} </p>
    <p>Fun and Interesting Activities await you!</p>`
}