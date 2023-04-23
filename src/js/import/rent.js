const allBtn = document.getElementById("all-btn");
const activityBtn = document.getElementById("activity-btn");
const serviceBtn = document.getElementById("service-btn");
const rentBtn = document.getElementById("rent-btn");
const list = document.getElementById("list");
if (list){
    const filterList = (category) => {
        list.querySelectorAll(".rent__item").forEach((li) => {
            if (category === "all" || li.dataset.category === category) {
                li.classList.remove("hidden");
            } else {
                li.classList.add("hidden");
            }
        });
    };

    allBtn.addEventListener("click", () => {
        allBtn.classList.add("active");
        rentBtn.classList.remove("active");
        activityBtn.classList.remove("active");
        serviceBtn.classList.remove("active");
        filterList("all");
    });

    activityBtn.addEventListener("click", () => {
        allBtn.classList.remove("active");
        rentBtn.classList.remove("active");
        serviceBtn.classList.remove("active");
        activityBtn.classList.add("active");
        filterList("activity");
    });

    serviceBtn.addEventListener("click", () => {
        allBtn.classList.remove("active");
        rentBtn.classList.remove("active");
        activityBtn.classList.remove("active");
        serviceBtn.classList.add("active");
        filterList("service");
    });
    rentBtn.addEventListener("click", () => {
        allBtn.classList.remove("active");
        activityBtn.classList.remove("active");
        serviceBtn.classList.remove("active");
        rentBtn.classList.add("active");
        filterList("rent");
    });


    filterList("all");
}