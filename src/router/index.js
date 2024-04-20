import { createWebHistory, createRouter } from "vue-router";
import Register from "../views/Register.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Banner from "../views/Banner.vue";
import Kontak from "../views/Kontak.vue";
import Checkout from "../views/Checkout.vue";
import Chard from "../views/Chard.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Create from "../views/Create.vue";
import store from "../store";

const routes = [
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
      path: "/produk",
      name: "Product",
      component: Product,
  },
  {
    path: "/",
    name: "Banner",
    component: Banner,
  },
  {
  path: "/singleproduct/:id",
  name: "SingleProduct",
  component: SingleProduct,
  },
  {
    path: "/kontak",
    name: "Kontak",
    component: Kontak,
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
      },
      {
        path: "/chard",
        name: "Chard",
        component: Chard,
        },
        {
          path: "/dashboard",
          name: "Dashboard",
          component: Dashboard,
          },
          {
            path: "/create",
            name: Create,
            component: Create,
          },
          // {
          //   path: "/todo",
          //   name: TodoItem,
          //   component: TodoItem,
          // },
        {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true},
          },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
      next("/"); // Redirect to Home
    } else {
      next();
    }
  });

  router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && store.getters["auth/isAuthenticated"]) {
      next("/login"); // Redirect to Home
    } else {
      next();
    }
  });

export default router;