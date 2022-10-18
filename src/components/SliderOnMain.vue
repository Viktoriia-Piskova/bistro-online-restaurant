<template>
  <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
    <SplideSlide>
      <img src="@/assets/slide1.jpg" alt="Restaurant photo 1" />
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/slide2.jpg" alt="Restaurant photo 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/slide3.jpg" alt="Restaurant photo 3" />
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/slide4.jpg" alt="Restaurant photo 4" />
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";
import "@splidejs/vue-splide/css";

export default defineComponent({
  components: { Splide, SplideSlide },
});
</script>
