const savedTheme = localStorage.getItem("theme") || "default";
document.documentElement.classList.add(`theme-${savedTheme}`);