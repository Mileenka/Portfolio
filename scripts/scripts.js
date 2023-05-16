"use strict";

const hamburger = document.querySelector(".top .open-icon");

const close = document.querySelector("nav .close-icon");

const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.add("nav-display-block");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav-display-block");
});
