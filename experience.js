const button = document.getElementsByClassName("Hire-button");
const popup = document.getElementsByClassName("popup-wrapper");

let i;
for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    popup.style.display = "flex";
  });

  popup.addEventListener("click", () => {
    popup.style.display = "none";
  });
}
