<template>
  <section>
    <div class="ui container">
      <div>
        Clicked: {{ count }} times
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <input type="text" v-model="thiscount">
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .ui.table {
    text-align: center;
  }
</style>
<script>
  import {increment, decrement, updateCount} from '../vuex/actions'
  export default{
    route: {
      data(){
        document.setTitle('Test')
      }
    },
    vuex: {
      getters: {
        count: state => state.count
      },
      actions: {
        increment,
        decrement,
        updateCount
      }
    },
    computed: {
      thiscount: {
        get () {
          return this.count
        },
        set (val) {
          this.updateCount(val)
        }
      }
    },
    ready(){
      this.$http.get('https://api.myour.cc/media/test').then((response) => {
        this.updateCount(response.data)
      });
    }
  }
</script>
