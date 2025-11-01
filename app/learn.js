document.addEventListener("DOMContentLoaded", function() {
    fetch('lesson.json')
        .then(res => res.json())
        .then(data => {
            const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');

            Object.keys(data).forEach(category => {
                let allLocked = true;
                let allComplete = true;

                data[category].forEach(lesson => {
                    const button = document.querySelector(`button[data-lesson-id="${lesson.id}"]`);
                    const link = document.querySelector(`a[data-lesson-id="${lesson.id}"]`);

                    const isLocked = lesson.prerequisite && !completed.includes(lesson.prerequisite);
                    const isComplete = completed.includes(lesson.id);

                    // Handle locked state
                    if (isLocked) {
                        if (link) {
                            link.classList.add('locked');
                            link.href = '#';
                            link.title = `Complete lesson ${lesson.prerequisite} first`;
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
                        allComplete = false; // ❗ fixed here
                    }
                });

                // Mark accordion state
                const accordion = document.querySelector(`.accordion[data-category="${category}"]`);
                if (accordion) {
                    if (allComplete) accordion.classList.add('completed');
                    if (allLocked) accordion.classList.add('locked');
                }
            });

            // Progress bar logic
            let totalLessons = 0;
            Object.keys(data).forEach(category => {
                totalLessons += data[category].length;
            });
            const completedCount = completed.length;

            const bar = document.getElementById("progress-bar");
            const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
            bar.style.width = percent + "%";

            const text = document.getElementById("progress-text");
            text.textContent = `${percent}%`;

            const fraction = document.querySelector("#progress-summary h2");
            if (fraction) fraction.textContent = `${completedCount}/${totalLessons} Lessons Completed`;

            if (bar) bar.title = `${completedCount} of ${totalLessons} lessons completed`;
            if (text) text.title = `${completedCount} of ${totalLessons} lessons completed`;

            text.style.color = percent > 2 ? "var(--background-color)" : "var(--text-color)";
            if (percent === 100) {
                document.getElementById("progress").classList.add("complete");
            }
        });
});