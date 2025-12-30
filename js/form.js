const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="input__question"]');
const answerInput = document.querySelector('[data-js="input__answer"]');
const tagInput = document.querySelector('[data-js="input__tag"]');
const cardsContainer = document.querySelector('[data-js="cards"]');
let questionNumber = 11;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = questionInput.value;
  const answer = answerInput.value;
  const tag = tagInput.value;
  console.log(question, answer, tag);
  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = `
            <span class="bookmark__icon">
                <img src="assets/bookmark-white.png" alt="Bookmark" class="bookmark__img" data-js="bookmark__img" />
            </span>
            <h3 class="card__question">QUESTION ${questionNumber}: <br />${question}</h3>
            <p class="card__answer" data-js="card__answer">${answer}</p>
            <button class="button show__answer" data-js="show__answer">Show Answer</button>
            <ul class="card__tags">
                <li class="card__tag">${tag}</li>
            </ul>
    `;
  cardsContainer.append(card);
  questionNumber++;

  const bookmark = card.querySelector(".bookmark__img");
  const showAnswer = card.querySelector(".show__answer");
  const cardAnswer = card.querySelector(".card__answer");

  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark--active");
  });

  showAnswer.addEventListener("click", () => {
    cardAnswer.classList.toggle("card__answer--active");
  });
});
