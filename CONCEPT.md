# Core Concept

A website to learn and practice identifying phishing attacks in emails.

* Designed for users with little to no prior cybersecurity knowledge.
* Educational, lesson-based format to gradually increase complexity.
* Simulates an email service UI where users identify suspicious elements.
* Lessons progressively introduce more advanced phishing tactics.

## Minimum Viable Product (MVP)

* Display email with sender info, subject line, and body text.
* Include a brief intro about the company and the user's role.
* User classifies each email as **"Legit"** or **"Phish"**.
* Provide immediate feedback with concise explanations.
* Save user progress in local storage.
* Organize lessons into levels: Tutorial, Beginner, Intermediate, Advanced.
* Hosted on GitHub Pages.

## Potential Future Features

* Include email attachments and clickable links.
* Challenge mode with randomly generated emails and less specific feedback.
* Score tracking saved locally.
* Options to export/import progress.
* Timed challenge modes.
* Daily streaks and correct-answer streaks.
* Badge and achievement system.
* Leaderboards for competition.
* Host independently from GitHub Pages.
* Local device installation for computers and phones.
* Lessons inspired by real-world phishing attacks.

## Title Ideas

* Find the Phish
* Spot the Phish
* Catch the Phish
* Don't Take the Bait
* **Is This a Phish?**
* This Is Not a Phish
* Phish or Legit

---

## User Flow Example

1. The user arrives on the homepage and clicks the **Learn** button.
2. On the Learn page, the user selects a lesson to begin.
3. An email displayed with sender, subject, and body.
4. User reviews the email and chooses either **"Legit"** or **"Phish"**.
5. Immediate feedback explains why the choice was correct or incorrect.
6. Progress is recorded and new lessons unlock as the user advances through the content.

## Goals

* Teach users how to recognize phishing emails through interactive lessons.
* Build user confidence in identifying suspicious elements.
* Target audience: beginners to cybersecurity, casual users, employees undergoing training.
* Provide a safe, gamified environment for practice without risk.

---

# Lesson Topic Concepts

## Tutorial: Foundations

1. **What is Phishing?**
    * **Topic:** Introduction to phishing emails
    * **Scenario:** You're a regular employee at a medium-sized and generic company. You check your inbox daily.
    * **Emails:**
        * **Phish:** Generic, "You've won a gift card! Click here.", poorly formatted, random sender.
        * **Legit:** HR welcome message.
    * **Objective:** Understand that phishing are attempts to trick you. Learn concept of legitimacy checks.

2. **Anatomy of an Email**
    * **Topic:** Headers, sender, subject, links, body
    * **Scenario:** You're onboarding as a new intern
    * **Emails:**
        * **Phish:** Fake IT "password reset" with suspicious link
        * **Legit:** Real IT "company VPN" onboarding email
    * **Objective:** Identify parts of an email you should always inspect

3. **Red Flags 101**
    * **Topic:** Common signs like urgency, misspellings, unknown sender
    * **Scenario:** You get emails inside and outside the company
    * **Emails:**
        * **Phish:** Account locked in 24h, verify immediately
        * **Legit:** Company's security team (calm, no threat)
    * **Objective:** Recognize first-level warning signs

## Beginner: Patterns

1. **Urgency Traps**
    * **Topic:** Pressure language (act now, immediately, last chance)
    * **Scenario:** University student receiving school-related mail
    * **Emails:**
        * **Phish:** University IT, your account's disabled in 12h unless you verify
        * **Legit:** Registrar's last day to drop classes
    * **Objective:** Differentiate natural urgency vs. manipulative urgency

2. **To Good to be True**
    * **Topic:** Prizes, lotteries, bank refunds
    * **Scenario:** Using online shopping and banking
    * **Emails:**
        * **Phish:** Amazon, you've won a $500 gift card
        * **Legit:** Your package has been shipped
    * **Objective:** Spot exaggeration, unrealism

