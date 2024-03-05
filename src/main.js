import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/css/style.css";

import App from "./App.vue";

import Index from "./views/Index.vue";
import CommunicationSearch from "./views/CommunicationSearch.vue";
import Letterman from "./views/Letterman.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/communication-search", component: CommunicationSearch },
  { path: "/letterman", component: Letterman },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
