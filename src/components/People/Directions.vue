<template>
  <section class="section-padding bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="mb-5">
            <h3 class="mb-2">Our Research</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="direction in directions" :key="direction.id" class="col-lg-3 col-md-6">
          <img :src="direction.image" :alt="direction.name" class="img-fluid rounded w-100" />
          <h4 class="mt-3">{{ direction.name }}</h4>
          <p>{{ direction.members.join(', ') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import directions from "@/data/directions.json";
const newDirections = directions.map(member => ({
  ...member,
  image: require(`@/data/directions/${member.image}`)
}));
export default {
  name: "Directions",
  data() {
    return {
      directions: newDirections
    };
  }
};
</script>