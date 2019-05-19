window.addEventListener("DOMContentLoaded", e => {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.clientHeight;
  const content = document.querySelector(".content");

  const newHeight = window.innerHeight - navbarHeight;
  content.style.height = `${newHeight}px`;
});

window.addEventListener("resize", e => {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.clientHeight;
  const content = document.querySelector(".content");

  const newHeight = window.innerHeight - navbarHeight;
  content.style.height = `${newHeight}px`;
});
