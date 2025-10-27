// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// See LICENSE-CODE in the project root for details.
document.addEventListener("DOMContentLoaded", function() {
    fetch('lesson.json')
        .then(res => res.json())
        .then(data => {
            const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');

            Object.keys(data).forEach(category => {
                data[category].forEach(lesson => {
                    const button = document.querySelector(`button[data-lesson-id="${lesson.id}"]`);
                    const link = document.querySelector(`a[data-lesson-id="${lesson.id}"]`);
                    if (lesson.prerequisite && !completed.includes(lesson.prerequisite)) {
                        if (link) {
                            link.classList.add('locked');
                            link.href = '#';
                            link.title = `Complete lesson ${lesson.prerequisite} first`;
                        }

                        if (button) {
                            button.classList.add('locked');
                            button.disabled = true;
                        }
                    }

                    if (completed.includes(lesson.id)) {
                        if (button) {
                            button.classList.add('completed');
                        }
                    }
                });
            });

            let totalLessons = 0;
            Object.keys(data).forEach(category => {
                totalLessons += data[category].length;
            });
            const completedCount = completed.length;

            const bar = document.getElementById("progress-bar");
            const percent = Math.round((completedCount / totalLessons) * 100);
            bar.style.width = percent + "%";

            const text = document.getElementById("progress-text");
            text.textContent = `${percent}%`;

            // fraction above bar
            const fraction = document.querySelector("#progress-summary h2");
            if (fraction) {
                fraction.textContent = `${completedCount}/${totalLessons} Lessons Completed`
            }

            if (bar) {
                bar.title = `${completedCount} of ${totalLessons} lessons completed`;
            }
            if (text) text.title = `${completedCount} of ${totalLessons} lessons completed`;

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
