<template>
  <div class="home">
    <h1>This is HomeView</h1>

    <SiteFooter msg="Welcome to Your Vue.js App" />
    <ProductCard></ProductCard>
  </div>
</template>

<script>
// @ is an alias to /src
import SiteFooter from "@/components/SiteFooter.vue";
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "HomeView",
  components: {
    SiteFooter,
    ProductCard,
  },
};
</script>
