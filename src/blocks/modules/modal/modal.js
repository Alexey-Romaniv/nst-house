const openModalBtn = document.querySelectorAll("[data-modal-open]");

const  closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");


if (modal) {
    const toggleModal = () => {
        modal.classList.toggle("is-hidden");
    };
    openModalBtn.forEach((el) => {

        el.addEventListener("click", toggleModal);
    });
    closeModalBtn.addEventListener("click", toggleModal);

}

