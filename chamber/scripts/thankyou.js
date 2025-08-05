
const formInfo = new URLSearchParams(window.location.search);

document.querySelector("#sentInfo").innerHTML = `
    <p><strong>Your name:</strong> ${formInfo.get("first")} ${formInfo.get("last")}</p>
    <p><strong>Title:</strong> ${formInfo.get("title")}</p>
    <p><strong>Your Email:</strong> ${formInfo.get("email")} </p>
    <p><strong>Your Phone:</strong> ${formInfo.get("phone")} </p>
    <p><strong>Organization Name: </strong>${formInfo.get("oraganization")} </p>
    <p><strong>Membership Level: </strong>${formInfo.get("membership-level")} </p>
    <p><strong>Organization's Description: </strong>${formInfo.get("description")} </p>
    <p><strong>Application Date: </strong>${formInfo.get("timestamp")}</p>`