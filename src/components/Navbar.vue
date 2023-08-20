<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link to="/" class="flex items-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX////z8/NbW1s7OzvS0tKJiYmGhobOzs78/PwAAAD4+Pjl5eXu7u719fXCwsJhYWHY2NiwsLB+fn6ZmZnf39/IyMi3t7dkZGSxsbFxcXHc3NxERESOjo4jIyMzMzM/Pz9sbGynp6dLS0uhoaEWFhZ5eXkvLy8fHx9TU1Poo35UAAADiklEQVR4nO3aCZOiOhSG4YiMBsImiCvdio4z/v9fODlg49JTdt/b7QLzPlVjydJT56sgISRKAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4IxuPq6d0Gpa6Wvk+KNL/Bqtei/9K1b9lx+PrvGrevH140n7EzrXjw9J+PT+xYT25ql9d3vYsglbfjd9l9BfOdN9fzk4bEobauVn/r0L+zbvEuo8Soxu+vqqDXuv+7sX9m0+8zs03vw+xdzE9YRaEg690b2quYUP27AovaTVN5uPEibepnefSm7l/Z1GGfe4FazSu5ZzA4eEzWVoBxSbiXrbl3iT4CFlfaOmDQO3zqLXXnNZ2p9gMvjbX7XJIWG47q/jhf3ix2lz3abLsDNPbf7L4cr0V5OoUNUV6jup7s5z6XSmVGZs3/7iqnmiJGHwWh76w5arEpq+UmMvUPmrUdoJZX/g5VVLdiRhnqqk3w9Kxz5fm7XsXvw09fGOJNSxs1ksNvIDVCN7wSp39dZJdCWhMnWHaD93Y9sNLgPbMVZ7upLw8N5UBk2O3G+C09FTy10+tZmdvcmcPMd0L2EZqf7Jc2kHE+7CdHv6Mr97CZfJ5my7cwnH2XJ8tqNzCcvdxViicwnnvy7Gg51L+PtySN+BhHv3KBl7o8Q9U7Y+oZ8NjrLJz2JwIXp0hV+jL14T7rLH1HE/r8mjK7gx86vNr34/Y7h+dAW3VrR6guIz4vHH57Savw8fXcKNBR/M0rRf3vnesBy2eqLwE/zLRxwA+F90szD47UV3M4TSpyed7/jLf/C0bHXhxK1jubN6Ii04foZRlFQLa2eunDKOchkBm2rNl5kZORTaE83D6v+MZBplqZT6I4tiGQ+WueyOqsF8lOZje8itz1GmnMpBmTxVszRKZV4q8bRKn7oZ57bhcmkHWZM3tTtmVcK8Tlj6UvzONlres9/G1YzbVhpPFhM70vKDVA2eOaFOq9+RVkOZupeGGp20YR4XC9v1N2/cjgmNfJPk7naUF0+c0F5httzMtmEwr/+p0VAO5NWsdlSvWJBzisBuLwrZa69Srfb11JtyM7XbPXNC3YuL6UTacTItnJ79MtnJ6tF8vg2kDTNpyyAu4kl1q6nasEpoNoUj61FsQrN/4oSiWRF0eL8dVrdUv1etMQn983NOtH55FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6bP30zI3bVguYzAAAAAElFTkSuQmCC" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JFZhraa Collections</span>
            </router-link>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div v-if="isAuthenticated" class="flex md:order-2">
                <button @click="logout" type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Logout
                </button>
            </div>
            <div v-else class="flex md:order-2">
                <router-link to="/login" type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login
                </router-link>
            </div>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                </ul>
            </div>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <router-link to="/produk">Produk</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('auth', ['isAuthenticated']),
    },
    methods: {
        ...mapActions('auth', ['logout']),
    },
};
</script>