const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Home.vue") }],
  },
  {
    path: "/Home",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Home.vue") }],
  },
  {
    path: "/Questions",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Questions.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
