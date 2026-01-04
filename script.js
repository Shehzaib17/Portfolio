function toggleMenu() {
let menu = document.getElementById("menu");
menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

let text = "BS Data Science Student | Python | Web Development";
let i = 0;
let typing = document.getElementById("typing-text");

function typeEffect() {
if (typing && i < text.length) {
typing.innerHTML += text.charAt(i);
i++;
setTimeout(typeEffect, 100);
}
}
typeEffect();
