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

export default tabs;
