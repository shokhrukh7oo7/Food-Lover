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
export default burgerMenu;
