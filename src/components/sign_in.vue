<template>
  <section>
    <div class="ui container">
      <div class="ui two column middle aligned very relaxed stackable grid">
        <div class="column">
          <form class="ui form error">
            <div class="field error">
              <label for="username">NAME</label>
              <div class="ui left icon input">
                <input id="username" type="text" name="username" placeholder="Your Name"/><i class="user icon"></i>
              </div>
            </div>
            <div class="ui error message">
              <p>You can only sign up for an account</p>
            </div>
            <div class="field">
              <label for="password">PASSWORD</label>
              <div class="ui left icon input">
                <input id="password" type="password" name="password" placeholder="Your Password"/>
                <i class="lock icon"></i>
              </div>
            </div>
            <button type="submit" class="ui blue button">Sign in</button>
          </form>
        </div>
        <div class="ui vertical divider">OR</div>
        <div class="center aligned column">
          <a v-link="{ path: '/signup' }" class="ui big green labeled icon button">
            <i class="signup icon"></i>
            Sign Up</a>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
  @media only screen and (max-width: 767px) {
    .ui.button {
      display: block;
      width: 100% !important;
    }
    .ui.big.button, .ui.big.buttons .button, .ui.big.buttons .or {
      font-size: 1rem;
    }
  }

  .ui.two.column.middle.aligned.very.relaxed.stackable.grid {
    position: relative !important;
  }
</style>
<script>
  export default {
    route: {
      data () {
        document.title = 'Sign In';
      }
    }
  }
</script>
