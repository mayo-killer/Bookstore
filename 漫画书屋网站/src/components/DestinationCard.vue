<template>
  <div class="destination-card">
    <img :src="image" :alt="name" class="destination-image">
    <h3>{{ name }}</h3>
    <p class="location">{{ location }}</p>
    <router-link :to="'/destination/' + id" class="details-btn">查看详情</router-link>
  </div>
</template>

<script>
export default {
  name: 'DestinationCard',
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.destination-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  width: 330px;
  height: 560px;
  margin: 15px;
}

.destination-card:hover {
  transform: translateY(-5px);
}

.destination-image {
 
  width: 100%;
  height: 415px;
  object-fit: cover;
}

.destination-card h3 {
  padding: 15px 15px 5px;
  margin: 0;
  font-size: 18px;
}

.location {
  padding: 0 15px;
  color: #666;
  font-size: 14px;
}

.details-btn {
  display: inline-block;
  margin: 15px;
  padding: 8px 15px;
  background-color: #8ab9d9;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.details-btn:hover {
  background-color: #369f6b;
}
</style>