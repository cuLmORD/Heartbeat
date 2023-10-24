const play = document.querySelector(".play");
const death = document.querySelector(".skull");
const heart = document.querySelector(".heart");
const toggleOn = () => {
    heart.classList.remove("dead")
    heart.classList.add("beatElement", "alive")
}
const toggleOff = () => {
    heart.classList.remove("beatElement", "alive")
    heart.classList.add("dead")
}
play.addEventListener("click", toggleOn);
death.addEventListener("click", toggleOff);
heart.addEventListener("click", () => {
    heart.classList.toggle("rotate")
});