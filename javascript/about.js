document.addEventListener('DOMContentLoaded', function() {


    /*    Created by Virdha Musawwir     GitHub: https://github.com/mmsvirdha    Year: 2025    */

    // Basic counter animation
    const counters = document.querySelectorAll('.stat-box span');
    counters.forEach(counter => {
        let value = +counter.innerText.replace('+', '');
        let count = 0;
        const update = () => {
            count += 1;
            counter.innerText = count + "+";
            if (count < value) {
                requestAnimationFrame(update);
            }
        };
        update();
    });

    /*    Created by Virdha Musawwir     GitHub: https://github.com/mmsvirdha    Year: 2025    */


});