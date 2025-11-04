# Changelog

## [0.3.3] - 2025-11-04

### Added

* Attachment functionality
* WIP OLED and animated theme

### Changed

* Difficulties are now Units
* WIP content for Lesson 1, awaiting more email functionality
* Export file includes username
* Navigation image is centered on mobile

### Removed

* Concept file to the prototype repository
* Button scale transform on hover

## [0.3.2] - 2025-10-31

### Added

* Pop-up information for Learn and History
* Change username from Profile

### Changed

* Accordions handle completed and locked states
* Most buttons have icons
* Improved theme separation
* Credits icon
* Description on Home

## [0.3.1] - 2025-10-27

### Added

* Halloween and Monochrome colour themes

### Changed

* Fixed navigation image not showing while on Home
* Seperated styles.css and themes.css

## [0.3.0] - 2025-10-26

### Added

* Pop-up introduction for Lesson: Tutorial - 1
* Accordion dropdowns for Learn and History
* Total Completed on Profile
* Changelog pop-up on Home

### Changed

* Moved Credits from Settings into its own page.
* Is This a Phish?™ home and navigation bar text with logos
* AGPLv3 license to CC BY-NC-SA 4.0 and MPL 2.0 licenses
* Simplified [Contributing](/CONTRIBUTING.md)
* Arrangement of progress bars on Profile
* Separated colour themes and image themes in Settings
* Default file name for profile json exports

### Removed

* Text for Profile and Settings in the navigation bar
* Early prototype to its own repository
* SECURITY, CODE_OF_CONDUCT, and NOTICE
* Action to enforce DCO sign-offs
* progress.json

### Notes on Licensing

**Why so many license changes?**

The project has always meant a lot to me, and I'm not the legal type, so I struggled to figure out how to protect it. I started with MIT, then moved to Apache 2.0, then GPLv3, and finally AGPLv3. Each time I realized they didn't quite fit the project.

With 0.3.0, I've finally struck the balance between freedom and protection:

* **MPL 2.0** covers the project's code.
* **CC BY-NC-SA 4.0** covers all other content, including logos, names, write-ups, and other artistic, literary, or branding elements.

This new approach ensures the project remains open source while ensuring protection and credibility.

## [0.2.0] - 2025-10-20

### Added

* [History](/app/history.html) page template to show real-life phishing events
* [Profile](/app/profile.html) page showing username, lessons and readings completed
* Link functionality and styling
* Mobile screen size support
* Color theme using image functionality
* Backwards compatibility with lesson progress JSONs
* [Profile file with 100% completion](/profile.json) included

### Changed

* Exporting includes username, colour theme, and readings 
* Improved navigation buttons
* Improved footer using [meta.json](/app/meta.json)
* Improved [icon](/assets/icon_v2.png)
* Credits section in [Settings](/app/settings.html)
* GPLv3 --> AGPLv3

### Removed

* Light and midnight theme (temporarily)

## [0.1.0] - 2025-10-17

### Added

* Multiple tiers of hints functionality
* Lesson description functionality
* Intermediate placeholder lessons
* Advanced template lessons
* 100% json file included
* Overhauled README
* Contributing, Code of Conduct, and Security information
* New icon
* Action to enforce DCO sign-offs
* [meta.json](/app/meta.json) for future use

### Changed

* Correct answer also shows explanation
* Hovering over progress bar shows amount of completed lessons
* Hovering over lesson buttons shows their function
* Next button size
* Next button and result message order 
* Fixed v0.0.6 log date and version
* Removed scrollbar
* [index.html](/index.html) footer, temporarily

## [0.0.6] - 2025-10-12

### Added

* Colour themes (default, light, dark, midnight)

### Changed

* Progress bar glow on 100%
* Replaced placeholder lessons with near-finished ones
* Active pages do not play hover animation

## [0.0.5] - 2025-10-03

### Added

* Detailed lesson plans in [CONCEPT.md](/CONCEPT.md)

### Changed

* License: MIT -> Apache 2.0, with notice
* 0.0.4 changelog date

## [0.0.4] - 2025-09-29

### Added

* Progress bar

### Changed

* Email styling
* Navigation hover and active backgrounds
* Rounded buttons
* README and screenshot

## [0.0.3] - 2025-09-25

### Changed

* Improved tutorial lesson content (still placeholders)
* Updated Learn page to match titles of lessons.

## [0.0.2] - 2025-09-22

### Added

* Navigation hover effects
* Temporary favicon
* Footer

### Changed

* Spacing between elements
* README home page image

## [0.0.1] - 2025-09-20

### Added

* Basic UI with placeholder lessons
* Navigation and page layout
* Progress saving to local storage
* Option to clear local storage
* Options to import and export progress