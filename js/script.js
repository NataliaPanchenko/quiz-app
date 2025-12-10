document.querySelectorAll(".card").forEach((card) => {
  card.querySelector(".show__answer").onclick = () => {
    card.querySelector(".card__answer").classList.toggle("active");
  };
});
