<script setup lang="ts">
import { Icon } from '@iconify/vue'

function toggleMobileNav() {
    let Navbar = document.getElementById('Navbar')
    Navbar?.classList.contains('hidden') ? Navbar?.classList.remove('hidden') : Navbar?.classList.add('hidden')
}
</script>

<template>
    <header class="bg-[#000066] text-white font-Impact p-3">
        <div class="container mx-auto space-y-6">
            <div class="grid grid-flow-col justify-between items-center my-3">
                <router-link
                    class="flex space-x-2 md:space-x-4 justify-around md:justify-start justify-items-center items-center"
                    :to="{ name: 'home' }">
                    <img class="w-12 md:w-24" src="@/assets/logo.png" alt="Logo">
                    <div>
                        <h1 class="uppercase text-center text-2xl md:text-4xl lg:text-5xl">N.R.K.F Digital School</h1>
                        <p>Sonatola, Bogura</p>
                    </div>
                </router-link>
                <Icon class="text-3xl md:hidden" icon="mdi:microsoft-xbox-controller-menu" @click="toggleMobileNav()" />
                <div class="hidden md:grid place-items-center w-full">
                    <div class="flex items-center justify-between text-orange-300 text-xl w-full h-12">
                        <router-link :to="{ name: 'notice' }">Notice</router-link>
                        <router-link :to="{ name: 'contact' }">Contact</router-link>
                        <router-link :to="{ name: 'help' }">Help</router-link>
                    </div>
                    <div id="search" class="flex space-x-4 items-center justify-items-center">
                        <input type="text">
                        <Icon class="text-3xl" icon="mdi:magnify-expand" />
                    </div>
                </div>
            </div>
            <nav id="Navbar" class="hidden md:flex justify-between text-xl">
                <div class="grid md:grid-flow-col md:space-x-1 lg:space-x-4">
                    <router-link class="px-2 border-b-2 border-transparent hover:border-[#FB2576]"
                        :to="{ name: 'home' }">Home</router-link>
                    <router-link class="px-2 border-b-2 border-transparent hover:border-[#FB2576]"
                        :to="{ name: 'about' }">About</router-link>
                    <router-link class="px-2 border-b-2 border-transparent hover:border-[#FB2576]"
                        :to="{ name: 'academic' }">Academic</router-link>
                    <router-link class="px-2 border-b-2 border-transparent hover:border-[#FB2576]"
                        :to="{ name: 'admission' }">Admission</router-link>
                    <router-link class="px-2 border-b-2 border-transparent hover:border-[#FB2576]"
                        :to="{ name: 'student' }">Student</router-link>
                    <router-link class="px-2 border-b-2 border-transparent hover:border-[#FB2576]"
                        :to="{ name: 'teacher' }">Teacher</router-link>
                    <router-link class="px-2 border-b-2 border-transparent hover:border-[#FB2576]"
                        :to="{ name: 'facilities' }">Facilities</router-link>
                </div>
                <div class="grid md:grid-flow-col md:space-x-1 lg:space-x-4">
                    <router-link class="px-2 border-b-2 border-transparent hover:border-[#FB2576]"
                        :to="{ name: 'login' }">Login</router-link>
                    <router-link class="px-2 border-b-2 border-transparent hover:border-[#FB2576]"
                        :to="{ name: 'register' }">Register</router-link>
                </div>
            </nav>
        </div>
    </header>
</template>
