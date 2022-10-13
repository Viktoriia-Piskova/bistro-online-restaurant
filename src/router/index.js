import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DeliveryPage from "../views/DeliveryPage.vue";
import UserProfile from "../views/UserProfile";
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
  },
  {
    path: "/profile",
    name: "profile",
    component: UserProfile,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
  {
    path: "/delivery",
    name: "delivery",
    component: DeliveryPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
