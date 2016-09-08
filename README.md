# vue-blog

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

###router

```
router-conf
var router = new Router({
  // hashbang: false,
  history: true
});


//Nginx
location / {
    rewrite / /index.html;
    break;
}
```
