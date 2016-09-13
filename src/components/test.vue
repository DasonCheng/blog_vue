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
  import {increment, decrement, updateMessage} from '../vuex/actions'
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
        updateMessage
      }
    },
    computed: {
      thiscount: {
        get () {
          return this.count
        },
        set (val) {
          /*this.$http.get('http://node.blog.com/').then((response) => {
            this.updateMessage(response.data)
          }, (response) =>  {
            // handle error
          });*/
//          this.$http.get('http://api.blog.com/account/test').then((response) => {
//            this.updateMessage(response.data)
//          }, (response) =>  {
//            // handle error
//          });

          this.$http.post('http://node.blog.com/', {count: 123}, {
            headers: {'Content-Type': 'multipart/form-data'}
          }).then((response) => {
            console.log(response.data)
//            this.updateMessage(response.data)
          }, (response) => {
            // handle error
          });
//          this.$http.post('http://api.blog.com/account/up', {count: 123}, {
//            headers: {'Content-Type': 'multipart/form-data'}
//          }).then((response) => {
//            console.log(response.data)
////            this.updateMessage(response.data)
//          }, (response) => {
//            // handle error
//          });
        }
      }
    }
  }
</script>
