<template>
  <div class="ui pagination menu">
    <a v-link="{ name: 'articles_page', params: { page: parseInt($route.params.page)-1 } }" class="item"><i
      class="caret left icon"></i></a>
    <template v-for="page in pages">
      <a v-link="{ name: 'articles_page', params: { page: page },activeClass:'disabled'}" class="item">
        {{page}}</a>
    </template>
    <a v-link="{ name: 'articles_page', params: { page: parseInt($route.params.page)+1 } }" class="item"><i
      class="caret right icon"></i></a>
  </div>
</template>
<style lang="scss" scoped>
  @media only screen and (max-width: 767px) {
    .ui.menu .item:hover {
      background: none !important;
      color: rgba(0, 0, 0, 0.87) !important;
    }
    .ui.menu .item.disabled, .ui.menu .item.disabled:hover {
      color: rgba(40, 40, 40, 0.3) !important;
    }
  }
</style>
<script>
  export default{
    data(){
      return {
        pages: [
          1, 2, 3, 4, 5, 6
        ]
      }
    }
  }
</script>
