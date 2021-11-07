const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const mobileMenu = document.querySelector("#mobileMenu");
const body = document.body;

mobileMenuBtn.addEventListener("click", (e) => {
  if (!mobileMenu.classList.contains("open")) {
    body.classList.add("no-scroll");
    mobileMenuBtn.classList.add("open");
    mobileMenu.classList.add("open");
  } else {
    body.classList.remove("no-scroll");
    mobileMenuBtn.classList.remove("open");
    mobileMenu.classList.remove("open");
  }
});
