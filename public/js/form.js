const form = document.querySelector(".appointment-form");
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const modalClose = document.getElementById("modal-close");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form).entries());

  try {
    const res = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const result = await res.json();

    // Показать модальное окно с сообщением
    modalMessage.textContent = result.message;
    modal.style.display = "block";
    form.reset();
  } catch (err) {
    modalMessage.textContent = "Помилка при відправленні форми";
    modal.style.display = "block";
    console.error(err);
  }
});

// Закрытие модального окна
modalClose.onclick = () => {
  modal.style.display = "none";
};

// Закрытие при клике на backdrop
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
