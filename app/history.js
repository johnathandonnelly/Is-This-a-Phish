// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// See LICENSE-CODE in the project root for details.
document.addEventListener("DOMContentLoaded", function() {
    fetch('reading.json')
        .then(res => res.json())
        .then(data => {
            const completed = JSON.parse(localStorage.getItem('completedReadings') || '[]');

            Object.keys(data).forEach(category => {
                let allLocked = true;
                let allComplete = true;

                data[category].forEach(reading => {
                    const button = document.querySelector(`button[data-reading-id="${reading.id}"]`);
                    const link = document.querySelector(`a[data-reading-id="${reading.id}"]`);

                    const isLocked = reading.prerequisite && !completed.includes(reading.prerequisite);
                    const isComplete = completed.includes(reading.id);

                    // Handle locked state
                    if (isLocked) {
                        if (link) {
                            link.classList.add('locked');
                            link.href = '#';
                            link.title = `Complete reading ${reading.prerequisite} first`;
                        }
                        if (button) {
                            button.classList.add('locked');
                            button.disabled = true;
                        }
                    } else {
                        allLocked = false;
                    }

                    // Handle completed state
                    if (isComplete) {
                        if (button) button.classList.add('completed');
                    } else {
                        allComplete = false;
                    }
                });

                // Mark accordion state (if present)
                const accordion = document.querySelector(`.accordion[data-category="${category}"]`);
                if (accordion) {
                    if (allComplete) accordion.classList.add('completed');
                    if (allLocked) accordion.classList.add('locked');
                }
            });

            // Progress bar + summary logic
            let totalReadings = 0;
            Object.keys(data).forEach(category => {
                totalReadings += data[category].length;
            });
            const completedCount = completed.length;

            const bar = document.getElementById("progress-bar");
            const percent = totalReadings > 0 ? Math.round((completedCount / totalReadings) * 100) : 0;
            bar.style.width = percent + "%";

            const text = document.getElementById("progress-text");
            text.textContent = `${percent}%`;

            const fraction = document.querySelector("#progress-summary h2");
            if (fraction) fraction.textContent = `${completedCount}/${totalReadings} Readings Completed`;

            if (bar) bar.title = `${completedCount} of ${totalReadings} readings completed`;
            if (text) text.title = `${completedCount} of ${totalReadings} readings completed`;

            text.style.color = percent > 2 ? "var(--background-color)" : "var(--text-color)";
            if (percent === 100) {
                document.getElementById("progress").classList.add("complete");
            }
        });
});