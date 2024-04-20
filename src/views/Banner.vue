<template>
<Navbar></Navbar>
<div class="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20">
  <div class="mx-auto max-w-xl lg:max-w-screen-xl">
    <div class="mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-left">
      <div class="mb-6 max-w-xl">
        <div>
          <p class="bg-teal-accent-400 mb-4 inline-block rounded-full bg-green-200 px-3 py-px text-sm font-semibold tracking-wider text-green-900">This is Flippy</p>
        </div>
        <h2 class="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
          Azzahra
          <span class="inline-block text-pink-500">Butiq</span>
        </h2>
        <p class="text-base text-gray-700 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequuntur quaerat! Optio.</p>
      </div>
      
      </div>
    </div>
    <div class="hidden h-full justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:flex lg:w-1/2 lg:items-end lg:justify-start">
      <svg class="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="img1" x="0" y="0" width="1" height="1">
            <image x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMaxYMax slice" href="https://www.store-nabira.com/modules/ps_imageslider/images/aa787163dfd2fc6394fe1881c35c969aab0e8627_HIVER24%20EN%20copie.jpg" />
          </pattern>
        </defs>

        <path fill="url(#img1)" d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z" transform="translate(100 100)" />
      </svg>
    </div>
  </div>
  
<div class="grid grid-cols-2 md:grid-cols-2 gap-4">
    <div>
      <a href="./">
        <img class="h-auto max-w-full rounded-lg" src="../assets/abaya_kat.jpg" alt="">
        </a>
    </div>
    <div>
      <a href="./">
        <img class="h-auto max-w-full rounded-lg" src="../assets/kerudung-kat.jpg" alt="">
        </a>
    </div>
</div>
<br>
<br>
<br>
<br>
<center><p class="text-4xl font-black text-gray-900 dark:text-white">Koleksi Abaya Terbaru</p></center>
<section class="py-20">
  <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4" @click="ShowReadMOre(SingleProduct)">
    <div v-for="product in getProduk" :key="product.id">
      {{ product.name }} - {{ product.price }}
      <router-link :to="{ name: 'SingleProduct', params: { id: product.id } }" class="group">
    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <a href="/singleproduct">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="../assets/chafia.jpg" alt="" />
        </div>
        <div class="mt-1 p-2">
          <h3 class="text-xs font-semibold sm:text-sm md:text-base">
            <a href="/singleproduct" title="" class="">
              {{ product.nama_produk  }}
              </a>
              </h3>
          <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-pink-500">Harga : {{ product.harga }}</span>
            </p>
          </div>
        </div>
      </a>
    </article>
    </router-link>
    </div>
  </div>
  </section>

<center><p class="text-4xl font-black text-gray-900 dark:text-white">Koleksi Kerudung Terbaru</p></center>
<section class="py-20">
  <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">
    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="../assets/h-shawl.jpg" alt="" />
        </div>
        <div class="mt-1 p-2">
          <h3 class="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" class="">
              SHAWL GLOSSY
              </a>
              </h3>
          <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-pink-500">$850</span>
            </p>
          </div>
        </div>
      </a>
    </article>

    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="../assets/s-rssat.jpg" alt="" />
        </div>
        <div class="mt-1 p-2">
          <h3 class="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" class="">
              SHAWL SATIN
              </a>
              </h3>
          <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-pink-500">$450</span>
            </p>
          </div>
        </div>
      </a>
    </article>

    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="../assets/s-spandex.jpg" alt="" />
        </div>
        <div class="mt-1 p-2">
          <h3 class="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" class="">
              SHAWL SPANDEX
              </a>
              </h3>
          <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-pink-500">$1,450</span>
            </p>
          </div>
        </div>
      </a>
    </article>

  <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="../assets/pashmina-s.jpg" alt="" />
        </div>
        <div class="mt-1 p-2">
          <h3 class="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" class="">
              PASHMINA SHAWL
              </a>
              </h3>
          <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-pink-500">$1,450</span>
            </p>
          </div>
        </div>
      </a>
    </article>
  </div>
</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SingleProduct from './SingleProduct.vue';
import Navbar from '../components/Navbar.vue';

export default {
  components: {
     Navbar
  },
  data() {
    return {
      produk: [],
    };
  },
    computed: {
        ...mapGetters('produk', ['getProduk']),
    },
    methods: {
        ...mapActions('produk', ['fetchProduk']),
        async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/produk', {
          params: {
            limit: 3, // Ubah nilai limit sesuai kebutuhan
          },
        });
        this.products = response.data; // Simpan data produk ke dalam variabel products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
    mounted() {
        this.fetchProduk();
    },
}
</script>