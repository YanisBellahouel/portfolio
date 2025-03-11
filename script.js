document.addEventListener("DOMContentLoaded", () => {
	const carrousel = document.getElementById("carrousel");
	const projects = carrousel.getElementsByTagName("li");
	let currentIndex = 0;

	document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
	document.querySelector(".next").addEventListener("click", () => moveSlide(1));

	function moveSlide(direction) {
		projects[currentIndex].classList.remove("active");
		currentIndex = (currentIndex + direction + projects.length) % projects.length;
		projects[currentIndex].classList.add("active");
	}

	projects[currentIndex].classList.add("active");
});
