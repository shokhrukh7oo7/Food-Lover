"use strict";

window.addEventListener("DOMContentLoaded", () => {
  // BURGER MENU
  const openMenuBtn = document.getElementById("openMenu");
  const closeMenuBtn = document.getElementById("closeMenu");
  const navMenu = document.getElementById("navMenu");
  const headerWrapper = document.querySelector("header");

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

  // TABS
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabContent = document.querySelectorAll(".tab_content");
  const tabsParent = document.querySelector(".tabheader__items");

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

  // Loader
  const loaderWrapper = document.querySelector(".loader-wrapper");

  setTimeout(() => {
    loaderWrapper.style.display = "none";
  }, 1500);

  // Timer
  const deadline = "2027-01-07";

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
  setClock(".timer", deadline);

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

  // class
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

  // form contact with telegram bot
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    loaderWrapper.style.display = "flex";

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
          throw new Error("Network error during sending");
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
        loaderWrapper.style.display = "none";
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
});
