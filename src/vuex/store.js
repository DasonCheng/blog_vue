// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 应用初始状态
const state = {
  strict: process.env.NODE_ENV !== 'production',
  count: 0,
  sorts: [
    {
      sort: 'article',
      description: 'ARTICLE',
      count: 0
    }
  ],
  articles: [{
    "id": 1,
    "title": "最好的我们：在青春这条道路上,我们平凡而又坚定",
    "description": "最好的时光 ﻿﻿ 一：路星河的56次求婚不敌余淮的一句：“ 耿耿，我来晚了。” 《 最好的我们》 结局是耿耿最后与余淮在一起了， 大批网友心痛路星河， 是的， 路星河是值得被心痛的， 一个看上去那么不正经的人...",
    "date": "2016-12-22"
  }],
  pages: []
};

// 定义所需的 mutations
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },
  UPDATEMESSAGE (state, message) {
    state.count = Number(message)
  },
  UPDATESORT (state, sorts) {
    state.sorts = JSON.parse(sorts)
  },
  UPDATEARTICLES(state, articles) {
    state.articles = JSON.parse(articles)
  }
};

// 创建 store 实例
export default new Vuex.Store({
  state,
  mutations
})
