document.addEventListener("DOMContentLoaded", () => {
    const carrousel = document.getElementById("carrousel");
    const projects = carrousel.getElementsByTagName("li");
    let currentIndex = 0;

    // Création des boutons
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "⬅️";
    prevBtn.classList.add("carrousel-btn", "prev");
    prevBtn.addEventListener("click", () => moveSlide(-1));

    const nextBtn = document.createElement("button");
    nextBtn.innerText = "➡️";
    nextBtn.classList.add("carrousel-btn", "next");
    nextBtn.addEventListener("click", () => moveSlide(1));

    carrousel.parentNode.insertBefore(prevBtn, carrousel);
    carrousel.parentNode.appendChild(nextBtn);

    function moveSlide(direction) {
        projects[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + direction + projects.length) % projects.length;
        projects[currentIndex].classList.add("active");
    }

    // Initialisation
    projects[currentIndex].classList.add("active");
});
