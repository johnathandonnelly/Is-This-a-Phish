// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// See LICENSE-CODE in the project root for details.
document.addEventListener("DOMContentLoaded", function() {
    fetch('lesson.json')
        .then(res => res.json())
        .then(data => {
            const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');

            let totalLessons = 0;
            Object.keys(data).forEach(category => {
                totalLessons += data[category].length;
            });
            const completedCount = completed.length;

            const bar = document.getElementById("profile-lesson-progress-bar");
            const percent = Math.round((completedCount / totalLessons) * 100);
            bar.style.width = percent + "%";

            const text = document.getElementById("profile-lesson-progress-text");
            text.textContent = `${percent}%`;

            // fraction above bar
            const fraction = document.querySelector("#profile-lesson-progress-summary h2");
            if (fraction) {
                fraction.textContent = `${completedCount}/${totalLessons} Lessons Completed`
            }

            if (bar) {
                bar.title = `${completedCount} of ${totalLessons} lessons completed`;
            }
            if (text) text.title = `${completedCount} of ${totalLessons} lessons completed`;

            if (percent > 2) {
                text.style.color = "#000";
            } else {
                text.style.color = "#FFF"
            }

            if (percent === 100) {
                console.log("Progress is 100%")
                document.getElementById("profile-lesson-progress").classList.add("complete");
            }
        });
    













    fetch('reading.json')
        .then(res => res.json())
        .then(data => {
            const completed = JSON.parse(localStorage.getItem('completedReadings') || '[]');

            let totalReadings = 0;
            Object.keys(data).forEach(category => {
                totalReadings += data[category].length;
            });
            const completedCount = completed.length;

            const bar = document.getElementById("profile-reading-progress-bar");
            const percent = Math.round((completedCount / totalReadings) * 100);
            bar.style.width = percent + "%";

            const text = document.getElementById("profile-reading-progress-text");
            text.textContent = `${percent}%`;

            // fraction above bar
            const fraction = document.querySelector("#profile-reading-progress-summary h2");
            if (fraction) {
                fraction.textContent = `${completedCount}/${totalReadings} Readings Completed`
            }

            if (bar) {
                bar.title = `${completedCount} of ${totalReadings} readings completed`;
            }
            if (text) text.title = `${completedCount} of ${totalReadings} readings completed`;

            if (percent > 2) {
                text.style.color = "#000";
            } else {
                text.style.color = "#FFF"
            }

            if (percent === 100) {
                console.log("Progress is 100%")
                document.getElementById("profile-reading-progress").classList.add("complete");
            }
        });














    Promise.all([
        fetch('lesson.json').then(res => res.json()),
        fetch('reading.json').then(res => res.json())
    ]).then(([lessonData, readingData]) => {
        const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
        const completedReadings = JSON.parse(localStorage.getItem('completedReadings') || '[]');

        let totalLessons = 0;
        Object.keys(lessonData).forEach(category => {
            totalLessons += lessonData[category].length;
        });

        let totalReadings = 0;
        Object.keys(readingData).forEach(category => {
            totalReadings += readingData[category].length;
        });

        const totalCompleted = completedLessons.length + completedReadings.length;
        const totalItems = totalLessons + totalReadings;
        const totalPercent = totalItems > 0 ? Math.round((totalCompleted / totalItems) * 100) : 0;

        const bar = document.getElementById("profile-total-progress-bar");
        const text = document.getElementById("profile-total-progress-text");
        const fraction = document.querySelector("#profile-total-progress-summary h2");

        bar.style.width = totalPercent + "%";
        text.textContent = `${totalPercent}%`;
        fraction.textContent = `${totalCompleted}/${totalItems} Total Completed`;

        bar.title = `${totalCompleted} of ${totalItems} total items completed`;
        text.title = `${totalCompleted} of ${totalItems} total items completed`;

        text.style.color = totalPercent > 2 ? "#000" : "#FFF";

        if (totalPercent === 100) {
            document.getElementById("profile-total-progress").classList.add("complete");
        }
    });
})
