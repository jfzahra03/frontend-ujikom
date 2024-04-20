<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <center><h2 class="text-2xl font-bold tracking-tight text-gray-900">All Produk</h2></center>
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 pt-2" @click="ShowReadMOre(SingleProduct)">
                <div v-for="product in getProduk" :key="product.id">
                    <router-link :to="{ name: 'SingleProduct', params: { id: product.id } }" class="group">
                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <!-- <img :src="product.image" -->
                            <img :src="product.foto" alt="Deskrsi Gambar" >
                        </div>
                        <p class="mt-1 text-lg font-medium text-gray-900"> {{ product.nama_produk }}</p>
                        <p class="mt-1 text-lg font-medium text-gray-900">Harga: {{ product.harga }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SingleProduct from './SingleProduct.vue';

export default {
    computed: {
        ...mapGetters('produk', ['getProduk']),
    },
    methods: {
        ...mapActions('produk', ['fetchProduk']),
    },
    mounted() {
        this.fetchProduk();
    },
}
</script>