const play = document.querySelector(".play");
const death = document.querySelector(".skull");
const heart = document.querySelector(".heart");
const toggleOn = () => {
    heart.classList.remove("dead")
    heart.classList.add("beatElement")
}
const toggleOff = () => {
    heart.classList.remove("beatElement")
    heart.classList.add("dead")
}
play.addEventListener("click", toggleOn);
death.addEventListener("click", toggleOff)