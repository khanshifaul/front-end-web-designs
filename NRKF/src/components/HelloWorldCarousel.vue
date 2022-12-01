<script setup lang="ts">
import Flickity from 'vue-flickity'
flickityOptions: {
        pageDots: false,
            wrapAround: true
}
</script>

<template>
    <!-- Slideshow container -->
    <div class="container mx-auto">
        <div class="h-96 bg-center bg-cover bg-carousel">
            Hello
        </div>
    </div>

    <flickity ref="flickity" :options="flickityOptions">
        <div class="carousel-cell">1</div>
        <div class="carousel-cell">2</div>
        <div class="carousel-cell">3</div>
        <div class="carousel-cell">4</div>
        <div class="carousel-cell">5</div>
    </flickity>
</template>

<style scoped>
.carousel-cell {
    width: 100%;
    height: 300px;
    margin-right: 10px;
    background: #8C8;
    border-radius: 5px;
}

.carousel-cell:before {
    display: block;
    text-align: center;
    line-height: 200px;
    font-size: 80px;
    color: white;
}
</style>