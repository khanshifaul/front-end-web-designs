<script setup lang="ts">
</script>

<template>
  <section class="text-black p-3 md:p-0">
    <div class="container mx-auto">
      <div class="grid md:grid-cols-[3fr_1fr]">
        <div class="bg-orange-200">HomePage</div>
        <div class="bg-slate-50">
          <div class="md:p-3">
            <div class="border border-black rounded">
              <div class="text-center text-2xl font-semibold border-b-2 border-black py-2">Latest Notices</div>
              <div class="grid divide-y divide-solid divide-black">
                <a class="p-1 bg-slate-100 hover:font-semibold" href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </a>
                <a class="p-1 bg-slate-300 hover:font-semibold" href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </a>
                <a class="p-1 bg-slate-100 hover:font-semibold" href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </a>
                <a class="p-1 bg-slate-300 hover:font-semibold" href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </a>
                <a class="p-1 bg-slate-100 hover:font-semibold" href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </a>
                <a class="p-1 bg-slate-300 hover:font-semibold" href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </a>
              </div>
            </div>
          </div>
          <div class="md:p-3 text-lg">
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
