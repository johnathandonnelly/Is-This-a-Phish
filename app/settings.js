// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// See LICENSE-CODE in the project root for details.
document.addEventListener("DOMContentLoaded", () => {
    const clearBtn = document.getElementById("clear-storage-btn");
    const exportBtn = document.getElementById("export-progress-btn");
    const importBtn = document.getElementById("import-progress-btn");
    const importInput = document.getElementById("import-file-input");

    clearBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all saved progress?\nThis will delete all of your unexported profile information.")) {
            localStorage.clear();
            alert("All saved progress has been cleared.");
            location.reload();
        }
    });

    exportBtn.addEventListener("click", () => {
        const completed = localStorage.getItem("completedLessons") || "[]";
        const username = localStorage.getItem("username") || "User";
        const theme = localStorage.getItem("theme") || "default";
        const readings = localStorage.getItem("completedReadings") || "[]";
        const profileData = {
            username,
            theme,
            completedLessons: JSON.parse(completed),
            completedReadings: JSON.parse(readings)
        }
        const blob = new Blob([JSON.stringify(profileData)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "IsThisaPhish-profile.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    importBtn.addEventListener("click", () => importInput.click());

    importInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const imported = JSON.parse(evt.target.result);
                if (imported && typeof imported === "object" && imported.completedLessons) {
                    localStorage.setItem("completedLessons", JSON.stringify(imported.completedLessons));
                    localStorage.setItem("username", imported.username || "User");
                    localStorage.setItem("theme", imported.theme || "default");
                    localStorage.setItem("completedReadings", JSON.stringify(imported.completedReadings));
                    alert("Profile imported!");
                    location.reload();
                }
                // old format, just array
                else if (Array.isArray(imported)) {
                    localStorage.setItem("completedLessons", JSON.stringify(imported));
                    alert("Lesson progress imported!");
                    location.reload()
                }
                else {
                    throw new Error("Invalid format.")
                }
            } catch {
                alert("Failed to import profile. Make sure it's a valid JSON file.");
            }
        };
        reader.readAsText(file);
    });

    const themeButtons = document.querySelectorAll(".theme-buttons button");
    const savedTheme = localStorage.getItem("theme") || "default";
    setTheme(savedTheme)

    themeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const theme = button.getAttribute("data-theme");
            setTheme(theme);
            localStorage.setItem("theme", theme);
        });
    });

    function setTheme(theme) {
        document.documentElement.classList.remove("theme-default", "theme-dark", "theme-ocean", "theme-halloween");
        document.documentElement.classList.add(`theme-${theme}`);
        themeButtons.forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-theme") === theme);
        });
    };

    const changeNameBtn = document.getElementById("change-username-btn");
    changeNameBtn.addEventListener("click", () => {
        const newUsername = prompt("Enter your new username: ", localStorage.getItem("username") || "User");
        if (newUsername) {
            localStorage.setItem("username", newUsername);
            document.getElementById("username").textContent = newUsername;
        }
    });
});