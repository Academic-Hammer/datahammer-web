<template>
  <div>
    <Banner class="banner-home" title="DataHammer">
      <p>
        Our research interests are mainly in natural language 
        processing and machine learning. We aim to build 
        efficient, effective and ethical models for computing 
        human languages.
      </p>
      <a href="contact" class="btn btn-white btn-circled">JOIN US!</a>
    </Banner> 
    <News></News>
  </div>
</template>

<script>
import Banner from "../Banner";
import News from "./News";

export default {
  name: "Home",
  components: {
    Banner,
    News,
  }
};
</script>
<style scoped>
.banner-home {
  background-image: url("https://datahammer.oss-cn-beijing.aliyuncs.com/banner/index-bg.png")
}
</style>