document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const navOnglets = document.querySelector('.onglets');

    if (burgerBtn && navOnglets) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            navOnglets.classList.toggle('active');
        });
    }
});