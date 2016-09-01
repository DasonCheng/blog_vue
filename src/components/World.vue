<template>
  <div class="world">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello world!'
      }
    },
    route: {
      data () {
        document.title = 'World';
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: #42b983;
  }
</style>
