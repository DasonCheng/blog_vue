<template>
  <div class="ui pagination menu">
    <a v-link="{ name: 'articles', params: { page: parseInt($route.params.page)-1 } }" class="item"><i class="caret left icon"></i></a>
    <template v-for="page in pages">
      <a v-link="{ name: 'articles', params: { page: page },activeClass:'disabled'}" class="item">
        {{page}}</a>
    </template>
    <a v-link="{ name: 'articles', params: { page: parseInt($route.params.page)+1 } }" class="item"><i class="caret right icon"></i></a>
  </div>
</template>
<style>
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
