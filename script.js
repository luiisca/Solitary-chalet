"use strict";
//hamburger menu
const hamMenu = document.querySelector(".hamburger-menu");
const hamButton = document.querySelector(".left-menu__menu-button");
const hamBtnImg = document.querySelector(".left-menu__menu-img");
const searchMenu = document.querySelector(".search-menu");
const searchBtn = document.querySelector(".left-menu__search-button");
const searchBtnImg = document.querySelector(".left-menu__search-img");
const body = document.querySelector("body");
const html = document.querySelector("html");

//gallery
const storeName = document.querySelector(".renting");
const gallery = document.querySelector(".nav__gallery");
const hiddenGallery = document.querySelector(".gallery-hidden");

//functions
const removeGallery = () => {
  if (hiddenGallery.classList.contains("gallery-show")) {
    hiddenGallery.classList.remove("gallery-show");
    hiddenGallery.classList.remove("gallery-show--transition");
  }
};
const removeMenus = (menu, className) => {
  if (menu.classList.contains(`${className}-menu--show`))
    menu.classList.remove(`${className}-menu--show`);
};
//hamburger & search menu
function showHiddenMenus(e) {
  const hamTarget = e.target === hamButton || e.target === hamBtnImg;
  const searchTarget = e.target === searchBtn || e.target === searchBtnImg;
  if (hamTarget) {
    hamMenu.classList.toggle("hamburger-menu--show");
    removeGallery();
    removeMenus(searchMenu, "search");
  } else if (searchTarget) {
    searchMenu.classList.toggle("search-menu--show");
    removeGallery();
    removeMenus(hamMenu, "hamburger");
  }
}
hamButton.addEventListener("click", showHiddenMenus);
searchBtn.addEventListener("click", showHiddenMenus);

//open gallery
gallery.addEventListener("click", function () {
  hiddenGallery.classList.add("gallery-show");
  setTimeout(() => hiddenGallery.classList.add("gallery-show--transition"), 0);
});

storeName.addEventListener("click", removeGallery);
