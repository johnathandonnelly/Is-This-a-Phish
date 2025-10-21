// Loading theme
const savedTheme = localStorage.getItem("theme") || "default";
document.documentElement.classList.add(`theme-${savedTheme}`);

// ham burger
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('header ul');

    if (!toggle || !navList) {
        // If either is missing, stop here to prevent errors
        return;
    }

    toggle.addEventListener('click', () => {
        navList.classList.toggle('open');
    });
});
