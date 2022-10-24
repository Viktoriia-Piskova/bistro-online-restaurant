<template>
  <h1>Welcome to delivery page!</h1>
  <div class="products-wrapper">
    <ProductCard v-for="dish in dishes" :key="dish.id" :dish="dish" />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import DishesService from "@/services/DishesService.js";
export default {
  name: "DeliveryPage",
  components: {
    ProductCard,
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
