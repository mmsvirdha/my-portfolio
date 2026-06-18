document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a.transition-btn');
    const overlay = document.querySelector('.overlay-transition');

    /*    Created by Virdha Musawwir     GitHub: https://github.com/mmsvirdha    Year: 2025    */

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            overlay.classList.add('show');

            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 900); // Match CSS transition time
        });
    });

    /*    Created by Virdha Musawwir     GitHub: https://github.com/mmsvirdha    Year: 2025    */

});
