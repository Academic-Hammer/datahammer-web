<template>
  <div class="banner-area banner">
    <div class="overlay"></div>
    <div class="banner-content">
      <h1 class="banner-title">{{ title }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: ["title", "image", "content"]
};
</script>

<style lang="scss" scoped>
.banner {
  background-size: cover;
  background-position: center;
  position: relative;

  padding: 250px 0px 180px;
  
  .banner-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 50%;
    margin: auto;
  }
}
</style>