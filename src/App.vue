<template>
  <div id="app">
    <sidebar-component></sidebar-component>
    <div class="pusher">
      <header-component></header-component>
      <router-view
        class="view"
        keep-alive
        transition
        transition-mode="out-in">
      </router-view>
      <footer-component></footer-component>
    </div>

  </div>
</template>

<script>
  import sidebarComponent from 'components/sidebar'
  import headerComponent from 'components/header'
  import footerComponent from 'components/footer'
  import store from './vuex/store'
  export default{
    components: {
      sidebarComponent,
      headerComponent,
      footerComponent
    },
    store
  }
</script>

<style lang="scss">
  .clearfix::after, .clearfix::before {
    content: '';
    display: block;
  }

  .clearfix::after {
    clear: both;
  }

  .clearfix {
    zoom: 1;
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }

  body, html {
    height: auto !important;
  }

  .ui.container {
    transition: width .6s;
  }

  section {
    min-height: 900px;
    padding: 2em 0;
  }
</style>
