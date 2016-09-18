<template>
  <section>
    <div class="ui container article-list">
      <div class="side-container clearfix">
        <leftside-component></leftside-component>
        <div class="right-side">
          <template v-for="article in articles">
            <a v-link="{ name: 'info', params: { articleId: article.id }}" class="ui link card">
              <div class="content">
                <div class="header">{{article.title}}</div>
                <div class="description">
                  <p>{{article.description}}</p>
                </div>
              </div>
              <div class="extra content">
              <span class="left floated">
                <i class="wait icon"></i>{{article.date}}
              </span>
                <span class="right floated">
              <div data-rating="4" data-max-rating="5" class="ui heart rating"></div>
            </span></div>
            </a>
          </template>
          <pagination-component></pagination-component>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
  @media only screen and (min-width: 767px) {
    .side-container {
      .left-side {
        float: left;
        width: 16rem;
      }
      .right-side {
        margin-left: 17rem;
      }
    }
    .article-info {
      .ui.segment {
        padding: 5rem 2.5rem;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .side-container {
      .left-side {
        .ui.vertical.menu {
          width: auto;
        }
      }
      .right-side {

      }
    }
    .article-info {
      overflow: hidden;
      .ui.segment {
        padding: 3rem 1.6rem;
      }
    }
  }

  .side-container {
    .left-side {
      padding-top: 1rem !important;
    }
    .right-side {
      padding-top: 1rem !important;
      .ui.card, .ui.cards > .card {
        width: 100%;
        .header {
          font-weight: normal !important;
        }
      }
      a {
        span.right.floated,
        i.right.floated.wait.icon {
          color: #999;
        }
      }
      .ui.pagination.menu {
        float: right;
      }
    }
  }

  .article-info {
    h3 {
      text-align: center;
    }
    .article-info-header {
      text-align: center;
    }
    .ui.comments {
      max-width: none !important;
    }

    .article-content {
      text-align: justify;
      img {
        max-width: 100%;
      }
    }
  }
</style>
<script>
  import leftsideComponent from './vertical'
  import paginationComponent from './pagination'
  import {updateArticles} from '../vuex/actions'
  export default{
    components: {
      leftsideComponent,
      paginationComponent
    },
    route: {
      data () {
        document.setTitle('Articles')
        this.$http.get('https://api.myour.cc/media/articles/' + this.$route.params.sort + '/' + this.$route.params.page).then((response) => {
          this.updateArticles(response.data)
        });
      }
    },
    vuex: {
      getters: {
        articles: state => state.articles
      },
      actions: {
        updateArticles
      }
    }
  }
</script>
