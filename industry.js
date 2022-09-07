const click = document.querySelectorAll(".faq-row");
const displayText = document.querySelectorAll(".faq-answer");

click[i].addEventListener("click", (e) => {
  displayText.style.visibility = "visible";
});