3. **Suspicious Attachments**
    * **Topic:** Malware hidden in files (PDFs, ZIPs, etc.)
    * **Scenario:** Working for office that shares documents
    * **Emails:**
        * **Phish:** Invoice attached, open immediately with ZIP
        * **Legit:** Colleague sending project plan as PDF
    * **Objective:** See mismatch between sender and attachment type

## Intermediate: Context and Awareness

1. **Domain Lookalikes**
    * **Topic:** Fake senders and misspelled domains.
    * **Scenario:** You’re working at a bank.
    * **Emails:**
        * **Phish:** From security@yourbánk.com (accented letter).
        * **Legit:** From security@yourbank.com.
    * **Objective:** Always check domain spelling carefully.

2. **Contextual Sense-Checking**
    * **Topic:** Does the email make sense given your role?
    * **Scenario:** You’re a junior software engineer.
    * **Emails:**
        * **Phish:** CEO asks you to “buy gift cards for a client.”
        * **Legit:** Manager asks you to update a GitHub repo.
    * **Objective:** Realize phishing often relies on unusual or illogical requests.

3. **Mixed Signals**
    * **Topic:** When an email looks professional but one detail is off.
    * **Scenario:** You’re an employee at a healthcare provider.
    * **Emails:**
        * **Phish:** Very polished email from “HR” with link going to hr-benefits-login.net.
        * **Legit:** Real HR update from internal portal.
    * **Objective:** Learn to check both tone + hidden links, not just “does it look professional.”

4. **Fake Login Pages**
    * **Topic:** Link leads to credential-harvesting site.
    * **Scenario:** You’re logging into corporate Office365.
        * **Emails:**
        * **Phish:** “Please re-enter your password” with link to microsoft-login-support.com.
        * **Legit:** Real Microsoft Teams invite link.
    * **Objective:** Hover over links before clicking, verify domains.

## Advanced: Sophistication and Social Engineering

1. **Spear Phishing (Personalization)**
    * **Topic:** Personalized phishing with real details.
    * **Scenario:** You’re a sales rep; attackers know your boss’s name.
    * **Emails:**
        * **Phish:** “Hi [Your Name], this is [Boss’s Name]. Urgent: wire $5000 to new vendor.”
        * **Legit:** Real Slack integration email from your boss.
    * **Objective:** Learn attackers research you to make phish convincing.

2. **Business Email Compromise (BEC)**
    * **Topic:** Pretending to be executives.
    * **Scenario:** Company is mid-merger.
        * **Emails:**
        * **Phish:** Fake CFO asking for “sensitive documents.”
        * **Legit:** Actual CFO announcement via secure newsletter.
    * **Objective:** Confirm sender identity via alternate channels.

3. **Supply Chain Phishing**
    * **Topic:** Phishing disguised as a trusted vendor.
    * **Scenario:** Company works with payroll vendor.
    * **Emails:**
        * **Phish:** “Payroll portal update” from attacker using spoofed vendor domain.
        * **Legit:** Real payroll update email with verified signature.
    * **Objective:** Verify vendor addresses & cross-check with known portals.

4. **Multi-Step Attacks**
    * **Topic:** Phish leading to secondary scams.
    * **Scenario:** Employee receives “security update” link.
    * **Emails:**
        * **Phish:** First mail = update link; second = confirmation asking for bank details.
        * **Legit:** Multi-step real IT email (password reset instructions + confirmation).
    * **Objective:** Train persistence — keep checking each step, don’t trust just because “step 1 looked okay.”

5. **CEO Fraud with Timing Exploits**
* **Topic:** Targeting during busy/holiday times.
* **Scenario:** You’re working late before holidays.
* **Emails:**
    * **Phish:** CEO “Please process urgent payment before you leave.”
    * **Legit:** Holiday greeting from company’s leadership.
* **Objective:** Recognize attackers exploit stress, timing, distractions.

## Other Ideas

* Sender identity
* Company branding
* Sender address structure
* Grammar
* Request doesn't fit role
* Inconsistent domain
* Timing implausibility
* Request chain manipulation (earliest message is forged)
* Sophisticated pretexting