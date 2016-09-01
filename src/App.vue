<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
    <a v-link="{ path: '/' }">Go to Vue</a>
    <a v-link="{ path: '/world' }">Go to World</a>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>
