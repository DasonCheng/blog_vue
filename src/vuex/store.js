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
  ],
  articles: [{
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
  }],
  pages: [
    1, 2, 3, 4, 5, 6
  ]
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
  }
};

// 创建 store 实例
export default new Vuex.Store({
  state,
  mutations
})
