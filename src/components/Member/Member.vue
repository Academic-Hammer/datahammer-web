<template>
  <div>
    <Banner class="banner-people" title="Get to Know Us!">
      <p>
        We are a tight-knit and highly motivated group of people working 
        on cutting-edge language tech. Take a look at our big family!
      </p>
    </Banner> 
    <Advisor></Advisor>
    <MemberSection degree="Ph.D Students" :members="doctors"></MemberSection>
    <MemberSection degree="Master Students" :members="masters"></MemberSection>
    <MemberSection v-if="false" degree="Undergraduate Students" :members="undergraduates"></MemberSection>
    <Directions></Directions>
  </div>
</template>

<script>
import Banner from "../Banner";
import Advisor from "./Advisor";
import MemberSection from "./MemberSection"
import Directions from "./Directions";

import doctors from "@/data/doctors.json";
const newDoctors = doctors.map(member => ({
  ...member,
  photo: require(`@/data/photos/${member.photo}`)
}));

import masters from "@/data/masters.json";
const newMasters = masters.map(member => ({
  ...member,
  photo: require(`@/data/photos/${member.photo}`)
}));

import undergraduates from "@/data/undergraduates.json";
const newUndergraduates = undergraduates.map(member => ({
  ...member,
  photo: require(`@/data/photos/${member.photo}`)
}));

export default {
  name: "Member",
  data() {
    return {
      doctors: newDoctors,
      masters: newMasters,
      undergraduates: newUndergraduates
    }
  },
  components: {
    Banner,
    Advisor,
    MemberSection,
    Directions
  }
};
</script>
<style scoped>
.banner-people {
  background-image: url("https://datahammer.oss-cn-beijing.aliyuncs.com/banner/people-bg.jpeg")
}
</style>