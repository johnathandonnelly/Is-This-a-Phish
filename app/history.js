// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// See LICENSE-CODE in the project root for details.
document.addEventListener("DOMContentLoaded", function() {
    fetch(`reading.json`)
        .then(res => res.json())
        .then(data => {
            const completed = JSON.parse(localStorage.getItem('completedReadings') || '[]');
            Object.keys(data).forEach(category => {
                data[category].forEach(reading => {
                    const button = document.querySelector(`button[data-reading-id="${reading.id}"]`);
                    const link = document.querySelector(`a[data-reading-id="${reading.id}"]`);
                    if (reading.prerequisite && !completed.includes(reading.prerequisite)) {
                        if (link) {
                            link.classList.add('locked');
                            link.href = '#';
                            link.title = `Complete reading ${reading.prerequisite} first`;
                        }
                        if (button) {
                            button.classList.add('locked');
                            button.disabled = true;
                        }
                    }
                    if (completed.includes(reading.id)) {
                        if (button) {
                            button.classList.add('completed');
                        }
                    }
                });
            });

            let totalReadings = 0;
            Object.keys(data).forEach(category => {
                totalReadings += data[category].length;
            });
            const completedCount = completed.length;

            const bar = document.getElementById("progress-bar");
            const percent = Math.round((completedCount / totalReadings) * 100);
            bar.style.width = percent + "%";

            const text = document.getElementById("progress-text");
            text.textContent = `${percent}%`;

            const fraction = document.querySelector("#progress-summary h2");
            if (fraction) {
                fraction.textContent = `${completedCount}/${totalReadings} Readings Completed`
            }

            if (bar) {
                bar.title = `${completedCount} of ${totalReadings} readings completed`;
            }
            if (text) text.title = `${completedCount} of ${totalReadings} readings completed`;

            if (percent > 2) {
                text.style.color = "var(--background-color)";
            } else {
                text.style.color = "var(--text-color)"
            }

            if (percent === 100) {
                console.log("Progress is 100%")
                document.getElementById("progress").classList.add("complete");
            }
        });
})