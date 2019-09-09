<template>
  <section class="section-padding">
    <div class="container">
      <div class="row align-items-justify">
        <div class="col-lg-8 col-sm-12 col-md-8 mb-4">
          <h2 class="mb-3">Faculty</h2>
          <span class="h3 mb-4">
            <a :href="homepage" target="_blank">{{ name }}</a>
          </span>
          <p class="mb-4">{{ description }}</p>
          <span class="h5 mb-4">Research</span>
          <ul class="about-list2 my-4">
            <li class="mb-2" v-for="item in research" :key="item.id">
              <i class="icofont icofont-check-circled"></i>
              {{ item }}
            </li>
          </ul>
          <span class="h5 mb-4">Mail</span>
          <p>
            <a :href="'mailto:'+email">{{ email }}</a>
          </p>
          <span class="h5 mb-4">Homepage</span>
          <p>
            <a :href="homepage" target="_blank">{{ homepage }}</a>
          </p>
        </div>
        <div class="col-lg-4 col-md-4" style="margin-top: 50px;">
          <img :src="photo" alt width="250px" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import advisor from "@/data/advisor.json";
let newAdvisor = advisor
newAdvisor = {
  ...advisor,
  photo: require(`@/data/photos/${newAdvisor.photo}`)
};

export default {
  name: "Advisor",
  data() {
    return newAdvisor;
  }
};
</script>
