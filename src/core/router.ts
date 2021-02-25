import Component from "./Component";

interface Route {
  path: string;
  component: typeof Component;
}

const navigateTo = (url: string) => {
  history.pushState(null, null, url);
  router();
};

const router = async (): Promise<void> => {
  const routes: Route[] = [
    {
      path: "/converter",
      component: Component,
    },
    {
      path: "/currencies",
      component: Component,
    },
  ];

  const potentialMatches = routes.map((route) => ({
    route,
    isMatch: location.pathname === route.path,
  }));

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
    navigateTo(routes[0].path);
  }

  let view = new match.route.component;

  document.querySelector("#router-view").innerHTML = await view.render();
};

export const createRouter = () => {
  window.addEventListener("popstate", router);

  document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
      console.log("click");
      const target = e.target as HTMLAnchorElement;
      if (target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(target.href);
      }
    });

    router();
  });
};
