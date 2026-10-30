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

export default classCard;
