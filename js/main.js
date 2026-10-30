"use strict";

import tabs from "./modules/tabs.js";
import loader from "./modules/loader.js";
import burgerMenu from "./modules/burgerMenu.js";
import timer from "./modules/timer.js";
import modal from "./modules/modal.js";
import classCard from "./modules/class.js";
import formWrapper from "./modules/form.js";
import slider from "./modules/slider.js";

window.addEventListener("DOMContentLoaded", () => {
  tabs(".tabheader__item", ".tab_content", ".tabheader__items");
  loader(".loader-wrapper");
  burgerMenu("openMenu", "closeMenu", "navMenu", "header-wrapper");
  timer("2027-01-07", ".timer");
  modal();
  classCard();
  formWrapper("form");
  slider();
});
