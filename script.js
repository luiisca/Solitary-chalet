"use strict";
const learnMoreBtn = document.querySelector(".product__learn-more");
//hamburger menu
const hamMenu = document.querySelector(".hamburger-menu");
const hamButton = document.querySelector(".left-menu__menu-button");
const hamBtnImg = document.querySelector(".left-menu__menu-img");
const searchMenu = document.querySelector(".search-menu");
const searchBtn = document.querySelector(".left-menu__search-button");
const searchBtnImg = document.querySelector(".left-menu__search-img");

//gallery
const storeName = document.querySelector(".renting");
const gallery = document.querySelector(".nav__gallery");
const hiddenGallery = document.querySelector(".gallery-hidden");

//change DOM
const invisibleTitle = document.querySelector(".product__invisible-text");
const title = document.querySelector("h1");
const housesContainer = document.querySelector(".centered-menu");
const chalet = document.querySelector(".solitary-chalet");
const cottage = document.querySelector(".corner-cottage");
const woodlands = document.querySelector(".woodlands");
const copse = document.querySelector(".little-copse");
const nest = document.querySelector(".cuckoos-nest");
const houseDescription = document.querySelector(".product__description");
const houseDetail1 = document.querySelector(".house__details--left").lastChild;
const houseDetail2 = document.querySelector(".house__details--right").lastChild;
const searchInput = document
  .querySelector(".input__container")
  .querySelector("input");
const playVideoBtn = document.querySelector(".play-video__icon");
const nav = document.querySelector("nav");
const cottageObject = {
  houseInvTitle: "Cottage",
  houseTitle: "Corner Cottage",
  backgroundImage: "url(images/rowan-heuvel-bjej8BY1JYQ-unsplash.jpg)",
  houseDesc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet2:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  principalClr: "var(--corner-cottage)",
};
const woodlandsObject = {
  houseInvTitle: "Woodlands",
  houseTitle: "Woodlands",
  backgroundImage: "url(images/scott-webb-1ddol8rgUH8-unsplash.jpg)",
  houseDesc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet2:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  principalClr: "var(--woodlands)",
};
const copseObject = {
  houseInvTitle: "Copse",
  houseTitle: "Little Copse",
  backgroundImage: "url(images/webaliser-_TPTXZd9mOo-unsplash.jpg)",
  houseDesc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet2:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  principalClr: "var(--little-copse)",
};
const nestObject = {
  houseInvTitle: "Nest",
  houseTitle: `The Cuckoo’s Nest`,
  backgroundImage: "url(images/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg)",
  houseDesc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet2:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  principalClr: "var(--cuckoos-nest)",
};
const chaletObject = {
  houseInvTitle: "Chalet",
  houseTitle: "Solitary Chalet",
  backgroundImage: "url(images/solitary-chalet-mobile-320min.jpg)",
  houseDesc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet2:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  principalClr: "var(--solitary-chalet)",
};

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
//change the hover color of nav elements
const changeColorHoverNav = (
  eventListener1,
  eventListener2,
  color1,
  color2
) => {
  nav.addEventListener(eventListener1, (e) => {
    //mouseover
    if (e.target !== nav) {
      e.target.style.color = color1; //var(--solitary-chalet)
    }
  });
  nav.addEventListener(eventListener2, (e) => {
    //mouseout
    if (e.target !== nav) {
      e.target.style.color = color2; //white
    }
  });
};
//change background color of video icon
const changeVideoLogoColor = (color1, color2) => {
  const changePlayColor = () => {
    playVideoBtn.style.backgroundColor = color1;
    playVideoBtn.style.transform = "initial";
  };
  playVideoBtn.addEventListener("mousedown", () => {
    playVideoBtn.style.backgroundColor = color2;
    playVideoBtn.style.transform = "scale(1.4)";
    setTimeout(changePlayColor, 300);
  });
};

const changeToCornerCottage = ({
  houseInvTitle,
  houseTitle,
  backgroundImage,
  houseDesc,
  houseDet1,
  houseDet2,
  principalClr,
}) => {
  //convert into a template function which receives an object
  invisibleTitle.textContent = houseInvTitle;
  title.textContent = houseTitle;
  document.body.style.backgroundImage = backgroundImage;
  houseDescription.textContent = houseDesc;
  houseDetail1.textContent = houseDet1;
  houseDetail2.textContent = houseDet2;
  //colors
  cottage.style.color = principalClr; //"var(--corner-cottage)";
  searchInput.style.backgroundColor = "rgb(74, 165, 226, 0.63)";

  // playVideoBtn.style.backgroundColor = "var(--corner-cottage)";
  changeColorHoverNav("mouseover", "mouseout", principalClr, "white");
  changeVideoLogoColor("rgb(52, 50, 48)", principalClr);
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

//open gallery
gallery.addEventListener("click", function () {
  hiddenGallery.classList.add("gallery-show");
  setTimeout(() => hiddenGallery.classList.add("gallery-show--transition"), 0);
});

//EVENT LISTENERS
learnMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  houseDetail1.scrollIntoView({ behavior: "smooth" });
});
//hamburger & search menu
hamButton.addEventListener("click", showHiddenMenus);
searchBtn.addEventListener("click", showHiddenMenus);

//open gallery
storeName.addEventListener("click", removeGallery);

//change DOM
housesContainer.addEventListener("click", (e) => {
  const objectsMap = new Map([
    [chalet, chaletObject],
    [woodlands, woodlandsObject],
    [copse, copseObject],
    [nest, nestObject],
    [cottage, cottageObject],
  ]);
  const targetObject = objectsMap.get(e.target);
  if (e.target !== housesContainer) {
    changeToCornerCottage(targetObject);
  }
});
