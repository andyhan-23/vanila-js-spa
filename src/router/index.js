class Router {
  constructor() {
    this.routes = [];
  }

  addRoute(pattern, page) {
    const regexString = new RegExp(`^${pattern}`);
    this.routes.push({ regexString, page });
    return this;
  }

  setNotFound(page) {
    this.showNotFound = page;
    return this;
  }

  navigate(path) {
    let matched;
    const currentRoute = this.routes.find(value => {
      matched = path.match(value.regexString);
      if (matched) return true;
    });

    if (!matched) {
      this.showNotFound();
      return;
    }
    currentRoute.page(matched[1]);
  }

  start() {
    window.addEventListener("DOMContentLoaded", () => {
      this.navigate(window.location.pathname);
    });
    window.addEventListener("popstate", () => {
      this.navigate(window.location.pathname);
    });
  }
}

export default Router;
