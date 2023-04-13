
const responseTextDiv = document.getElementById("response-text-div");
const responseText = document.getElementById("response-text");
const copiedText = document.getElementById("copied-text");

const transformType = { capitalize: "capitalize", uppercase: "uppercase", lowercase: "lowercase" }

document.getElementById("capitalize-button").addEventListener('click', () => transformText('capitalize'))
document.getElementById("uppercase-button").addEventListener('click', () => transformText('uppercase'))
document.getElementById("lowercase-button").addEventListener('click', () => transformText('lowercase'))
document.getElementById("copy-button").addEventListener('click', () => copyText())

function copyText() {
    navigator.clipboard.writeText(responseText.value);
    copiedText.style.display = 'flex';
    setTimeout(() => {
        copiedText.style.display = 'none';
    }, 2000);
}

function capitalizeText() {
    const newText = document.getElementById("text-to-edit").value
        .slice(0, 1)
        .toUpperCase()
        + document.getElementById("text-to-edit").value
            .slice(1);

    responseText.value = newText
}

function upperCaseText() {
    const newText = document.getElementById("text-to-edit").value.toUpperCase();
    responseText.value = newText
}

function lowerCaseText() {
    const newText = document.getElementById("text-to-edit").value.toLowerCase();
    responseText.value = newText
}

function transformText(type) {

    showResponseDiv();

    switch (type) {
        case transformType.capitalize:
            return capitalizeText();
        case transformType.uppercase:
            return upperCaseText();
        case transformType.lowercase:
            return lowerCaseText();
    }
}

function showResponseDiv() {
    responseTextDiv.style.display = "block"
}