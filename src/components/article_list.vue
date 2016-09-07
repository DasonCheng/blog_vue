<template>
  <section>
    <div class="ui container article-list">
      <div class="side-container clearfix">
        <leftside-component></leftside-component>
        <div class="right-side">
          <template v-for="article in articles">
            <a v-link="{ name: 'info', params: { articleId: article.id }}" class="ui link card">
              <div class="content">
                <div class="header">{{article.header}}</div>
                <div class="description">
                  <p>{{article.description}}</p>
                </div>
              </div>
              <div class="extra content">
              <span class="left floated">
                <i class="wait icon"></i>{{article.data}}
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
  var articles = [{
    "id": "1",
    "header": "最好的我们：在青春这条道路上,我们平凡而又坚定",
    "description": "最好的时光 ﻿﻿ 一：路星河的56次求婚不敌余淮的一句：“ 耿耿，我来晚了。” 《 最好的我们》 结局是耿耿最后与余淮在一起了， 大批网友心痛路星河， 是的， 路星河是值得被心痛的， 一个看上去那么不正经的人...",
    "data": "2016-12-22"
  }, {
    "id": "2",
    "header": "最好的我们：在青春这条道路上,我们平凡而又坚定",
    "description": "最好的时光﻿﻿ 一： 路星河的56次求婚不敌余淮的一句：“ 耿耿， 我来晚了。”《 最好的我们》 结局是耿耿最后与余淮在一起了， 大批网友心痛路星河， 是的， 路星河是值得被心痛的， 一个看上去那么不正经的人...",
    "data": "2016-12-22"
  }, {
    "id": "3",
    "header": "最好的我们：在青春这条道路上,我们平凡而又坚定",
    "description": "最好的时光﻿﻿ 一： 路星河的56次求婚不敌余淮的一句：“ 耿耿， 我来晚了。”《 最好的我们》 结局是耿耿最后与余淮在一起了， 大批网友心痛路星河， 是的， 路星河是值得被心痛的， 一个看上去那么不正经的人...",
    "data": "2016-12-22"
  }, {
    "id": "4",
    "header": "最好的我们：在青春这条道路上,我们平凡而又坚定",
    "description": "最好的时光﻿﻿ 一： 路星河的56次求婚不敌余淮的一句：“ 耿耿， 我来晚了。”《 最好的我们》 结局是耿耿最后与余淮在一起了， 大批网友心痛路星河， 是的， 路星河是值得被心痛的， 一个看上去那么不正经的人...",
    "data": "2016-12-22"
  }, {
    "id": "5",
    "header": "最好的我们：在青春这条道路上,我们平凡而又坚定",
    "description": "最好的时光﻿﻿ 一： 路星河的56次求婚不敌余淮的一句：“ 耿耿， 我来晚了。”《 最好的我们》 结局是耿耿最后与余淮在一起了， 大批网友心痛路星河， 是的， 路星河是值得被心痛的， 一个看上去那么不正经的人...",
    "data": "2016-12-22"
  }, {
    "id": "6",
    "header": "最好的我们：在青春这条道路上,我们平凡而又坚定",
    "description": "最好的时光﻿﻿ 一： 路星河的56次求婚不敌余淮的一句：“ 耿耿， 我来晚了。”《 最好的我们》 结局是耿耿最后与余淮在一起了， 大批网友心痛路星河， 是的， 路星河是值得被心痛的， 一个看上去那么不正经的人...",
    "data": "2016-12-22"
  }];
  export default{
    components: {
      leftsideComponent,
      paginationComponent
    },
    data(){
      return {articles: articles}
    },
    methods: {},
    route: {
      data () {
        document.title = 'Articles';
      }
    }
  }
</script>
