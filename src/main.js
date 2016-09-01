import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import signIn from './components/signin.vue'
import signUp from './components/signup.vue'

// install router
Vue.use(Router);
// routing
var router = new Router();

router.map({
  'signin': {
    component: signIn
  },
  'signup': {
    component: signUp
  }
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
});

router.redirect({
  '*': 'signin'
});

router.start(App, 'app');
