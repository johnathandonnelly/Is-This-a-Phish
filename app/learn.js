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

        if (percent > 3) {
            text.style.color = "#000";
        } else {
            text.style.color = "#FFF"
        }
    });
