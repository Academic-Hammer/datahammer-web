<template>
  <section id="doctors" class="section-padding pt-0">
    <div class="container">
      <h2 class="mb-3">Ph.D Students</h2>
      <div class="row">
        <div v-for="member in doctors" :key="member.id" class="col-lg-6 infobox">
          <div class="media img-block">
            <div>
              <img :src="member.photo" :alt="member.name" class="avatar-img" />
              <br />
              <a v-bind:href="member.homepage" target="_blank">
                <span class="fa-stack fa-lg infobox1">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-home fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a v-bind:href="'mailto:' + member.email">
                <span class="fa-stack fa-lg infobox1">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-envelope-o fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a v-bind:href="member.github" target="_blank">
                <span class="fa-stack fa-lg infobox1">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </div>
            <div class="media-body">
              <h4>{{ member.name }}</h4>
              <p>
                <b>Mail:</b>
                <a v-bind:href="'mailto:' + member.email">{{ member.email }}</a>
                <br />
                {{ member.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import doctors from "@/data/doctors.json";
const newDoctors = doctors.map(member => ({
  ...member,
  photo: require(`@/data/photos/${member.photo}`)
}));

export default {
  name: "Doctor",
  data() {
    return {
      doctors: newDoctors
    };
  }
};
</script>
