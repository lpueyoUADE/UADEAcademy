window.addEventListener("scroll", function () {
    const anclas = document.querySelectorAll(".ancla.scrolleable");

    for (const ancla of anclas) {
        if (window.scrollY > 300) {
            ancla.style.opacity = 1;

        } else {
            ancla.style.opacity = 0;
        }
    }
});