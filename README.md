# Adrien Koumgang Tegantchouang: Portfolio

Personal portfolio of Adrien Koumgang Tegantchouang, software engineer based in Pisa, Italy, and MSc student in Artificial Intelligence and Data Engineering at the University of Pisa.

**Live site:** https://adrienkoumgangt.github.io/

The site shows my projects, my journey (from Cameroon to Pisa, Paris and back), my skills and how to contact me. I am looking for AI Engineer and AI/Software Architect roles.

## Pages

| Page | File | What it shows |
|---|---|---|
| Home | `index.html` | Introduction, featured projects, skills, what I am doing now, contact |
| Projects | `projects.html` | All personal, open-source and academic projects, with topic filters |
| Project detail | `project.html?id=<project-id>` | Problem, approach, result and code link for one project |
| Case study | `projects/<id>.html` | Full page for each featured project (`featured: true` in `data.js`) |
| Journey | `journey.html` | Timeline of my education and career |

## Project structure

```
.
├── index.html
├── projects.html
├── project.html
├── journey.html
├── resume.pdf          # the "Download resume" button links to it
└── assets/
    ├── data.js         # all the content: projects, skills, timeline, links
    ├── main.js         # builds the header, footer and page sections from data.js
    └── style.css       # layout, colors, typography, light and dark themes
```

## Update the content

All text that changes over time lives in `assets/data.js`. There is no build step.

- **Add a project:** add an object to the `projects` array with a unique `id`, `title`, `tags`, `status`, `summary`, `stack` and optionally `repo`, `problem`, `approach` and `result`. Empty fields are hidden on the detail page. The new project appears on the projects page and gets its own detail page at `project.html?id=<id>`.
- **Add a case-study page:** set `featured: true` on the project, add the optional fields (`role`, `highlights`, `diagram`, `decisions`, `result`, `lessons`), put the diagram image in `assets/img/`, then create `projects/<id>.html` by copying an existing one and changing the `data-id` and the title.
- **Update skills, timeline or "right now":** edit the `skills`, `journey` or `now` arrays.
- **Change contact links:** edit `email` and `links`.
- **Replace the resume:** put the new PDF at the repository root as `resume.pdf`.

## Run locally

```bash
git clone https://github.com/adrienKoumgangT/adrienkoumgangt.github.io.git
cd adrienkoumgangt.github.io
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy on GitHub Pages

1. The repository must be named `adrienkoumgangt.github.io` for a user site.
2. In **Settings > Pages**, set the source to **Deploy from a branch**, choose the `main` branch and the `/ (root)` folder.
3. Push to `main`. The site updates within a minute or two.

## Built with

- HTML, CSS and vanilla JavaScript, with no framework and no build tooling
- Fonts: Bricolage Grotesque and Newsreader, loaded from Google Fonts
- Automatic light and dark theme, responsive layout, keyboard focus styles and reduced-motion support

## Contact

- Email: adrientkoumgang@gmail.com
- LinkedIn: https://www.linkedin.com/in/adrien-koumgang-tegantchouang/
- GitHub: https://github.com/adrienKoumgangT

## License

MIT License
