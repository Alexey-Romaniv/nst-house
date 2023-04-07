import toastr from "toastr";

const form = document.querySelector(".form");
toastr.options.positionClass = "toast-top-right";
toastr.options.progressBar = true;
form.addEventListener("submit", async (e) => {
    const modal = document.querySelector("[data-modal]");
    e.preventDefault(); // Отменяем стандартное поведение отправки формы

    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        form.reset(); // Очищаем значения полей формы
        modal.classList.toggle(".is-hidden");
        toastr.success("Повідомлення успішно надіслано!");
    } else {
        toastr.error("Повідомлення не вдалося надіслати!");
    }
});