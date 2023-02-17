import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ProductOrder from "../views/ProductOrder.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/product-Order",
      name: "productOrder",
      component: ProductOrder,
    },
  ],
});

router.beforeEach((to, from) => {
  let token = localStorage.getItem("access_token");
  if (token && to.name === "login") {
    return {
      path: "/product-Order",
    };
  } else if (token && to.name === "register") {
    return {
      path: "/product-Order",
    };
  } else if (!token && to.name === "productOrder") {
    return {
      path: "/login",
    };
  } else if (!token && to.path === "/") {
    return {
      path: "/login",
    };
  }
});

export default router;
