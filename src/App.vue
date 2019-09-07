<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
@import "assets/bootstrap/css/bootstrap.css";
@import "assets/fonts/flaticon/flaticon.css";
@import "assets/css/all.css";
@import "assets/css/icofont.css";
@import "assets/font-awesome/css/font-awesome.css";
@import "assets/css/animate.min.css";
@import "assets/css/googlefonts.css";
@import "assets/css/style.css";
@import "assets/css/responsive.css";
</style>
