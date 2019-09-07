<template>
  <section id="service-2" class="section-padding">
    <div class="container">
      <div v-for="yearPapers in papers" :key="yearPapers.id">
        <h2 class="mb-3">{{ yearPapers.year }}</h2>
        <div class="row justify-content-left">
          <div v-for="paper in yearPapers.papers" :key="paper.id" class="col-lg-4 col-md-6">
            <div class="service-box-2">
              <h4>
                <a :href="paper.url" target="_blank">{{ paper.title }}</a>
              </h4>
              <p>
                <b>{{ paper.authors[0] }}</b>
                ,
                {{ paper.authors.slice(1).join(', ') }},
                {{ paper.venue }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import papers from "@/data/papers.json";

export default {
  name: "Papers",
  data() {
    return {
      papers: papers
    };
  }
};
</script>