<template>
  <div class="home">
    <MainBanner></MainBanner>
    <h1>Order dishes now!</h1>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";
import MainBanner from "@/components/MainBanner.vue";
export default {
  name: "HomeView",
  components: {
    ProductCard,
    MainBanner,
  },
};
</script>
