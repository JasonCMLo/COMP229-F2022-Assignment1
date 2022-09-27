// Functions to determine which view to render

export function homePage(req, res, next) {
  res.render("index", { page: "home" });
}

export function aboutPage(req, res, next) {
  res.render("index", { page: "about" });
}

export function contactPage(req, res, next) {
  res.render("index", { page: "contact" });
}

export function servicePage(req, res, next) {
  res.render("index", { page: "services" });
}

export function projectsPage(req, res, next) {
  res.render("index", { page: "projects" });
}
