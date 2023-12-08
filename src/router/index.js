import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue';
import SearchByIngredients from './views/SearchByIngredients.vue';
import SearchByLetter from './views/SearchByLetter.vue';
import SearchByMeal from './views/SearchByMeal.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/meal/:meal",
    name: "byMeal",
    component: SearchByMeal,
  },
  {
    path: "/ingredients/:ingredients",
    name: "byIngredients",
    component: SearchByIngredients,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: SearchByLetter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
