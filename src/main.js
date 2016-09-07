import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'
import article from './components/article_list'
import article_info from './components/article_info'
import signIn from './components/sign_in'
import signUp from './components/sign_up'
import test from './components/test'
import './bower_components/semantic/dist/semantic.min'
import './bower_components/semantic/src/semantic.less';

Vue.use(VueResource);
Vue.use(Router);
// routing
var router = new Router();

router.map({
  '/articles/:sort/:page': {
    name: 'articles',
    component: article
  },
  '/article/:articleId': {
    name: 'info',
    component: article_info
  },
  '/signin': {
    component: signIn
  },
  '/signup': {
    component: signUp
  },
  '/test': {
    component: test
  }
});

router.alias({
  '/articles': '/articles/all/1',
  '/articles/:sort': '/articles/:sort/1'
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
});

router.redirect({
  '*': '/articles'
});

router.start(App, 'app');
