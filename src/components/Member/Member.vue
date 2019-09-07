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
    <Undergraduates></Undergraduates>
    <Directions></Directions>
  </div>
</template>

<script>
import Banner from "../Banner";
import Advisor from "./Advisor";
import Doctor from "./Doctor";
import Masters from "./Masters";
import Directions from "./Directions";
import Undergraduates from "./Undergraduates"

export default {
  name: "Member",
  components: {
    Banner,
    Advisor,
    Doctor,
    Masters,
    Directions,
    Undergraduates
  }
};
</script>
<style scoped>
.banner-people {
  background-image: url("~@/assets/img/banner/people-bg.jpeg")
}
</style>