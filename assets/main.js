(() => {
  const S = SITE, page = document.body.dataset.page, $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const nav = [["index.html", "Home", "home"], ["projects.html", "Projects", "projects"], ["journey.html", "Journey", "journey"]];
  const cur = k => (page === k || (page === "project" && k === "projects")) ? ' aria-current="page"' : "";
  $("#site-header").innerHTML = `<div class="accent" aria-hidden="true"></div><div class="wrap bar"><a class="brand" href="index.html">${esc(S.short)}</a><nav aria-label="Main">${nav.map(n => `<a href="${n[0]}"${cur(n[2])}>${n[1]}</a>`).join("")}<a href="index.html#contact">Contact</a></nav></div>`;
  $("#site-footer").innerHTML = `<div class="wrap">Adrien Koumgang Tegantchouang, Pisa, Italy. ${S.links.map(l => `<a href="${l[1]}" rel="noopener">${l[0]}</a>`).join(" ")}</div>`;
  const url = p => p.featured ? `projects/${p.id}.html` : `project.html?id=${p.id}`;
  const row = p => `<article class="row" data-tags="${esc(p.tags.join("|"))}"><div><h3><a href="${url(p)}">${esc(p.title)}</a></h3><p>${esc(p.summary)}</p></div><p class="meta">${esc(p.stack.join(", "))}<br>${esc(p.status)}${p.featured ? " · Case study" : ""}</p></article>`;
  const contact = `<section class="wrap" id="contact"><h2>Contact</h2><p>For roles, collaborations or questions, write to <a href="mailto:${S.email}">${S.email}</a>, or find me on ${S.links.map(l => `<a href="${l[1]}" rel="noopener">${l[0]}</a>`).join(", ")}.</p></section>`;
  const app = $("#app");

  if (page === "home") {
    app.innerHTML = `<section class="wrap"><h2>Featured projects</h2>${S.projects.filter(p => p.featured).map(row).join("")}<p><a href="projects.html">All projects</a></p></section>
    <section class="wrap"><h2>Skills</h2><dl class="skills">${S.skills.map(g => `<dt>${esc(g.g)}</dt><dd>${esc(g.i.join(", "))}</dd>`).join("")}</dl></section>
    <section class="wrap"><h2>Right now</h2><ul>${S.now.map(n => `<li>${esc(n)}</li>`).join("")}</ul></section>${contact}`;
  } else if (page === "projects") {
    const tags = [...new Set(S.projects.flatMap(p => p.tags))];
    app.innerHTML = `<section class="wrap"><h1 class="page">Projects</h1><p>Professional work is under client agreements, so this page shows personal, open-source and academic projects.</p>
    <div class="filters" role="group" aria-label="Filter by topic"><button aria-pressed="true" data-t="">All</button>${tags.map(t => `<button aria-pressed="false" data-t="${esc(t)}">${esc(t)}</button>`).join("")}</div>
    <div id="list">${S.projects.map(row).join("")}</div></section>`;
    document.querySelectorAll(".filters button").forEach(b => b.onclick = () => {
      document.querySelectorAll(".filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
      document.querySelectorAll("#list .row").forEach(r => r.hidden = b.dataset.t && !r.dataset.tags.split("|").includes(b.dataset.t));
    });
  } else if (page === "project") {
    const p = S.projects.find(x => x.id === (document.body.dataset.id || new URLSearchParams(location.search).get("id")));
    if (!p) app.innerHTML = `<section class="wrap"><h1 class="page">Project not found</h1><p><a href="../projects.html">Back to all projects</a></p></section>`;
    else {
      document.title = `${p.title} | Adrien Koumgang Tegantchouang`;
      const part = (h, t) => t ? `<h2>${h}</h2><p>${esc(t)}</p>` : "";
      const list = (h, a) => a && a.length ? `<h2>${h}</h2><ul>${a.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
      const fig = p.diagram ? `<h2>Architecture</h2><figure><img src="${esc(p.diagram)}" alt="${esc(p.diagramAlt || p.title + " architecture diagram")}"></figure>` : "";
      app.innerHTML = `<section class="wrap narrow"><p><a href="projects.html">All projects</a></p><h1 class="page">${esc(p.title)}</h1><p class="lead">${esc(p.summary)}</p><p class="meta">${esc(p.stack.join(", "))}. ${esc(p.status)}.</p>${part("My role", p.role)}${part("The problem", p.problem)}${part("The approach", p.approach)}${list("Highlights", p.highlights)}${fig}${list("Key decisions", p.decisions)}${part("The result", p.result)}${part("What I learned", p.lessons)}${p.repo ? `<p><a class="btn" href="${p.repo}" rel="noopener">View code on GitHub</a></p>` : ""}</section>`;
    }
  } else if (page === "journey") {
    app.innerHTML = `<section class="wrap narrow"><h1 class="page">Journey</h1><p>From a high-school diploma in Cameroon to AI and data engineering in Italy.</p><ol class="tl">${S.journey.map(j => `<li><span class="yr">${esc(j.y)}</span><h3>${esc(j.t)}</h3><p>${esc(j.p)}</p></li>`).join("")}</ol></section>`;
  }
})();
