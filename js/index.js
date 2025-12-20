const showAnswer = document.querySelector('[data-js="show__answer"]');
const cardAnswer = document.querySelector('[data-js="card__answer"]');
const bookmark = document.querySelector('[data-js="bookmark__img"]');

showAnswer.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
});

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});
