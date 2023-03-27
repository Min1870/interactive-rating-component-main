const card = document.querySelector(".card");
const thankyou = document.querySelector(".thank__you--card");
const submit = document.getElementById("card_submit");
const rateAgain = document.getElementById("rate_again");

const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submit.addEventListener("click", () => {
    thankyou.classList.remove("hidden");
    card.style.display = "none";
    
})

rateAgain.addEventListener("click", () => {
    thankyou.classList.add("hidden");
    card.style.display = "block";
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        submit.classList.remove("disable");
        submit.removeAttribute("disabled")
        rating.innerHTML = rate.innerHTML;
    })
})