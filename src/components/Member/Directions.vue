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
      <div class="images-row">
        <div v-for="direction in directions" :key="direction.id" class="images-wrap">
          <img :src="direction.image" :alt="direction.name" class="images"/>
          <p class="direction-title">{{ direction.direction }}</p>
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

<style scoped>
.images-row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.images-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.images {
  max-width: 150px;
}

.direction-title {
  font-size: 20px;
  color: black;
  margin: 1rem 0 0 0;
}
</style>