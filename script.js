"use strict";

const html = document.querySelector("html");
const learnMoreBtn = document.querySelector(".product__learn-more");

//media queries
let mobLandscapeMediaQuery = window.matchMedia(
  "(min-width: 560px) and (orientation: landscape)"
);
let mobPortraitMediaQuery = window.matchMedia(
  "(min-width: 320px) and (orientation: portrait)"
);

//hamburger menus
const menus = document.querySelectorAll(".menu");
const justTextGallery = document.querySelector(".hamburger-menu");
const hamButton = document.querySelector(".left-menu__menu-button");
const hamBtnImg = document.querySelector(".left-menu__menu-img");
const searchMenu = document.querySelector(".search-menu");
const searchBtn = document.querySelector(".left-menu__search-button");
const searchBtnImg = document.querySelector(".left-menu__search-img");

//gallery
const storeName = document.querySelector(".renting");
const gallery = document.querySelector(".nav__gallery");
const galleryImgs = document.querySelectorAll(".gallery__houses");
const hiddenGallery = document.querySelector(".gallery-hidden");

//footer
const footer = document.querySelector("footer");
const leftLogo = document.querySelector(".media-icons--left-side");
const rightLogo = document.querySelector(".media-icons--right-side");
const navContainer = document.querySelector(".navContainer");

//change DOM
const invisibleTitle = document.querySelector(".product__invisible-text");
const title = document.querySelector("h1");
const housesContainer = document.querySelector(".centered-menu");
const galleryHousesCont = document.querySelector(".gallery-houses-container");
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
const housesOptions = document.querySelectorAll(".menu__houses");
const cottageObject = {
  elementClassName: ".corner-cottage",
  houseInvTitle: "Cottage",
  houseTitle: "Corner Cottage",
  backgroundImage: "url(images/cottage.jpg)",
  houseDesc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet2:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  principalClr: "var(--corner-cottage)",
  transpPrincipalClr: "rgba(74, 165, 226, 0.53)",
};
const woodlandsObject = {
  elementClassName: ".woodlands",
  houseInvTitle: "Woodlands",
  houseTitle: "Woodlands",
  backgroundImage: "url(images/woodlands.jpg)",
  houseDesc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet2:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  principalClr: "var(--woodlands)",
  transpPrincipalClr: "rgba(240, 57, 169, 0.53)",
};
const copseObject = {
  elementClassName: ".little-copse",
  houseInvTitle: "Copse",
  houseTitle: "Little Copse",
  backgroundImage: "url(images/copse.jpg)",
  houseDesc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet2:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  principalClr: "var(--little-copse)",
  transpPrincipalClr: "rgba(107, 241, 163, 0.53)",
};
const nestObject = {
  elementClassName: ".cuckoos-nest",
  houseInvTitle: "Nest",
  houseTitle: `Cuckoo’s Nest`,
  backgroundImage: "url(images/nest.jpg)",
  houseDesc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  houseDet2:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquam corrupti quae saepe ullam error vitae esse eum consequatur! Ad consequuntur provident sint voluptas magni sapiente, porro nostrum. Esse.",
  principalClr: "var(--cuckoos-nest)",
  transpPrincipalClr: "rgba(236, 92, 92, 0.53)",
};
const chaletObject = {
  elementClassName: ".solitary-chalet",
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
  transpPrincipalClr: "rgba(250, 179, 49, 0.53)",
};

//observer
const menuObs = function (entries) {
  //absolutely innecesary but good for practice
  //fc
  const [entry] = entries;
  const target = entry.target.closest(".menu");
  storeName.addEventListener("click", () => {
    target.classList.remove(target.classList[2]);
    html.classList.remove("overflow-hidden");
  });
};

const menusObserver = new IntersectionObserver(menuObs, {
  root: null,
  threshold: 0,
});

menusObserver.observe(housesContainer);
menusObserver.observe(searchInput);
menusObserver.observe(hiddenGallery);

//FUNCTIONS
const initial = () => {
  chalet.style.color = "var(--solitary-chalet)";
  invisibleTitle.style.color = "rgba(250, 179, 49, 0.53)";
};
initial();
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
const changeVideoLogoColor = (initialClr, changeClr) => {
  const changePlayColor = () => {
    //back to initial state
    playVideoBtn.style.backgroundColor = initialClr;
    playVideoBtn.style.transform = "initial";
  };
  playVideoBtn.addEventListener("mousedown", () => {
    playVideoBtn.style.backgroundColor = changeClr;
    playVideoBtn.style.transform = "scale(1.4)";
    setTimeout(changePlayColor, 300);
  });
};
const changeToHouse = ({
  elementClassName,
  houseInvTitle,
  houseTitle,
  backgroundImage,
  houseDesc,
  houseDet1,
  houseDet2,
  principalClr,
  transpPrincipalClr,
}) => {
  //convert into a template function which receives an object
  invisibleTitle.textContent = houseInvTitle;
  title.textContent = houseTitle;
  document.body.style.backgroundImage = backgroundImage;
  houseDescription.textContent = houseDesc;
  houseDetail1.textContent = houseDet1;
  houseDetail2.textContent = houseDet2;
  //colors
  housesOptions.forEach((house) => (house.style.color = "white"));
  document.querySelector(elementClassName).style.color = principalClr;
  searchInput.style.backgroundColor = transpPrincipalClr;
  invisibleTitle.style.color = transpPrincipalClr;
  changeColorHoverNav("mouseover", "mouseout", principalClr, "white");
  changeVideoLogoColor("rgb(52, 50, 48)", principalClr);
};

