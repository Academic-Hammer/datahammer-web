<template>
  <nav
    class="navbar navbar-expand-lg fixed-top trans-navigation"
    :class="{ 'header-white' : showBg }"
  >
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <i class="fa fa-bars"></i>
        </span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="mainNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link smoth-scroll" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link smoth-scroll" to="/member">Member</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link smoth-scroll" to="publication">Publication</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link smoth-scroll" to="contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showBg: false
    };
  },
  methods: {
    handleScroll() {
      this.showBg = window.scrollY > 70;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>