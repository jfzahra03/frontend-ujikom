<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div v-if="product">
                <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <!-- <img :src="product.image" -->
                            <img :src="product.image" alt="Product Image" >
                        </div>
                <!-- Tampilkan detail produk di sini -->
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">{{ product.nama_produk }}</h2>
                <p class="mt-1 text-lg font-medium text-gray-900">Harga: {{ product.harga }}</p>
                <h3 class="mt-1 text-sm text-gray-700">{{ product.deskripsi }}</h3>
                <!-- Tambahkan bagian lain dari detail produk di sini -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('produk', ['getSingleProduk']),
        product() {
            return this.getSingleProduk;
        },
    },
    methods: {
        ...mapActions('produk', ['fetchSingleProduk']),
    },
    mounted() {
        const produk_id = this.$route.params.id;
        console.log("Fetching single product with id:", produk_id);
        this.fetchSingleProduk(produk_id);
    },
}
</script>