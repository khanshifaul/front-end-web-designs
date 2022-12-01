<script setup>
import HelloWorldCarouselVue from './HelloWorldCarousel.vue'
import HelloWorldLatestNoticeVue from './HelloWorldLatestNotice.vue';
</script>

<template>
  <section class="text-black p-3 md:p-0">
    <div class="container mx-auto">
      <div class="grid md:grid-cols-[3fr_1fr] h-full">

        <div class="flex flex-col space-y-3 bg-orange-200 p-3">
          <HelloWorldCarouselVue />
          <HelloWorldLatestNoticeVue />
        </div>

        <div class="bg-slate-50">
          <div class="md:p-3 text-center text-lg">
            <img class="border border-black rounded" src="@/assets/sample-img.png">
            <h3 class="text-xl font-semibold">Full Name</h3>
            <p>Chairman</p>
            <p>MSc. in Philosophy</p>
            <p>Dhaka University</p>
          </div>

          <div class="md:p-3 text-center text-lg">
            <img class="border border-black rounded" src="@/assets/sample-img.png">
            <h3 class="text-xl font-semibold">Full Name</h3>
            <p>Principal</p>
            <p>MSc. in Philosophy</p>
            <p>Dhaka University</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
