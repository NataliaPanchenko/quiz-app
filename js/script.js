(() => {
  document.querySelectorAll(".card").forEach((card) => {
    card.querySelector('[data-js="show__answer"]').onclick = () => {
      card
        .querySelector('[data-js="card__answer"]')
        .classList.toggle("card__answer--active");
    };
  });
})();
