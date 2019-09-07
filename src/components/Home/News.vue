<template>
  <section class="section-padding">
    <div class="container">
      <h2 class="mb-3">News</h2>
      <div class="row align-items-center"></div>
      <ul class="about-list2 my-4">
        <li v-for="item in news" :key="item.id" class="mb-2">
          <b>{{ item.date }}</b>
          &nbsp;
          <span v-html="item.content"></span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import news from "@/data/news.json";

export default {
  name: "News",
  data() {
    return {
      news: news
    };
  }
};
</script>