const hiremeButton = document.getElementsByClassName("Hire-button");
const popup = document.getElementById("popup-wrapper");

const JoinPoolButton = document.getElementsByClassName("Join-button");
const popup2 = document.getElementById("popup2-wrapper");
const navContainer = document.getElementById("link-list");
const links = navContainer.getElementsByClassName("header-text");
const navlinks = document.querySelectorAll(".header-text");
const section = document.querySelectorAll("section");

// ACTIVE LINKS
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

// FOR THE SCROLL BEHAVIOUR
window.addEventListener("scroll", function () {
  let index = section.length;
  while (--index && window.scrollY + 50 < section[index].offsetTop) {}
  navlinks.forEach((link) => link.classList.remove("active"));
  navlinks[index].classList.add("active");
});

// FIRST POPUP
for (let i = 0; i < hiremeButton.length; i++) {
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
for (let j = 0; j < JoinPoolButton.length; j++) {
  JoinPoolButton[j].addEventListener("click", () => {
    popup2.style.display = "block";
  });
  popup2.addEventListener("click", () => {
    popup2.style.display === "block"
      ? (popup2.style.display = "none")
      : console.log("Hello, false");
  });
}
