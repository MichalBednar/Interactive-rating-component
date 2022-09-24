const mainContainer = document.querySelector(".rating-page");
const thanksContainer = document.querySelector(".thank-you-page");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
});

const rates1 = document.querySelector(".btn1");
rates1.addEventListener("click", () => {
    rating.innerHTML = rates1.innerHTML;
});

const rates2 = document.querySelector(".btn2");
rates2.addEventListener("click", () => {
    rating.innerHTML = rates2.innerHTML;
});

const rates3 = document.querySelector(".btn3");
rates3.addEventListener("click", () => {
    rating.innerHTML = rates3.innerHTML;
});

const rates4 = document.querySelector(".btn4");
rates4.addEventListener("click", () => {
    rating.innerHTML = rates4.innerHTML;
});

const rates5 = document.querySelector(".btn5");
rates5.addEventListener("click", () => {
    rating.innerHTML = rates5.innerHTML;
});