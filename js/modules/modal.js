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

export default modal;
