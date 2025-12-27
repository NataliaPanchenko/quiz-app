const darkMode = document.querySelector('[data-js="dark-mode"]');
const body = document.querySelector("body");
const settingsIcon = document.querySelector(".profile__settings--icon");
const header = document.querySelector(".quiz__header");
const headerText = document.querySelector(".quiz__header--text");
const headerBlock = document.querySelector(".quiz__header--block");
const scoreAnswers = document.querySelector(".profil__score--answers");
const scoreBookmarks = document.querySelector(".profil__score--bookmarks");

darkMode.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  headerText.classList.toggle("dark-mode");
  headerBlock.classList.toggle("dark-mode");
  scoreAnswers.style.setProperty("border-color", "var(--card-color)");
  scoreBookmarks.style.setProperty("border-color", "var(--card-color)");
  settingsIcon.src = body.classList.contains("dark-mode")
    ? "./assets/setting-light.png"
    : "./assets/setting.png";
});
