import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";
import update_rest from "./components/Update.vue";
import add_rest from "./components/Add.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "homeHome",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LogIn",
    component: LogIn,
    path: "/log-in",
  },
  {
    name: "Update",
    component: update_rest,
    path: "/Update_restaurant/:id",
  },
  {
    name: "Add",
    component: add_rest,
    path: "/Add_restaurant",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
