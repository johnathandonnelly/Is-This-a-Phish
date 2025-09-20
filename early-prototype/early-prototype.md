# Early Prototype

This folder contains an early prototype of *Is This a Phish?*.

## About

* Built quickly to experiment with core ideas and concepts.
* Contains rough, unpolished code and basic UI.
* Designed to test functionality and user interaction flow before building the main app.

## What to Expect

* The UI and code quality are not production-ready.
* Many features are incomplete or implemented in a temporary way.
* It is intended as a learning tool and proof of concept.

## Why Include This?

Sharing this prototype shows my development process, experimentation, and iterative improvements. It reflects how the project evolved from initial ideas to a more polished application.

---

Feel free to explore this early version to get insight into the project's beginnings.

---

## Project Structure

Here's a quick overview of the files in this prototype:

* `test.css` — The CSS file for styling the prototype UI.
* `test.html` — The main HTML page that contains the lesson.
* `test.js` — The JavaScript file for handing lesson functionality.
* `test.json` — The file containing the placeholder lessons.
* `test2.html` — The HTML page containing the list of lessons.
* `test3.html` — The HTML page containing options for clearing storage and importing/exporting progress.
* `test3.js` — The JavaScript file to handle clearing storage and importing/exporting progress specifically.

### Flow Overview

* The user starts at the lesson page (`test2.html`) and selects a lesson.
* The app loads the selected lesson’s email content (in `test.html`).
* User interacts by marking the email as "Legit" or "Phish".
* Immediate feedback is shown based on the choice.
* Progress is tracked locally and used to unlock subsequent lessons.