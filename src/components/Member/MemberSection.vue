<template>
  <section id="doctors" class="section-padding pt-0">
    <div class="container">
      <h2 class="mb-3">{{ degree }}</h2>
      <div class="row">
        <div v-for="member in members" :key="member.id" class="col-lg-6 infobox">
          <div class="media img-block">
            <div class="avatar-wrap">
              <img :src="member.photo" :alt="member.name" class="avatar-img" />
              <br />
              <div class="btn-wrap">
                <a :href="member.homepage" target="_blank">
                  <span class="fa-stack fa-lg infobox1">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-home fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a :href="'mailto:'+member.email">
                  <span class="fa-stack fa-lg infobox1">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-envelope-o fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a :href="member.github" target="_blank">
                  <span class="fa-stack fa-lg infobox1">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </div>
            </div>
            <div class="media-body">
              <h4>
                <a :href="member.homepage" target="_blank">{{ member.name }}</a>
              </h4>
              <p>
                <b>Mail:&nbsp;</b>
                <a :href="'mailto:'+member.email">{{ member.email }}</a>
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
export default {
  name: "MemberSection",
  props: ["degree", "members"]
};
</script>

<style scoped>
.avatar-wrap {
  margin-right: 1rem;
}

.btn-wrap {
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
}
</style>
