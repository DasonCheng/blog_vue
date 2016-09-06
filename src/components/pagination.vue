<template>
  <div class="ui pagination menu">
    <a class="item"><i class="caret left icon"></i></a>
    <div class="disabled item">1</div>
    <template v-for="page in pages">
      <a v-link="{ name: 'articles', params: { page: page }}" class="item">{{page}}</a>
    </template>
    <a class="item"><i class="caret right icon"></i></a>
  </div>
</template>
<style>
</style>
<script>
  export default{
    data(){
      return {
        pages: [
          2, 3, 4, 5, 6
        ]
      }
    }
  }
</script>
