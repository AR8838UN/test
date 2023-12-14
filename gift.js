function confirmName() {
    var nameInput = document.getElementById('nameInput').value;
    if (nameInput.toLowerCase().includes("saraswathi")) {
        document.getElementById('container').style.display = 'none';
        document.getElementById('birthdayContainer').style.display = 'block';
        document.getElementById('giftContainer').style.display = 'none';
    } else {
        alert("Olunga odiru!"); // You can customize this message or behavior.
    }
}

function confirmBirthday() {
    var selectedBirthday = document.getElementById('birthdayInput').value;
    if (selectedBirthday === "2000-10-25") {
        document.getElementById('container').style.display = 'none';
        document.getElementById('birthdayContainer').style.display = 'none';
        document.getElementById('giftContainer').style.display = 'block';
    } else {
        alert("Gift ungaluku ella. Please odirunga!"); // You can customize this message or behavior.
    }
}

function openGift() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
function happyButton() {
    alert("Hurray! Then go collect your real Shawarma from your best friend.");
}

function giftVenumButton() {
    alert("Cher cher alakudathu poo. Un best friend ta vangiko.");
}   