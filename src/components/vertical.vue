<template>
  <div class="left-side">
    <div class="ui vertical pointing menu">
      <template v-for="sort in sorts">
        <a v-link="{ path: '/articles/'+sort.sort }" class="item">
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
<style>
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
