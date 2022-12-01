<script setup>
import { RouterView } from 'vue-router'
import HelloWorldNavigationVue from './components/HelloWorldNavigation.vue';
import HelloWorldFooterVue from './components/HelloWorldFooter.vue';
</script>

<template>
  <HelloWorldNavigationVue />
  <RouterView />
  <HelloWorldFooterVue />
</template>
