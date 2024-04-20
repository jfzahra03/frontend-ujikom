import { createStore } from "vuex";
import auth from "./modules/auth";
import produk from "./modules/product";

const store = createStore({
    modules: {
        auth,
        produk
    
    },
});

export default store;