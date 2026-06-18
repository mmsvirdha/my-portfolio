document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener("scroll", () => {

        /*    Created by Virdha Musawwir     GitHub: https://github.com/mmsvirdha    Year: 2025    */

        const arrow = document.querySelector(".return-to-top-arrow");
        if (window.scrollY > 900) {
            arrow.classList.remove("hidden");
            arrow.classList.add("show");
        } else {
            arrow.classList.remove("show");
            arrow.classList.add("hidden");
        }
    });
    /*    Created by Virdha Musawwir     GitHub: https://github.com/mmsvirdha    Year: 2025    */

});
