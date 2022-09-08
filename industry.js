const faq = document.getElementsByClassName("faq-row");
// const displayText = document.querySelectorAll(".faq-answer");
let i;
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    console.log(panel.style.maxHeight, panel.scrollHeight);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      console.log(panel.style.maxHeight);
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// faq.addEventListener("click", (e) => {
//   displayText.style.display = "block";
// });
