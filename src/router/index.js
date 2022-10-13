import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationForm from "../views/RegistrationForm.vue";
import RestaurantReserve from "../views/RestaurantReserve.vue";
import CartPage from "@/views/CartPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component: RestaurantReserve,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>../views/RegisterUser.vue
    // import(/* webpackChunkName: "about" */ "../views"),
  },
  {
    path: "/register",
    name: "register",
    component: RegistrationForm,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
