import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Hello from './components/Hello'
import World from './components/World'

// install router
Vue.use(Router);


// routing
var router = new Router();

router.map({
  '': {
    component: Hello
  },
  'world': {
    component: World
  }
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
});

router.redirect({
  '*': ''
});

router.start(App, 'app');
