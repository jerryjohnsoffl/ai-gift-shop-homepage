(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();

setTheme(getStoredTheme());

// Add event listener for theme switches
document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
    element.addEventListener('click', function(event) {
        const theme = event.target.getAttribute('data-bs-theme-value');
        setTheme(theme);
    });
});

// Function to get stored theme
function getStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'auto';
}

// Function to set theme
function setTheme(theme) {
    const body = document.body;
    body.classList.remove('theme-light', 'theme-dark');
    const text = document.querySelector(".lead");
    const label = document.querySelectorAll(".form-label");
    const container = document.querySelector('.container-fluid');
    const priceInfo = document.querySelectorAll('.product-info p');
    const bullet = document.querySelectorAll('.bullets span');

    if (theme === 'auto') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            text.style.color = "var(--text-color-dark)";
            container.style.backgroundColor = "var(--bg-color-dark)";
            label.forEach((el) => el.style.color = "var(--text-color-dark)");
            priceInfo.forEach((el) => el.style.color = "var(--text-color-dark)");
            bullet.forEach((bull) => bull.style.backgroundColor = "var(--text-color-dark)");
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
    } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
    }
    if (theme === 'dark') {
        text.style.color = "var(--text-color-dark)";
        container.style.backgroundColor = "var(--bg-color-dark)";
        label.forEach((el) => el.style.color = "var(--text-color-dark)");
        priceInfo.forEach((el) => el.style.color = "var(--text-color-dark)");
        bullet.forEach((bull) => bull.style.backgroundColor = "var(--text-color-dark)");
    }
    if (theme === 'light') {
        text.style.color = "var(--text-color-light)";
        container.style.backgroundColor = "#fff";
        label.forEach((el) => el.style.color = "var(--text-color-light)");
        priceInfo.forEach((el) => el.style.color = "var(--text-color-light)");
        bullet.forEach((bull) => bull.style.backgroundColor = "var(--text-color-light)");
    }

    localStorage.setItem('theme', theme);
}

/* Bullets */

const bullet = document.querySelectorAll('.bullets span');

function moveSlider() {
    let index = this.dataset.value;
    const images = document.querySelectorAll('.image');
    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img) => img.classList.remove('show'));
    currentImage.classList.add('show');

    bullet.forEach((bull) => bull.classList.remove('active'));
    this.classList.add('active');
}

bullet.forEach((bullet)=> {
    bullet.addEventListener('click', moveSlider)
})
