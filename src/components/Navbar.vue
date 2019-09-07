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
            <a class="nav-link smoth-scroll" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-scroll" href="/people">People</a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-scroll" href="publication">Publication</a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-scroll" href="contact">Contact</a>
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