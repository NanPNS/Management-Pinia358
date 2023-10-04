<script setup>
//import {ref} from 'vue'
//import store
import { useCounterStore } from '@/stores/counter'

//variable
//count x = ref(0)
const counterA = useCounterStore()

//function
</script>

<template>
  <div class="about">
    <h1>count = {{ counterA.count }}</h1>
    <h2>doubleCount = {{ counterA.doubleCount }}</h2>
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
