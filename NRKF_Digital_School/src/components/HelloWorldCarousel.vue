<template>
    <div class="grid max-h-[60%]">
        <swiper :spaceBetween="30" :effect="'fade'" :navigation="true" :pagination="{cickable: true}"
            :autoplay="{ delay: 1500, disableOnInteraction: true }" :modules="modules" class="mySwiper">
            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide>
            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
            <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, EffectFade, Navigation, Pagination],
        };
    },
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
}
</style>