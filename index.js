document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]"); // Fixed the selector syntax
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    });
});

// Use getElementById to get a single element
const btn1 = document.getElementById('btn1');
const q1 = document.getElementById('q1');

btn1.addEventListener('click', function() {
    q1.checked = !q1.checked; // Fixed the typo in 'function' and used correct variable names
});

