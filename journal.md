# Development Journal — Portfolio Website

**Name:** Layaal Khellah  
**Course:** Intro to Web Development  
**Project Title:** Personal Portfolio Website  
**GitHub Repo:** [https://github.com/lkhellah/Personal-Portfolio]  
**Deployed Site:** [https://lkhellah.github.io/Personal-Portfolio/]
**Presentation Recording:**: [https://media.pdx.edu/media/t/1_1d9koq6e]

---

## Timeline + Contributions

### June 1, 2025

- Created initial `index.html` structure with HTML5 boilerplate.
- Set up `styles.css` and connected Bootstrap CDN.
- Added basic navbar with links for About, Previous Work, Projects, and Contact.
- Used `<nav class="navbar navbar-expand-lg>` with a toggler button for responsiveness.
- reflection: at this point, I had been planning a multi-page implementation. But I ended up doing a one page implementation so I don't use any html except the index.html. 
- SO, I originally linked to about.html, projects.html, etc., but later changed all links to #section-id to support single-page design.
- Also, I Used <nav class="navbar navbar-expand-lg"> and Bootstrap’s responsive classes (navbar-toggler, collapse navbar-collapse) to ensure the navbar works on smaller screens.
### June 2, 2025

- Designed the **About section** with a centered layout using Bootstrap Flexbox.
- I included a circular profile picture, styled using `border-radius: 50%` and `object-fit: cover`.
- The circular-ness of the image had corresponding work in the .css file using an profile pic class. The class was for better control over sizing, and ensured the `<img>` inside used width: 100%, height: 100%, and object-fit: cover to prevent distortion.
- I wrote my professional bio based on my TA work and research in speech and informatics. 
- My first sentence of the bio was bold and larger than the rest of the text using an h1 header and a `<`strong>` classifier. 

### June 3, 2025
- changing to single page layout. making sections for each requirement. SO:
- Each section had a `<section>` tag with an ID, a heading (`<h2>`), and inner content arranged in rows or columns.
- Added the **Previous Work & Skills section**, with two columns: one for experience and one for technical skills. The columns wer made using div class="col-md-4"
- For the skills list, I used `<ul> ` with bullet points and wrapped both experience and skills in .col-md-6 divs inside a .row for a two-column layout.
- Linked to my resume (PDF) and added bullet points for past research and TA experience.

### June 4, 2025
- Built the **Projects section** with three projects using Bootstrap's grid system. (following same section layouts as for the previous work section)
- Each project included a title, description, and GitHub (or google colab) link. I made 3 columns here same way as for the "previous work" section: I used .col-md-4 for each project to evenly split the row into three columns.
- Highlighted my LLM-based math tutor, clustering project, and capstone work with Portland Playhouse.

### June 5, 2025

- Developed the Contact form using Bootstrap’s form classes. Used `<form>` with grouped labels/inputs and added a submit `<button>`.Added required attributes and styled max width with Bootstrap’s mx-auto and max-width.
- Connected `script.js` to handle form submission with event listeners. (can error check with inspect->console).  The form uses standard `<label>` and `<input>` groups wrapped in form-control and mb-3 Bootstrap classes to ensure good spacing and accessibility.
- I added an alerts to thank the sender 
- I also reset the form after submission. 
- Wrote a validateForm() function to ensure name, email, and message are properly filled out before submission.
- Added live character count using messageInput.addEventListener('input', ...) and displayed red if over 500 characters: 
    - Created a `<small>` element dynamically using JavaScript and inserted it below the message box for the character counter.
    - I highlight the character counter in red if input exceeded 500 characters.
- I also ensured all JS runs after DOM is loaded using DOMContentLoaded to prevent errors from querying non-existent elements.

### June 6, 2025

- Added a **Bootstrap Accordion** in a new FUN FACT section for fun facts. This was the "step further" section!
- I implemented Bootstrap accordion with data-bs-toggle="collapse" and linked headers to collapsible content by ID (#a1, #a2, etc.).
- Each "fun fact" was wrapped in .accordion-item, and I ensured only one could be open at a time with data-bs-parent="#faqAccordion"
    - Each accordion item includes a header button linked to a content div using data-bs-toggle="collapse" and data-bs-target="#a1" style syntax.
    - I used data-bs-parent to ensure only one accordion item is open at a time, which creates a cleaner user experience.
- There was an issue where the first item opens by default so I adjusted by changing "collapse show" to just "collapse"
- I did some refining for spacing and layout for consistency across sections.
- styling / css
    -  added scroll-behavior: smooth to html to allow smooth transitions when clicking navbar links
    - Styled .bio and .btn-dark in styles.css for consistency  and button coloring.
    - Created utility styles like .section-title for section headers.
    - Used .rounded-circle, and custom sizes (width, height, object-fit: cover) for the profile picture to ensure responsiveness and layout alignment.

### June 7, 2025

- used WAVE and found an empty button error in the nav bar so I added an aria-label to describe what the button does.
- i fixed file paths to my resume and image so they load properly on the deployed Github Pages site.
- I used "prettier" to format my code. 
- I deleted the unused .html files from the inital project scaffolding of a multi-page implementation.

### Fixes & Polishing
- Moved the #projects section outside of the #work section to improve semantic structure and avoid layout nesting issues. (Projects being inside work section was accidental anyway)
- Corrected a typo in “PERVIOUS WORK” to “PREVIOUS WORK.”
- Ran Prettier multiple times to clean up HTML indentation and ensure consistent tag formatting across the project.

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

- **Image centering and shape:** Took trial-and-error with `object-fit`, height/width, and CSS overrides to make it round. The challenge essentially was two parts: first was to make the image circular. So, I created a .profile-pic class in the .css and used "class="rounded-circle" in the html. The other issue was getting the information centered: bio on the left, image on the right. I used flex-wrap to help solve this. 
- **Form interactivity:** Initial JS didn’t work until I added the `DOMContentLoaded` listener and verified `script.js` was linked after the form. Essentially, when I went to "inspect" the page using the console to see if the form submitted the info, I didn't see anything. So I added this .js event listener so i can use console.log
- **Accordion default open:** Had to remove `collapse show` to make all items collapsed by default. The issue was that the first question appeared highlighted blue before I even clicked on it.
- **Scrolling behavior:** Anchor links scrolled too high or too low, and required layout tweaking. When I was testing if the nav bar worked, the page wouldn't move and so I added empty space at the bottom which ended up allowing me to test and confirm that the scrolling was good. 
- **Commit quality and timeliness:** Forgot to commit as I worked, but needed to ensure each commit was meaningful and represented a standalone unit of work. With the commits that were not verbose, I tried to explain their work clearly in the presentation recording. 
- **Journaling** Remembering to stop and journal each step was a challenge because I typically stayed coding and then remembered after so I would have to retrace my steps. But, I have added information in some areas I think lacked. 

---

## Outside Sources

- [Bootstrap Accordion Docs](https://getbootstrap.com/docs/5.3/components/accordion/)
- [Bootstrap Flexbox Layout](https://getbootstrap.com/docs/5.3/utilities/flex/)
- [MDN Web Docs – Form Submission](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)
