// ===== COMPTE À REBOURS MARIAGE =====

// Date du mariage : 26 août 2027 à 15h
// Format : Année, Mois (0-11), Jour, Heure, Minutes
const weddingDate = new Date(2027, 7, 26, 15, 0, 0).getTime(); 

function animateValue(id, value) {
    const element = document.getElementById(id);
    if (!element) return; // Sécurité si l'élément n'existe pas encore

    // Si la valeur n'a pas changé, on ne fait rien pour éviter le clignotement
    const newValue = value < 10 ? "0" + value : value;
    if (element.innerText === newValue.toString()) return;

    element.classList.add("flip");
    setTimeout(() => {
        element.innerText = newValue;
        element.classList.remove("flip");
    }, 200);
}

// Mise à jour toutes les secondes
setInterval(function() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {

        document.getElementById("countdown").innerHTML =
        "<h2>✨ C'est le grand jour ✨</h2>";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    animateValue("days", days);
    animateValue("hours", hours);
    animateValue("minutes", minutes);
    animateValue("seconds", seconds);

}, 1000);

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.onclick = function() {
    navLinks.classList.toggle("open");
}

// Ferme le menu si on clique sur un lien (pratique sur tel)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove("open");
    };
});
//Pour faire fonctionner les flèches du carousel
let currentIndex = 0;

function moveSlide(direction) {
    const slide = document.getElementById('carousel').querySelector('.carousel-slide');
    const totalSlides = slide.querySelectorAll('img').length;
    
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const offset = -currentIndex * 100;
    slide.style.transform = `translateX(${offset}%)`;
}

//carrousel de menu ne soit pas trop géant
.carousel-slide img {
    width: 100%;
    max-height: 500px; /* Évite que l'image du plat prenne tout l'écran */
    object-fit: contain; /* Garde l'image entière sans la déformer */
    background: #fafafa;
}
