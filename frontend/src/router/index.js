import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ProductOrder from "../views/ProductOrder.vue";
import OrderList from "../views/OrderList.vue";

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
      path: "/product-order",
      name: "productOrder",
      component: ProductOrder,
    },
    {
      path: "/order-list",
      name: "orderList",
      component: OrderList,
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
  } else if (!token && to.name === "orderList") {
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
