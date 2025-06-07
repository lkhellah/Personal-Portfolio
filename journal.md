# Development Journal — Portfolio Website

**Name:** Layaal Khellah  
**Course:** Intro to Web Development  
**Project Title:** Personal Portfolio Website  
**GitHub Repo:** [https://github.com/lkhellah/Personal-Portfolio]  
**Deployed Site:** [https://lkhellah.github.io/Personal-Portfolio/]

---

## Timeline + Contributions

### June 1, 2025

- Created initial `index.html` structure with HTML5 boilerplate.
- Set up `styles.css` and connected Bootstrap CDN.
- Added basic navbar with links for About, Previous Work, Projects, and Contact.

### June 2, 2025

- Designed the **About section** with a centered layout using Bootstrap Flexbox.
- Included a circular profile picture, styled using `border-radius: 50%` and `object-fit: cover`.
- Wrote and styled my professional bio based on my TA work and research in speech and informatics.

### June 3, 2025

- Added the **Previous Work & Skills section**, with two columns: one for experience and one for technical skills.
- Linked to my resume (PDF) and added bullet points for past research and TA experience.

### June 4, 2025

- Built the **Projects section** with three projects using Bootstrap's grid system.
- Each project included a title, description, and GitHub link.
- Highlighted my LLM-based math tutor, clustering project, and capstone work with Portland Playhouse.

### June 5, 2025

- Developed the Contact form using Bootstrap’s form classes. Used `<form>` with grouped labels/inputs and added a submit `<button>`.Added required attributes and styled max width with Bootstrap’s mx-auto and max-width.
- Connected `script.js` to handle form submission with event listeners.
- Console logs and alerts show message data and reset the form , added interactivity via JavaScript.

### June 6, 2025

- Added a **Bootstrap Accordion** in a new FUN FACT section for fun facts. This was the "step further" section!
- Adjusted the default behavior so the first item isn't open by default.
- Refined spacing and layout for consistency across sections.

### June 7, 2025
- used WAVE and found an empty button error in the nav bar so I added an aria-label to describe what the button does. 
---

## Features Implemented

- Responsive navbar with section links
- Bio and profile image layout with Flexbox
- Previous Work section in two-column layout
- Projects section with live GitHub links
- Contact form with JS interactivity
- FUN FACT section using **Bootstrap accordion**
- Consistent styling across all sections

---

## Tools & Technologies Used

- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap 5
- Git + GitHub
- GitHub Pages (for deployment)

---

## Challenges

- **Image centering and shape:** Took trial-and-error with `object-fit`, height/width, and CSS overrides to make it round
- **Form interactivity:** Initial JS didn’t work until I added the `DOMContentLoaded` listener and verified `script.js` was linked after the form
- **Accordion default open:** Had to remove `collapse show` to make all items collapsed by default
- **Scrolling behavior:** Anchor links scrolled too high or too low, and required layout tweaking
- **Commit quality and timeliness:** Forgot to commit as I worked, but needed to ensure each commit was meaningful and represented a standalone unit of work
- **Journaling** Remembering to stop and journal each step was a challenge because I typically stayed coding and then remembered after so I would have to retrace my steps. 

---

## Outside Sources

- [Bootstrap Accordion Docs](https://getbootstrap.com/docs/5.3/components/accordion/)
- [Bootstrap Flexbox Layout](https://getbootstrap.com/docs/5.3/utilities/flex/)
- [MDN Web Docs – Form Submission](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)
