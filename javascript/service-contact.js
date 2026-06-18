document.addEventListener('DOMContentLoaded', function() {
    // Select all modal open buttons
    const openButtons = document.querySelectorAll('.service-more-detail-btn');
    const closeButtons = document.querySelectorAll('.service-popup-btn-close');
    const modals = document.querySelectorAll('.service-modal-overlay');

    /*    Created by Virdha Musawwir     GitHub: https://github.com/mmsvirdha    Year: 2025    */

    // Open modal
    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            // Show the modal
            modal.style.display = 'flex';

            // Add modal-open class to body
            document.body.classList.add('modal-open');
        });
    });

    /*    Created by Virdha Musawwir     GitHub: https://github.com/mmsvirdha    Year: 2025    */


    // Close modal
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.service-modal-overlay');

            // Hide the modal
            modal.style.display = 'none';

            // Remove modal-open class from body if no other modals are visible
            const anyOpen = Array.from(modals).some(m => m.style.display === 'flex');
            if (!anyOpen) {
                document.body.classList.remove('modal-open');
            }
        });
    });

    /*    Created by Virdha Musawwir     GitHub: https://github.com/mmsvirdha    Year: 2025    */

    // Optional: close modal when clicking outside modal-content
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        });
    });
});
