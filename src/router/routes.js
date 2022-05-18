import QuestionPage from "pages/Question.vue";
const routes = [
  {
    path: "/",
    component: () => import("pages/Home.vue"),
  },
  {
    path: "/home",
    component: () => import("pages/Home.vue"),
  },
  {
    path: "/Question",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "/:id", component: QuestionPage }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
