<template>
  <div>
    <Banner class="banner-contact" title="Join Us!"></Banner>
    <ContactInfo></ContactInfo>
  </div>
</template>

<script>
import Banner from "../Banner"
import ContactInfo from "./ContactInfo";

export default {
  name: "Contact",
  components: {
    Banner,
    ContactInfo
  }
};
</script>

<style scoped>
.banner-contact {
  background-image: url("https://datahammer.oss-cn-beijing.aliyuncs.com/banner/contact-bg.jpg")
}
</style>
