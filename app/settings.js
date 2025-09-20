document.addEventListener("DOMContentLoaded", () => {
    const clearBtn = document.getElementById("clear-storage-btn");
    const exportBtn = document.getElementById("export-progress-btn");
    const importBtn = document.getElementById("import-progress-btn");
    const importInput = document.getElementById("import-file-input");

    clearBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all saved progress?")) {
            localStorage.clear();
            alert("All saved progress has been cleared.");
            location.reload();
        }
    });

    exportBtn.addEventListener("click", () => {
        const completed = localStorage.getItem("completedLessons") || "[]";
        const blob = new Blob([completed], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "progress.json";
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
                localStorage.setItem("completedLessons", JSON.stringify(imported));
                alert("Progress imported!");
                location.reload();
            } catch {
                alert("Failed to import progress.");
            }
        };
        reader.readAsText(file);
    });
});
