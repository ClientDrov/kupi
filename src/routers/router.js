import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import ListTicket from "../pages/ListTicket.vue";
import Payment from "../pages/Payment.vue";
import Summary from "../pages/Summary.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainPage,
  },
  {
    path: "/tickets/:departure/:arrival/:time/:adult/:child/:infant/:business/:city_departure/:city_arrival",
    name: "Tickets",
    component: ListTicket,
  },
  {
    path: "/summary/:depar/:return/:price/:airline_1/:depart_time/:arrival_time/:depart_city/:arrival_city/:fly_time",
    name: "Summary",
    component: Summary,
  },
  {
    path: "/payment/:depar/:return/:price",
    name: "Payment",
    component: Payment,
  },
  { path: "/:pathMatch(.*)*", component: MainPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
