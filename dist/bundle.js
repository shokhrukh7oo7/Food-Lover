/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/burgerMenu.js"
/*!**********************************!*\
  !*** ./js/modules/burgerMenu.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// BURGER MENU
function burgerMenu(openMenuBtnSelector, closeMenuBtnSelector, navMenuSelector, headerWrapperSelector) {
  const openMenuBtn = document.getElementById(openMenuBtnSelector);
  const closeMenuBtn = document.getElementById(closeMenuBtnSelector);
  const navMenu = document.getElementById(navMenuSelector);
  const headerWrapper = document.querySelector(headerWrapperSelector);

  openMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.add("active");
  });

  closeMenuBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

  const navLinks = document.querySelectorAll("ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
  document.addEventListener("click", (e) => {
    if (navMenu.classList.contains("active") && !navMenu.contains(e.target) && !openMenuBtn.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);


/***/ },

/***/ "./js/modules/class.js"
/*!*****************************!*\
  !*** ./js/modules/class.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// class
function classCard() {
  // Component
  class Component {
    constructor(parentSelector) {
      this.parent = document.querySelector(parentSelector);
    }
    render() {}
  }

  // Offers
  class OfferMenu extends Component {
    constructor(src, alt, title, desc, discount, sale, parentSelector) {
      super(parentSelector);
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.desc = desc;
      this.discount = discount.toLocaleString("en-US", { style: "currency", currency: "USD" });
      this.sale = sale.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }

    render() {
      const element = document.createElement("div");
      element.innerHTML = `
        <img src="${this.src}" alt="${this.alt}" />
        <div>
          <h3>${this.title}</h3>
          <p>${this.desc}</p>
          <p><del>${this.discount}</del> <span class="primary-text">${this.sale}</span></p>
        </div>
      `;
      this.parent.append(element);
    }
  }

  fetch("./data/db.json")
    .then((res) => res.json())
    .then((data) => {
      data.offer.forEach((offer) => {
        const { src, alt, title, desc, discount, sale } = offer;
        new OfferMenu(src, alt, title, desc, discount, sale, ".offers-items").render();
      });
    })
    .catch((error) => console.error("Ошибка загрузки:", error));

  // fetch("http://localhost:3000/offer", {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     data.forEach((offer) => {
  //       const { src, alt, title, desc, discount, sale } = offer;
  //       new OfferMenu(src, alt, title, desc, discount, sale, ".offers-items").render();
  //     });
  //   });

  // special menu
  class SpecialMenu extends Component {
    constructor(src, alt, title, desc, price, parentSelector) {
      super(parentSelector);
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.desc = desc;
      this.price = price.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }
    render() {
      const menuEl = document.createElement("div");
      menuEl.classList.add("menu-item");
      menuEl.innerHTML = `
        <img src="${this.src}" alt="${this.alt}" />
        <div>
          <h3>${this.title} <span class="primary-text">${this.price}</span></h3>
          <p>${this.desc}</p>
        </div>
      `;
      this.parent.append(menuEl);
    }
  }

  fetch("./data/db.json")
    .then((res) => res.json())
    .then((data) => {
      data.specialMenu.forEach((specMenu) => {
        const { src, alt, title, desc, price } = specMenu;
        new SpecialMenu(src, alt, title, desc, price, ".menu-items").render();
      });
    })
    .catch((error) => console.error("Ошибка загрузки специального меню:", error));

  // fetch("http://localhost:3000/specialMenu", {
  //   method: "GET",
  //   headers: { "Content-Type": "application.json" },
  // })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     data.forEach((specMenu) => {
  //       const { src, alt, title, desc, price } = specMenu;
  //       new SpecialMenu(src, alt, title, desc, price, ".menu-items").render();
  //     });
  //   });

  // daytime class
  class DayTime extends Component {
    constructor(src, alt, title, time, parentSelector) {
      super(parentSelector);
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.time = time;
    }

    render() {
      const el = document.createElement("div");
      el.classList.add("daytime-item");
      el.innerHTML = `
        <img src="${this.src}" alt="${this.alt}" />
        <h3>${this.title}</h3>
        <p>${this.time}</p>
      `;
      this.parent.append(el);
    }
  }

  fetch("./data/db.json")
    .then((res) => res.json())
    .then((data) => {
      data.dayTimeItems.forEach((dayTimeItem) => {
        const { src, alt, title, time } = dayTimeItem;
        new DayTime(src, alt, title, time, ".daytime-items").render();
      });
    });

  // fetch("http://localhost:3000/dayTimeItems", {
  //   method: "GET",
  //   headers: { "Content-Type": "application.json" },
  // })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     data.forEach((dayTimeItem) => {
  //       const { src, alt, title, time } = dayTimeItem;
  //       new DayTime(src, alt, title, time, ".daytime-items").render();
  //     });
  //   });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classCard);


/***/ },

