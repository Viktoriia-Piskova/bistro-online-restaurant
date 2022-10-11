<template>
  <div class="home">
    <MainBanner></MainBanner>
    <h1>Order dishes now!</h1>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <SiteFooter msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteFooter from "@/components/SiteFooter.vue";
import ProductCard from "@/components/ProductCard.vue";
import MainBanner from "@/components/MainBanner.vue";
export default {
  name: "HomeView",
  components: {
    SiteFooter,
    ProductCard,
    MainBanner,
  },
};
</script>