//hamburger & search menu
function showHiddenMenus(e) {
  const hamTarget = e.target === hamButton || e.target === hamBtnImg;
  const searchTarget = e.target === searchBtn || e.target === searchBtnImg;
  if (hamTarget) {
    hiddenGallery.classList.toggle("gallery-menu--show");
    galleryHousesCont.classList.toggle("gallery-houses-container--transition");
    removeMenus(justTextGallery, "hamburger");
    removeMenus(searchMenu, "search");
  } else if (searchTarget) {
    searchMenu.classList.toggle("search-menu--show");
    removeMenus(justTextGallery, "hamburger");
    removeMenus(hiddenGallery, "gallery");
    // hiddeMenus(searchMenu, "search", "input-container");
    // html.classList.toggle("overflow-hidden");
  }
}

const removeSearchFromOutsideContent = function (e) {
  if (
    !e.target.classList.contains("input-container__text") &&
    !e.target.classList.contains("input-container__input-box")
  ) {
    removeMenus(searchMenu, "search");
  }
};
const removeGalleryFromOutsideHouses = function (e) {
  //fc
  if (!e.target.classList.contains("gallery__houses")) {
    hiddenGallery.classList.remove("gallery-menu--show");
    hiddenGallery.classList.remove("gallery-show--transition");
  }
};

const removeGalleryFromInsideHouses = function (e) {
  if (e.target.classList.contains("gallery__houses")) {
    hiddenGallery.classList.remove("gallery-menu--show");
    hiddenGallery.classList.remove("gallery-show--transition");
  }
};
//hidde menus
const hiddeMenus = function (menu, menuClass, referClass) {
  menu.addEventListener("click", function (e) {
    if (!e.target.classList.contains(referClass)) {
      removeMenus(menu, menuClass);
      // html.classList.toggle("overflow-hidden");
    }
  });
};

const centerGalHouses = function () {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollabeHeight = scrollHeight - clientHeight;
  const calcScrollPercentage = (scrollTop / scrollabeHeight) * 40;
  if (calcScrollPercentage <= 10 && mobLandscapeMediaQuery.matches) {
    galleryHousesCont.style.top = `7%`;
  } else galleryHousesCont.style.top = `${calcScrollPercentage}%`;
};
//move gallery houses container programmatically
mobLandscapeMediaQuery.addEventListener("change", function (e) {
  console.log(e);
  if (mobLandscapeMediaQuery.matches) {
    galleryHousesCont.style.top = `7%`;
  } else if (mobPortraitMediaQuery.matches) {
    galleryHousesCont.style.top = `0%`;
  }
  // window.addEventListener("scroll", centerGalHouses);
});

//EVENT LISTENERS
//open gallery
gallery.addEventListener("click", function () {
  justTextGallery.classList.add("hamburger-menu--show");
});

learnMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  houseDetail1.scrollIntoView({ behavior: "smooth" });
});
//hamburger & search menu
hamButton.addEventListener("click", showHiddenMenus);
searchBtn.addEventListener("click", showHiddenMenus);

//gallery
hiddenGallery.addEventListener("click", removeGalleryFromOutsideHouses);
searchMenu.addEventListener("click", removeSearchFromOutsideContent);
//change DOM
const objectsMap = new Map([
  [`chalet`, chaletObject],
  [`woodlands`, woodlandsObject],
  [`copse`, copseObject],
  [`nest`, nestObject],
  [`cottage`, cottageObject],
]);
housesContainer.addEventListener("click", (e) => {
  const targetObject = objectsMap.get(e.target.dataset.house);
  if (e.target !== housesContainer) {
    changeToHouse(targetObject);
    removeMenus(justTextGallery, "hamburger");
    // html.classList.toggle("overflow-hidden");
  }
});

hiddenGallery.addEventListener("click", function (e) {
  const targetObject = objectsMap.get(e.target.dataset.house);
  if (e.target.classList.contains("gallery__houses")) {
    changeToHouse(targetObject);
    removeGalleryFromInsideHouses(e);
  }
});

mobLandscapeMediaQuery.addEventListener("change", function (e) {
  if (e.matches) {
    const logosContainer = document.createElement("div");
    logosContainer.classList.add("logosContainer");
    logosContainer.append(leftLogo, rightLogo);
    footer.append(logosContainer);
  } else {
    navContainer.append(leftLogo, rightLogo);
  }
});

nav.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target.classList.contains("nav__el"));
  if (e.target.classList.contains("nav__el")) {
    storeName.scrollIntoView({ behavior: "smooth" });
  }
});
