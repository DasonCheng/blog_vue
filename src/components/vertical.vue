<template>
  <div class="left-side">
    <div class="ui vertical pointing menu">
      <template v-for="sort in sorts">
        <a v-link="{ name: 'articles_sort', params: { sort:sort.sort } , activeClass:'active' }" class="item">
          {{sort.description}}
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
  import {updateSort} from '../vuex/actions'
  export default{
    vuex: {
      getters: {
        sorts: state => state.sorts
      },
      actions: {
        updateSort
      }
    },
    ready(){
      this.$http.get('https://api.myour.cc/media/sort').then((response) => {
        this.updateSort(response.data)
      });
    }
  }
</script>
