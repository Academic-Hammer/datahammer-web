<template>
  <Banner class="banner-404" title="404">
    <p>Page crashes w(ﾟДﾟ)w. We've sacrificed a programmer.</p>
  </Banner>
</template>

<script>
import Banner from "../Banner";

export default {
  name: "NotFound",
  components: {
    Banner
  }
};
</script>

<style scoped>
.banner-404 {
  background-image: url("https://datahammer.oss-cn-beijing.aliyuncs.com/banner/404-bg.jpg")
}
</style>