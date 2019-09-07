<template>
  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-sm-12">
          <div v-for="notice in notices" :key="notice.id" class="mb-5">
            <h2 class="mb-2">{{ notice.title }}</h2>
            <p>{{ notice.content }}</p>
          </div>
        </div>

        <div class="col-lg-5 pl-4 mt-4 mt-lg-0">
          <h4>Contact Mail</h4>
          <p class="mb-3">
            <a :href="email">{{ email }}</a>
          </p>
          <h4>Office Address</h4>
          <p class="mb-3">{{ officeAddress }}</p>
          <h4>Homepage</h4>
          <p class="mb-3">
            <a :href="homepage" target="_blank">{{ homepage }}</a>
          </p>
          <h4>Github</h4>
          <p>
            <a :href="github" target="_blank">{{ github }}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contact from "@/data/contact.json";

export default {
  name: "ContactInfo",
  data() {
    return contact;
  }
};
</script>