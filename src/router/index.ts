import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue';
import SearchByIngredient from './views/SearchByIngredient.vue';
import SearchByLetter from './views/SearchByLetter.vue';
import SearchByMeal from './views/SearchByMeal.vue';
import MealDetails from './views/MealDetails.vue';
import Login from './views/Login.vue';
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
        path: "/by-ingredients/:ingredients?",
        name: "byIngredients",
        component: SearchByIngredient,
      },
      {
        path: "/letter/:letter?",
        name: "byLetter",
        component: SearchByLetter,
      },
      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: MealDetails,
      },
    ]
  },
  {
    path: "/guest",
    component: GuestLayout,
    children: [
      {
        path: "/guest",
        name: "Login",
        component: Login,
      },
    ]
  },
  {
    // Wildcard route or 404 page 
    path: "/:catchAll(.*)",
    redirect: { name: "home" } 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
