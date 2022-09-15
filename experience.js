const hiremeButton = document.getElementsByClassName("Hire-button");
const popup = document.getElementById("popup-wrapper");

const JoinPoolButton = document.getElementsByClassName("Join-button");
const popup2 = document.getElementById("popup2-wrapper");

const links = document.getElementsByClassName("header-links");

// ACTIVE LINKS
let l;
for (l = 0; l < links.length; l++) {
  links[l].addEventListener("click", () => {
    console.log("Hello, I'm active");
    // links.classList.toggle("is-active");
  });
}

// FIRST POPUP
let i;
for (i = 0; i < hiremeButton.length; i++) {
  hiremeButton[i].addEventListener("click", () => {
    popup.style.display = "block";
  });
  popup.addEventListener("click", () => {
    popup.style.display === "block"
      ? (popup.style.display = "none")
      : (popup.style.display = "block");
  });
}

// SECOND POPUP
let j;
for (j = 0; j < JoinPoolButton.length; j++) {
  JoinPoolButton[j].addEventListener("click", () => {
    popup2.style.display = "block";
  });
  popup2.addEventListener("click", () => {
    popup2.style.display === "block"
      ? (popup2.style.display = "none")
      : console.log("Hello, false");
  });
}
