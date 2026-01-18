let isHindi = true;

function toggleLang() {
    if (isHindi) {
        document.getElementById("title").innerText = "Dainik News 360";
        document.getElementById("tagline").innerText = "Politics | Social | Awareness";
        document.getElementById("breakingText").innerText =
        "Latest breaking news from politics and society";
    } else {
        document.getElementById("title").innerText = "दैनिक न्यूज़ 360";
        document.getElementById("tagline").innerText = "राजनीति | समाज | जागरूकता";
        document.getElementById("breakingText").innerText =
        "देश की बड़ी खबरें सबसे पहले | दैनिक न्यूज़ 360";
    }
    isHindi = !isHindi;
}

/* AUTO SLIDER */
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}, 3000);