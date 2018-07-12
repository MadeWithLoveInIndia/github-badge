import Vue from "vue";
import Router from "vue-router";
const Home = () => import("./views/Home.vue");
const About = () => import("./views/About.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/login"
    },
    {
      path: "/register"
    },
    {
      path: "/recover"
    },
    {
      path: "/reset"
    },
    {
      path: "/responsibilities"
    },
    {
      path: "/badges"
    },
    {
      path: "/industries"
    },
    {
      path: "/terms"
    },
    {
      path: "/privacy"
    },
    {
      path: "/cookies"
    },
    {
      path: "/a11y"
    },
    {
      path: "/cities"
    },
    {
      path: "/city/:city"
    },
    {
      path: "/people"
    },
    {
      path: "/profile/:username"
    },
    {
      path: "/startups",
      alias: "/projects"
    },
    {
      path: "/startups/:tag",
      alias: "/projects/:tag"
    },
    {
      path: "/startup/:slug",
      alias: "/project/:slug"
    },
    {
      path: "/blog"
    },
    {
      path: "/blog/:slug"
    }
  ]
});
