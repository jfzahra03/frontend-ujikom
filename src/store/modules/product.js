import axios from "axios";

const produk = {
  namespaced: true,
  state: {
    produkData: [],
    singleProduk: null
  },
  getters: {
    getProduk: (state) => state.produkData,
    getSingleProduk: (state) => state.singleProduk,
  },
  actions: {
    async fetchProduk({ commit }) {
      try {
        const data = await axios.get("http://localhost:3000/api/v1/produk");
        commit("SET_PRODUK", data.data['data']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchSingleProduk({ commit }, produkid) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/produk/${produkid}`
        );
        commit("SET_SINGLE_PRODUK", response.data['data']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_PRODUK(state, produk) {
      state.produkData = produk;
    },
    SET_SINGLE_PRODUK(state, produk) {
      state.singleProduk = produk;
    },
  },
};

export default produk;