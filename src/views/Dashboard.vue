<template>
  <div>
    <div class="dropdown">
      <button class="dropbtn" @click="toggleDropdown">Produk</button>
      <div class="dropdown-content" v-if="showDropdown">
        <div v-for="product in products" :key="product.id">
          <a href="#" @click="selectProduct(product)">{{ product.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showDropdown: false,
      products: [],
    };
  },
  methods: {
    async toggleDropdown() {
      if (!this.showDropdown) {
        await this.fetchProducts();
      }
      this.showDropdown = !this.showDropdown;
    },
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    selectProduct(product) {
      // Lakukan sesuatu ketika produk dipilih, misalnya menampilkan detail produk di bagian lain halaman
      console.log('Selected product:', product);
    },
  },
};
</script>

<style scoped>
/* Gaya CSS untuk dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}
</style>
