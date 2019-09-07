<template>
  <div>
    <Banner class="banner-people" title="Get to Know Us!">
      <p>
        We are a tight-knit and highly motivated group of people working 
        on cutting-edge language tech. Take a look at our big family!
      </p>
    </Banner> 
    <Advisor></Advisor>
    <Doctor></Doctor>
    <Masters></Masters>
    <Directions></Directions>
  </div>
</template>

<script>
import Banner from "../Banner";
import Advisor from "./Advisor";
import Doctor from "./Doctor";
import Masters from "./Masters";
import Directions from "./Directions";

export default {
  name: "People",
  components: {
    Banner,
    Advisor,
    Doctor,
    Masters,
    Directions
  }
};
</script>
<style scoped>
.banner-people {
  background-image: url("~@/assets/img/banner/people-bg.jpeg")
}
</style>