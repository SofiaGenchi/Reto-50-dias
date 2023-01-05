const section = document.querySelector("section");
const icons = document.querySelector(".icons");

icons.onclick = () => {
    section.classList.toggle("dark");
}