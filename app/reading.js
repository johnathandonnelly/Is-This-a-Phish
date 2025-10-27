// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// See LICENSE-CODE in the project root for details.
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const readingId = urlParams.get("reading") || "R1";

    // LocalStorage
    function getCompletedReadings() {
        return JSON.parse(localStorage.getItem("completedReadings") || "[]");
    }
    function markReadingComplete(id) {
        const completed = getCompletedReadings();
        if (!completed.includes(id)) {
            completed.push(id);
            localStorage.setItem("completedReadings", JSON.stringify(completed));
        }
    }
    function isReadingComplete(id) {
        return getCompletedReadings().includes(id);
    }
    function setButtonTooltips() {
        const tips = {
            "reading-complete-btn": "Mark reading as complete",
            "reading-next-btn": "Go to the next reading"
        };
        Object.entries(tips).forEach(([id, t]) => {
            const el = document.getElementById(id);
            if (el) el.title = t;
        });
    }

    const nextBtn = document.getElementById("reading-next-btn");
    const resultMessage = document.getElementById("result-message");


    function updateNextButton(readingData) {
        if (readingData.next) {
            nextBtn.style.display = "block";
            if (isReadingComplete(readingId)) {
                nextBtn.disabled = false;
                nextBtn.textContent = "Go to Next Reading";
            } else {
                nextBtn.disabled = true;
                nextBtn.textContent = "Complete this reading to continue";
            }
            nextBtn.onclick = () => {
                window.location.href = `reading.html?reading=${readingData.next}`;
            };
        } else {
            nextBtn.style.display = "none";
        }
    }


    fetch("reading.json")
        .then((response) => response.json())
        .then((data) => {
            let readingData;
            for (const category in data) {
                readingData = data[category].find((reading) => reading.id === readingId);
                if (readingData) break;
            }
            if (!readingData) {
                alert("Reading not found.");
                return;
            }
            if (readingData.prerequisite && !isReadingComplete(readingData.prerequisite)) {
                    resultMessage.textContent = `You must complete reading ${readingData.prerequisite} before accessing this one.`;
                    document.querySelectorAll("#buttons button").forEach((btn) => {
                        btn.disabled = true;
                    });
                    nextBtn.style.display = "none";
                    return;
                }


            window.readingData = readingData;
            window.correctAnswer = readingData.correctAnswer


            document.querySelector("#reading-email-title p").textContent = readingData.title;
            document.querySelector("#reading-email-info p:nth-child(1)").textContent = readingData.senderName;
            document.querySelector("#reading-email-info p:nth-child(2)").textContent = readingData.senderEmail;
            document.querySelector("#reading-email-content p").innerHTML = readingData.body;
            document.getElementById("reading-title").textContent = readingData.readingTitle || "";
            document.getElementById("reading-description").innerHTML = readingData.readingDescription || "";

            updateNextButton(readingData);





            document.querySelectorAll("button").forEach((button) => {
                button.addEventListener("click", () => {
                    const userChoice = button.textContent.toLowerCase();
                    if (userChoice === "complete") {
                        if (userChoice === window.correctAnswer.toLowerCase()) {
                            resultMessage.innerHTML = `<strong>Reading Completed!</strong>`;
                            markReadingComplete(readingId);
                            updateNextButton(window.readingData);
                        }
                    }
                })
            })
        })
        .catch((err) => {
            console.error("Failed loading reading data", err);
            alert("Error loading reading data");
        });
    setButtonTooltips();
})