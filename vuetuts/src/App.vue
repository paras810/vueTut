<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Home from './components/Home.vue'
import WelcomeItem from './components/WelcomeItem.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <TheWelcome />
    <HelloWorld/>
    <WelcomeItem/>
    <Home/> 
  </main>
</template>


