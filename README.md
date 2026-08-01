# Eric Lucas | Portfolio

A personal portfolio website showcasing my projects, education, and background — condensed into a single, scrollable page.

## About This Project

This site is adapted from an open-source portfolio template originally built by [Smaranjit Ghose](https://github.com/smaranjitghose) ([portfolio.smaranjitghose.codes](https://portfolio.smaranjitghose.codes)), which was designed as a free, multi-page portfolio template (separate `index.html`, `projects.html`, and `education.html` pages).

I took that original multi-page template and restructured it into a **single-page layout**, merging the Home, Projects, Education, and MOOC/Accreditations sections into one continuous scrolling page, along with a custom About Me section, updated content, and various styling and bug fixes along the way.

## Features

- **Home** — animated intro with rotating text, social links, and particle background effect
- **About Me** — two-column bio section with programming language icons
- **Projects** — dynamically rendered project cards (populated from a JS data array)
- **Education** — formal education timeline and online course/MOOC accreditations
- **Contact** — working contact form (submissions routed via [Formcarry](https://formcarry.com/))
- Fully responsive layout with mobile-specific navigation and spacing adjustments
- Scroll animations powered by [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)

## Tech Stack

- HTML5 / CSS3 / vanilla JavaScript
- [Bootstrap 4](https://getbootstrap.com/) — grid system and base components
- [Font Awesome 5](https://fontawesome.com/) — icons
- [Devicon](https://devicon.dev/) — programming language icons not covered by Font Awesome
- [AOS](https://michalsnik.github.io/aos/) — scroll-triggered animations
- [particles.js](https://vincentgarreau.com/particles.js/) — animated background effect
- [Formcarry](https://formcarry.com/) — contact form backend (no custom server required)

## Project Structure

```
├── index.html              # Single-page site (Home, About, Projects, Education, Contact)
├── assets/
│   ├── css/
│   │   ├── style.css       # Global styles
│   │   ├── home.css        # Home section styles
│   │   ├── education.css   # Education/timeline styles
│   │   ├── project.css     # Project card styles
│   │   └── preloader.css   # Page loader animation
│   ├── js/
│   │   ├── app.js          # Core site behavior
│   │   ├── project.js      # Project card rendering
│   │   ├── education.js    # Education timeline behavior
│   │   ├── particle.js     # Particle background config
│   │   └── dynamicTitle.js # Dynamic browser tab title
│   └── images/              # Site images and icons
└── README.md
```

## Running Locally

Because the site loads local JS/CSS via relative paths, opening `index.html` directly (`file://`) in some browsers or editor preview tools can block those requests. To view it properly:

1. Install a local server tool, e.g. the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code.
2. Right-click `index.html` → **Open with Live Server**.
3. The site will open at `http://localhost:5500` (or similar) with all assets loading correctly.

## Editing Content

- **Projects** — edit the `projects` array in `assets/js/project.js` to add/update project cards (title, image, description, links).
- **Education** — edit the timeline items directly in `index.html` under the Education section.
- **About Me** — edit the paragraph text directly in `index.html` under the About Me section.
- **Contact form** — submissions are routed through Formcarry; update the `action` URL on the `<form>` element with your own Formcarry endpoint, and set your notification email in the Formcarry dashboard.

## Credits

- Original template: [Smaranjit Ghose's Portfolio Template](https://github.com/smaranjitghose) — licensed for free use and modification.
- Icons: [Font Awesome](https://fontawesome.com/), [Devicon](https://devicon.dev/)
- Animations: [AOS](https://michalsnik.github.io/aos/)

## License

This project is based on an open-source template. Please refer to the original template's license for terms of reuse and modification.
