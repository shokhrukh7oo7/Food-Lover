function formWrapper(formSelector, closeModalCallback) {
  // form contact with telegram bot
  const form = document.querySelector(formSelector);
  if (!form) return;

  
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

        if (typeof closeModalCallback === "function") {
          closeModalCallback();
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Ошибка!",
          text: "Что-то пошло не так. Попробуйте еще раз.",
          confirmButtonText: "Закрыть",
          showConfirmButton: false,
        });
        console.error(err);
      });
  });
}

export default formWrapper;
