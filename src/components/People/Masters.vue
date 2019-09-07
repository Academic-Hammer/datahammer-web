<template>
  <section class="section-padding pt-0">
    <div class="container">
      <h2 class="mb-3">Masters Students</h2>
      <div class="row">
        <div v-for="master in masters" :key="master.id" class="col-lg-6 infobox">
          <div class="media">
            <div>
              <img :src="master.photo" :alt="master.name" class="avatar-img" />
              <br />
              <a :href="master.homepage" target="_blank">
                <span class="fa-stack fa-lg infobox1">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-home fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a :href="'mailto:'+master.email">
                <span class="fa-stack fa-lg infobox1">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-envelope-o fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a :href="master.github" target="_blank">
                <span class="fa-stack fa-lg infobox1">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </div>
            <div class="media-body">
              <h4>
                <a :href="master.homepage" target="_blank">{{ master.name }}</a>
              </h4>
              <p>
                <b>Mail:</b>
                <a :href="'mailto:'+master.email">{{ master.email }}</a>
                <br />
                {{ master.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import masters from "@/data/masters.json";
const newMasters = masters.map(member => ({
  ...member,
  photo: require(`@/data/photos/${member.photo}`)
}));

export default {
  name: "Masters",
  data() {
    return {
      masters: newMasters
    };
  }
};
</script>