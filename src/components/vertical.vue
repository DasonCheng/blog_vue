<template>
  <div class="left-side">
    <div class="ui vertical pointing menu">
      <template v-for="sort in sorts">
        <a v-link="{ name: 'articles_sort', params: { sort:sort.sort } , activeClass:'active' }" class="item">
          {{sort.name}}
          <div class="ui black label">{{sort.count}}</div>
        </a>
      </template>
      <a class="item">
        <form action="" method="post" class="ui transparent icon input">
          <input type="text" name="searchKey" placeholder="Search ..."/>
          <i class="search icon"></i>
        </form>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @media only screen and (max-width: 767px) {
    .ui.menu .item:hover, .ui.vertical.menu .item:hover {
      background-color: transparent !important;
      color: rgba(0, 0, 0, 0.87) !important;
    }
    .ui.menu .active.item:hover, .ui.vertical.menu .active.item:hover {
      background-color: rgba(0, 0, 0, 0.05) !important;
      color: rgba(0, 0, 0, 0.95) !important;
    }
  }
</style>
<script>
  var sorts = [
    {
      sort: 'css',
      name: 'CSS',
      count: 100
    },
    {
      sort: 'javascript',
      name: 'JAVASCRIPT',
      count: 10
    },
    {
      sort: 'canvas',
      name: 'CANVAS',
      count: 10
    },
    {
      sort: 'php',
      name: 'PHP',
      count: 10
    },
    {
      sort: 'node',
      name: 'NODE',
      count: 10
    },
    {
      sort: 'mysql',
      name: 'MYSQL',
      count: 10
    },
    {
      sort: 'monogdb',
      name: 'MONOGDB',
      count: 10
    },
    {
      sort: 'markdown',
      name: 'MARKDOWN',
      count: 10
    },
    {
      sort: 'mac',
      name: 'MAC',
      count: 10
    },
    {
      sort: 'windows',
      name: 'WINDOWS',
      count: 10
    },
    {
      sort: 'suibi',
      name: '随笔',
      count: 1
    }
  ]
  export default{
    data(){
      return {
        sorts
      }
    }
  }
</script>
