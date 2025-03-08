
    document.addEventListener('DOMContentLoaded', () => {
        const selectElement = document.getElementById('payment-method');

        selectElement.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            switchPage(selectedValue);
        });
    });

    function switchPage(page_id) {
        const current_page = document.querySelector('.pages .page.is-active');
        if (current_page) {
            current_page.classList.remove('is-active');
        }

        const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
        if (next_page) {
            next_page.classList.add('is-active');
        }
    }

