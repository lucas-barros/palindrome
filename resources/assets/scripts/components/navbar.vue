<template>
  <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <rotate-icon></rotate-icon> <span class="p-l-sm">Polidrome</span>
        </a>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <a class=" button is-primary is-rounded" target="_blank" href="https://github.com/lucas-barros/palindrome">
              <github-icon></github-icon> Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import RotateIcon from 'vue-feather-icons/icons/RotateCwIcon'
import GithubIcon from 'vue-feather-icons/icons/GithubIcon'

export default {
  name: 'navbar',
  components: {
    RotateIcon,
    GithubIcon,
  },
  mounted() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = document.querySelectorAll('.navbar-burger');
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-brand {
    .feather-rotate-cw {
      animation: rotate 0.8s infinite;
    }
  }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(36deg); }
  20% { transform: rotate(72deg); }
  30% { transform: rotate(108deg); }
  40% { transform: rotate(144deg); }
  50% { transform: rotate(180deg); }
  60% { transform: rotate(216deg); }
  70% { transform: rotate(252deg); }
  80% { transform: rotate(288deg); }
  90% { transform: rotate(324deg); }
  100% { transform: rotate(360deg); }
}
</style>
