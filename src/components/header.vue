<template>
  <header>
    <div class="nav-bar-min">
      <div class="ui fixed inverted main menu">
        <div class="ui container">
          <a @click.stop="menu" href="javascript:void(0);" class="icon item">
            <i class="content icon"></i>
          </a>
          <div class="right menu">
            <div class="vertically fitted borderless item">
              <a v-link="{ path: '/signin' }">
                <i class="user icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-bar-max">
      <div class="ui inverted menu">
        <div class="ui container">
          <a v-link="{ path: '/article' }" class="item">Articles</a>
          <a v-link="{ path: '/test' }" class="item">Test</a>
          <div class="right menu">
            <a v-link="{ path: '/signin' }" class="ui item">
              <i class="user icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
  @media only screen and (min-width: 767px) {
    .nav-bar-min {
      display: none !important;
    }
  }

  @media only screen and (max-width: 767px) {
    header {
      height: 40px;
    }
    .nav-bar-max {
      display: none !important;
    }
  }

  header {
    .ui.menu {
      border-radius: 0 !important;
    }
  }
</style>
<script>
  export default{
    methods: {
      menu: function () {
        // 现在我们可以访问原生事件对象
        $('#left_bar').sidebar('toggle');
      }
    }
  }
</script>
