<template>
  <section>
    <div class="ui container">
      <p>{{ message }}</p>
      <input v-model="message">
    </div>
  </section>
</template>
<style>
</style>
<script>
  export default{
    data(){
      return {
        message: 'Hello Vue.js!'
      }
    },
    route: {
      data () {
        document.title = 'Test';
      }
    }
  }
</script>
