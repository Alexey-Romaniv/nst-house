import toastr from "toastr";
import axios from "axios";

const form = document.querySelector(".form");
toastr.options.positionClass = "toast-top-right";
toastr.options.progressBar = true;

const TG_TOKEN = "5871941331:AAFdm_WlnfgXaRibgrbq8mE4olz2fTXRGaA";
const CHAT_ID ="-1001973921078";
form.addEventListener("submit", async function  (e) {
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
    //     send to telegram


    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const email = form.elements.email.value;
    const message = form.elements.comment.value;

    const url = `https://api.telegram.org/bot${TG_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=Имя: ${name}%0AТелефон: ${phone}%0AПочта: ${email}%0AСообщение: ${message}`;
    await axios.post(url);

    if (response.ok) {
        form.reset(); // Очищаем значения полей формы
        modal.classList.toggle(".is-hidden");
        toastr.success("Повідомлення успішно надіслано!");
    } else {
        toastr.error("Повідомлення не вдалося надіслати!");
    }


});