/***/ "./js/modules/form.js"
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function formWrapper(formSelector) {
  // form contact with telegram bot

  const form = document.querySelector(formSelector);
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // loaderWrapper.style.display = "flex";

    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    fetch(`https://api.telegram.org/bot${CONFIG.TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CONFIG.CHAT_ID,
        text: `Name: ${object.name}. Phone: ${object.phone}`,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ошибка сети при отправке");
        }
        return res.json();
      })
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Успешно!",
          text: "Ваше сообщение отправлено в телеграм!",
          confirmButtonText: "Ок",
          position: "top-end",
        });
        // loaderWrapper.style.display = "none";
        form.reset();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Ошибка!",
          text: "Что-то пошло не так. Попробуйте еще раз.",
          confirmButtonText: "Закрыть",
          showConfirmButton: false,
        });
        console.erro(err);
      });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formWrapper);


/***/ },

/***/ "./js/modules/loader.js"
/*!******************************!*\
  !*** ./js/modules/loader.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Loader
function loader(loaderSelector) {
  const loaderWrapper = document.querySelector(loaderSelector);

  setTimeout(() => {
    loaderWrapper.style.display = "none";
  }, 1500);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);


/***/ },

/***/ "./js/modules/modal.js"
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// modal
function modal() {
  // Modal
  const openModalBtn = document.querySelectorAll("[data-modal]");
  const closeModalBtn = document.querySelector(".modal__close");
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal__content");

  function showModal() {
    modalContent.classList.add("modal_fade");
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  openModalBtn.forEach((btn) => {
    btn.addEventListener("click", showModal);
  });

  closeModalBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(showModal, 5000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ },

/***/ "./js/modules/slider.js"
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ },

/***/ "./js/modules/tabs.js"
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// TABS
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector) {
  const tabs = document.querySelectorAll(tabsSelector);
  const tabContent = document.querySelectorAll(tabsContentSelector);
  const tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabContent.forEach((content) => {
      content.style.display = "none";
    });

    tabs.forEach((tab) => {
      tab.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(index = 0) {
    tabContent[index].style.display = "flex";
    tabs[index].classList.add("tabheader__item_active");
  }

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((tab, index) => {
        if (target === tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });

  hideTabContent();
  showTabContent();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ },

/***/ "./js/modules/timer.js"
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Timer
function timer(deadline, selector) {

  function getTimeRemaining(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return {
      totalTime: time,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    updateClock();
    const timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      const time = getTimeRemaining(endtime);

      days.textContent = time.days;
      hours.textContent = time.hours;
      minutes.textContent = time.minutes;
      seconds.textContent = time.seconds;

      if (time.totalTime <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(selector, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs.js */ "./js/modules/tabs.js");
/* harmony import */ var _modules_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loader.js */ "./js/modules/loader.js");
/* harmony import */ var _modules_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burgerMenu.js */ "./js/modules/burgerMenu.js");
/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer.js */ "./js/modules/timer.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ "./js/modules/modal.js");
/* harmony import */ var _modules_class_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/class.js */ "./js/modules/class.js");
/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/form.js */ "./js/modules/form.js");
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider.js */ "./js/modules/slider.js");











window.addEventListener("DOMContentLoaded", () => {
  (0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(".tabheader__item", ".tab_content", ".tabheader__items");
  (0,_modules_loader_js__WEBPACK_IMPORTED_MODULE_1__["default"])(".loader-wrapper");
  (0,_modules_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__["default"])("openMenu", "closeMenu", "navMenu", "header-wrapper");
  (0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_3__["default"])("2027-01-07", ".timer");
  (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_class_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_form_js__WEBPACK_IMPORTED_MODULE_6__["default"])("form");
  (0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map