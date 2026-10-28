window.addEventListener("DOMContentLoaded", () => {
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
  // class OfferMenu {
  //   constructor(src, alt, title, desc, discount, sale, parentSelector) {
  //     this.src = src,
  //     this.alt = alt,
  //     this.title = title,
  //     this.desc = desc,
  //     this.discount = discount,
  //     this.sale = sale,
  //     this.parent = document.querySelector(parentSelector),
  //     this.formatPrice()
  //   }

  //   formatPrice() {
  //     this.discount = this.discount.toLocaleString("en-US", {style:"currency", currency:"USD"});
  //     this.sale = this.sale.toLocaleString("en-US", { style: "currency", currency: "USD" });
  //   }

  //   render() {
  //     const element = document.createElement("div")
  //     element.innerHTML = `
  //       <img src="${this.src}" alt="${this.alt}" />
  //       <div>
  //         <h3>${this.title}</h3>
  //         <p>${this.desc}</p>
  //         <p><del>${this.discount}</del> <span class="primary-text">${this.sale}</span></p>
  //       </div>
  //     `
  //     this.parent.append(element);
  //   }
  // }

  // const offers = [
  //   {
  //     src: "./img/offer1.png",
  //     alt: "Quattro Pasta",
  //     title: "Quattro Pasta",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam",
  //     discount: 55,
  //     sale: 25
  //   },
  //   {
  //     src: "./img/offer2.png",
  //     alt: "Vegertarian Pasta",
  //     title: "Vegertarian Pasta",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam",
  //     discount: 75,
  //     sale: 45
  //   },
  //   {
  //     src: "./img/offer3.png",
  //     alt: "Gluten-Free Pasta",
  //     title: "Gluten-Free Pasta",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam",
  //     discount: 35,
  //     sale: 15
  //   }
  // ]

  // offers.forEach(offer => {
  //   const {src, alt, title, desc, discount, sale} = offer;
  //   new OfferMenu(src, alt, title, desc, discount, sale, ".offers-items").render();
  // })

  // // dayTime class extends
  // class DayTime extends OfferMenu {
  //   constructor(src, alt, title, time, parentSelector) {
  //     super(src, alt, title, "", 0, 0, parentSelector)
  //     this.time = time
  //   }

  //   formatPrice() {}

  //   render() {
  //     const el = document.createElement("div")
  //     el.classList.add("daytime-item")
  //     el.innerHTML = `
  //         <img src="${this.src}" alt="${this.alt}" />
  //         <h3>${this.title}</h3>
  //         <p>${this.time}</p>
  //     `
  //     this.parent.append(el)
  //   }
  // }

  // const dayTimeItems = [
  //   {
  //     src: "./img/breckfastIcon.png",
  //     alt: "Breakfast",
  //     title: "Breakfast",
  //     time: "8:00 am to 10:00"
  //   },
  //   {
  //     src: "./img/lunchIcon.png",
  //     alt: "Lunch",
  //     title: "Lunch",
  //     time: "4:00 am to 7:00"
  //   },
  //   {
  //     src: "./img/dinnerIcon.png",
  //     alt: "Dinner",
  //     title: "Dinner",
  //     time: "9:00 am to 1:00"
  //   },
  //   {
  //     src: "./img/dessertIcon.png",
  //     alt: "Dessert",
  //     title: "Dessert",
  //     time: "All day"
  //   },
  // ]

  // dayTimeItems.forEach(dayTimeItem => {
  //   const {src, alt, title, time} = dayTimeItem;
  //   new DayTime(src, alt, title, time, ".daytime-items").render();
  // })

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

  const offers = [
    {
      src: "./img/offer1.png",
      alt: "Quattro Pasta",
      title: "Quattro Pasta",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam",
      discount: 55,
      sale: 25,
    },
    {
      src: "./img/offer2.png",
      alt: "Vegertarian Pasta",
      title: "Vegertarian Pasta",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam",
      discount: 75,
      sale: 45,
    },
    {
      src: "./img/offer3.png",
      alt: "Gluten-Free Pasta",
      title: "Gluten-Free Pasta",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam",
      discount: 35,
      sale: 15,
    },
  ];

  offers.forEach((offer) => {
    const { src, alt, title, desc, discount, sale } = offer;
    new OfferMenu(src, alt, title, desc, discount, sale, ".offers-items").render();
  });

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

  const dayTimeItems = [
    {
      src: "./img/breckfastIcon.png",
      alt: "Breakfast",
      title: "Breakfast",
      time: "8:00 am to 10:00",
    },
    {
      src: "./img/lunchIcon.png",
      alt: "Lunch",
      title: "Lunch",
      time: "4:00 am to 7:00",
    },
    {
      src: "./img/dinnerIcon.png",
      alt: "Dinner",
      title: "Dinner",
      time: "9:00 am to 1:00",
    },
    {
      src: "./img/dessertIcon.png",
      alt: "Dessert",
      title: "Dessert",
      time: "All day",
    },
  ];

  dayTimeItems.forEach((dayTimeItem) => {
    const { src, alt, title, time } = dayTimeItem;
    new DayTime(src, alt, title, time, ".daytime-items").render();
  });

  // form contact with telegram bot
  const form = document.querySelector("form");
  const telegramToken = "9001966850:AAE63hN66GCzD1hUdaNMuKd-2tS_lx1hnCA";
  const chatId = "1235847045";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: `Name: ${object.name}. Phone: ${object.phone}`,
      }),
    });
  });
});
