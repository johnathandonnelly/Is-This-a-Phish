// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// See LICENSE-CODE in the project root for details.
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lessonId = urlParams.get("lesson") || "T1";

    // LocalStorage helpers
    function getCompletedLessons() {
        return JSON.parse(localStorage.getItem("completedLessons") || "[]");
    }
    function markLessonComplete(id) {
        const completed = getCompletedLessons();
        if (!completed.includes(id)) {
            completed.push(id);
            localStorage.setItem("completedLessons", JSON.stringify(completed));
        }
    }
    function isLessonComplete(id) {
        return getCompletedLessons().includes(id);
    }

    function setButtonTooltips() {
        const tips = {
            "phish-btn": "Mark this email as phishing",
            "legit-btn": "Mark this email as legitimate",
            "hint-btn": "Get a hint (click multiple times for more hints)",
            "answer-btn": "Reveal the answer",
            "next-btn": "Go to the next lesson"
        };
        Object.entries(tips).forEach(([id, t]) => {
            const el = document.getElementById(id);
            if (el) el.title = t;
        });
    }

    // Elements
    const nextBtn = document.getElementById("next-btn");
    const resultMessage = document.getElementById("result-message");

    // Update the Next Lesson button based on completion state
    function updateNextButton(lessonData) {
        if (lessonData.next) {
            nextBtn.style.display = "block";
            if (isLessonComplete(lessonId)) {
                nextBtn.disabled = false;
                nextBtn.textContent = "Go to Next Lesson";
            } else {
                nextBtn.disabled = true;
                nextBtn.textContent = "Complete this lesson to continue";
            }
            nextBtn.onclick = () => {
                window.location.href = `lesson.html?lesson=${lessonData.next}`;
            };
        } else {
            nextBtn.style.display = "none";
        }
    }

    // Fetch lesson data and initialize page
    fetch("lesson.json")
        .then((response) => response.json())
        .then((data) => {
            let lessonData;
            for (const category in data) {
                lessonData = data[category].find((lesson) => lesson.id === lessonId);
                if (lessonData) break;
            }

            if (!lessonData) {
                alert("Lesson not found.");
                return;
            }

            // Block if prereq not met
            if (
                lessonData.prerequisite &&
                !isLessonComplete(lessonData.prerequisite)
            ) {
                resultMessage.textContent = `You must complete lesson ${lessonData.prerequisite} before accessing this one.`;
                // Disable interaction buttons
                document.querySelectorAll("#buttons button").forEach((btn) => {
                    btn.disabled = true;
                });
                // Hide next button
                nextBtn.style.display = "none";
                return;
            }

            window.lessonData = lessonData;
            window.correctAnswer = lessonData.correctAnswer;

            // Update page content
            document.querySelector("#email-title p").textContent = lessonData.title;
            document.querySelector("#email-info p:nth-child(1)").textContent =
                lessonData.senderName;
            document.querySelector("#email-info p:nth-child(2)").textContent =
                lessonData.senderEmail;
            document.querySelector("#email-content p").innerHTML = lessonData.body;
            document.getElementById("lesson-number").textContent =
                lessonData.lessonNumber || "";
            document.getElementById("lesson-title").textContent =
                lessonData.lessonTitle || "";
            document.getElementById("user-description").textContent =
                lessonData.userDescription || "";
            document.getElementById("company-description").textContent =
                lessonData.companyDescription || "";
            document.getElementById("lesson-description").innerHTML =
                lessonData.lessonDescription || "";

            updateNextButton(lessonData);

            // Button event listeners
            document.querySelectorAll("#buttons button").forEach((button) => {
                let hintIndex = 0; // track which hint to display
                button.addEventListener("click", () => {
                    const userChoice = button.textContent.toLowerCase();
                    if (userChoice === "phish" || userChoice === "legit") {
                        if (userChoice === window.correctAnswer.toLowerCase()) {
                            // resultMessage.textContent = "Correct!";
                            resultMessage.innerHTML = `<strong>Correct!</strong><br>${lessonData.answer || "No explanation provided."}`;
                            markLessonComplete(lessonId);
                            updateNextButton(window.lessonData); // enable next button
                        } else {
                            resultMessage.textContent = "Incorrect!";
                        }
                    } else if (userChoice === "hint") {
                        // multiple hints
                        if (hintIndex === 0) {
                            // first hint
                            resultMessage.textContent = lessonData.hint || "No hint available";
                        } else if (lessonData.hints && hintIndex <=  lessonData.hints.length) {
                            // show other hints
                            resultMessage.textContent = lessonData.hints[hintIndex - 1];
                        } else {
                            // show answer if no more hints
                            resultMessage.textContent = lessonData.answer || "No answer available";
                            return; // stop incrementing hintindex
                        }
                        hintIndex++; // move to next hint
                    } else if (userChoice === "answer") {
                        resultMessage.textContent = lessonData.answer || "No answer available";
                    }
                });
            });
        })
        .catch((err) => {
            console.error("Failed loading lesson data", err);
            alert("Error loading lesson data.");
        });

    // Export progress button (assumes button with id 'export-progress' exists)
    const exportBtn = document.getElementById("export-progress");
    if (exportBtn) {
        exportBtn.onclick = () => {
            const completed = localStorage.getItem("completedLessons") || "[]";
            const blob = new Blob([completed], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "progress.json";
            a.click();
            URL.revokeObjectURL(url);
        };
    }

    // Import progress buttons (assumes input#'import-progress' and button#'import-progress-btn')
    const importBtn = document.getElementById("import-progress-btn");
    const importInput = document.getElementById("import-progress");
    if (importBtn && importInput) {
        importBtn.onclick = () => importInput.click();
        importInput.onchange = (event) => {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const imported = JSON.parse(e.target.result);
                    localStorage.setItem("completedLessons", JSON.stringify(imported));
                    alert("Progress imported!");
                    location.reload();
                } catch {
                    alert("Failed to import!");
                }
            };
            reader.readAsText(file);
        };
    };

    setButtonTooltips();

    // Pop up modal
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    completedLessons = getCompletedLessons();
    if (lessonId === "T1" || completedLessons.length === 0) {
        modal.style.display = "block";
    }
    if (span) {
        span.onclick = function () {
            modal.style.display = "none"
        };
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
