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
    });
