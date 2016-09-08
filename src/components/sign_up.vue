<template>
  <section>
    <div class="ui container">
      <div class="ui two column middle aligned very relaxed stackable grid">
        <div class="column">
          <form class="ui form">
            <div class="field">
              <label for="username">NAME</label>
              <div class="ui left icon input">
                <input id="username" type="text" name="username" placeholder="Your Name"/>
                <i class="user icon"></i>
              </div>
            </div>
            <div class="field">
              <label for="password">PASSWORD</label>
              <div class="ui left icon input">
                <input id="password" type="text" name="password" placeholder="Your Password"/>
                <i class="lock icon"></i>
              </div>
            </div>
            <div class="field">
              <label for="passconf">PASSWORD</label>
              <div class="ui left icon input">
                <input id="passconf" type="text" name="passconf" placeholder="Your Password"/>
                <i class="lock icon"></i>
              </div>
            </div>
            <button type="submit" class="ui blue button">Sign Up</button>
          </form>
        </div>
        <div class="ui vertical divider">OR</div>
        <div class="center aligned column">
          <a v-link="{ path: '/signin' }" class="ui big green labeled icon button">
            <i class="sign in icon"></i>Sign In
          </a></div>
      </div>
    </div>
  </section>
</template>
<style>
</style>
<script>
  export default {
    route: {
      data () {
        document.setTitle('Sign Up');
      }
    }
  }
</script>
