<template>
  <section>
    <div class="ui container article-info">
      <div class="ui piled segment">
        <h3 class="ui header">{{article.title}}</h3>
        <div class="article-info-header">
          <div class="ui mini horizontal divided list">
            <div class="item">
              <div class="content"><i class="user icon"></i>{{article.author}}</div>
            </div>
            <div class="item">
              <div class="content"><i class="unhide icon"></i>{{article.views}}</div>
            </div>
            <div class="item">
              <div class="content"><i class="wait icon"></i>{{article.date}}</div>
            </div>
          </div>
        </div>
        <div class="ui divider"></div>
        <div class="article-content">{{{article.content}}}</div>
      </div>
    </div>
  </section>
</template>
<style>
</style>
<script>
  import {updateArticle} from '../vuex/actions'
  export default {
    route: {
      data () {
        document.setTitle('最好的我们：在青春这条道路上,我们平凡而又坚定');
        this.$http.get('https://api.myour.cc/media/article/' + this.$route.params.articleId).then((response) => {
          this.updateArticle(response.data)
        });
      }
    },
    vuex: {
      getters: {
        article: state => state.article
      },
      actions: {
        updateArticle
      }
    }
  }
</script>
