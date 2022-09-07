const click = document.getElementsByClassName("faq-row");
const displayText = document.getElementsByClassName("faq-answer");

click.addEventListener("click", (e) => {
  displayText.style.visibility = "visible";
});
