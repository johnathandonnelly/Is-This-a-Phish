// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// See LICENSE-CODE in the project root for details.

// -------------------- HOME PAGE / LESSON 1 --------------------
(function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("whats-new");
    var span = modal ? modal.getElementsByClassName("close")[0] : null;

    if (modal && btn && span) {
        btn.onclick = function() {
            modal.style.display = "block";
        };
        span.onclick = function() {
            modal.style.display = "none";
        };
        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
})();


// -------------------- LEARN / READING --------------------
(function() {
    var modal2 = document.querySelector(".myModal2");
    var btn2 = document.querySelector(".modal-class");
    var span2 = modal2 ? modal2.getElementsByClassName("close")[0] : null;

    if (modal2 && btn2 && span2) {
        btn2.onclick = function() {
            modal2.style.display = "block";
        };
        span2.onclick = function() {
            modal2.style.display = "none";
        };
        window.addEventListener("click", function(event) {
            if (event.target === modal2) {
                modal2.style.display = "none";
            }
        });
    }
})();
