import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import article from './components/article_list'
import article_info from './components/article_info'
import signIn from './components/sign_in'
import signUp from './components/sign_up'
import test from './components/test'
import './bower_components/semantic/dist/semantic.min'
import './bower_components/semantic/src/semantic.less';

Vue.use(Router);
// routing
var router = new Router();

router.map({
  '/articles/:sort/:page': {
    name: 'article',
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

router.beforeEach(function () {
  window.scrollTo(0, 0)
});

router.redirect({
  '*': '/articles/all/1'
});

router.start(App, 'app');
