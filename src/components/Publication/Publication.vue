<template>
  <div>
    <Banner class="banner-publication" title="Publication">
      <p>
        We are not the factory of the papers, but the 
        transmitter of the mind.
      </p>
    </Banner>
    <Papers></Papers>
  </div>
</template>

<script>
import Banner from "../Banner";
import Papers from "./Papers";
export default {
  name: "Publication",
  components: {
    Papers,
    Banner
  }
};
</script>

<style scoped>
.banner-publication {
  background-image: url("https://datahammer.oss-cn-beijing.aliyuncs.com/banner/publication-bg.jpg")
}
</style>