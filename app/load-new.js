// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// See LICENSE-CODE in the project root for details.
var modal = document.getElementById("myModal");
var btn = document.getElementById("whats-new");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
};
span.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};