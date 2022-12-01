<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <footer class="bg-[#000066] text-white p-3">
        <div class="container mx-auto grid gap-6">
            <div class="grid gap-6 md:gap-0 md:grid-flow-col md:justify-between">
                <div class="grid gap-1">
                    <p class="text-xl font-extrabold md:py-2">N.R.K.F DIGITAL SCHOOL</p>
                    <p>Reg No. 123456</p>
                    <div class="flex items-center space-x-4">
                        <Icon icon="mdi:map" />
                        <p>Sonatola Bondor, Sonatola 5826, Bogura</p>
                    </div>
                    <div class="flex items-center space-x-4">
                        <Icon icon="mdi:cellphone" />
                        <p>88 01700 123456</p>
                    </div>
                    <div class="flex items-center space-x-4">
                        <Icon icon="mdi:email" />
                        <p>mail@nrkfdigitalschool.edu.bd</p>
                    </div>
                </div>
                <div class="grid gap-1">
                    <p class="text-xl font-Impact md:py-2">Important Links</p>
                    <a href="http://dpe.gov.bd/" target="_blank">Primary Education Board</a>
                    <a href="http://rajshahiboard.gov.bd/" target="blank">Rajshahi Education Board</a>
                    <a href="https://www.teachers.gov.bd/" target="blank">Shikkhok Batayon</a>
                    <a href="http://konnect.edu.bd/" target="blank">Kishor Batayon</a>
                </div>
            </div>

            <div class="grid md:grid-flow-col md:justify-between text-center py-2 border-t">
                <p class="uppercase">2019-2023 © N.R.K.F DIGITAL SCHOOL</p>
                <p class="dev font-DancingScript">Designed &amp; Developed by <a class="text-red-500 font-bold"
                        href="http://khanshifaul.github.io">KhanShifaul</a></p>
            </div>
        </div>
    </footer>
</template>
