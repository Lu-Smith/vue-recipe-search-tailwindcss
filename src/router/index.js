import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue';
import SearchByIngredients from './views/SearchByIngredients.vue';
import SearchByLetter from './views/SearchByLetter.vue';
import SearchByMeal from './views/SearchByMeal.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/meal/:meal?",
        name: "byMeal",
        component: SearchByMeal,
      },
      {
        path: "/ingredients/:ingredients?",
        name: "byIngredients",
        component: SearchByIngredients,
      },
      {
        path: "/letter/:letter?",
        name: "byLetter",
        component: SearchByLetter,
      },
    ]
  },
  {
    path: "/guest",
    component: GuestLayout
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
