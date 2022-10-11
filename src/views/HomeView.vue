<template>
  <div class="home">
    <MainBanner></MainBanner>
    <h1>Order dishes now!</h1>
    <ProductCard v-for="dish in dishes" :key="dish.id" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";
import MainBanner from "@/components/MainBanner.vue";
import DishesService from "@/services/DishesService.js";
export default {
  name: "HomeView",
  components: {
    ProductCard,
    MainBanner,
  },
  data() {
    return {
      dishes: null,
    };
  },
  created() {
    DishesService.getDishes()
      .then((response) => {
        this.dishes = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>
