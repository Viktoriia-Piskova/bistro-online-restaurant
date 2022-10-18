<template>
  <section class="banner">
    <img src="@/assets/banner-background.jpg" alt="" />
    <div class="banner-caption">
      <h1 class="banner-caption-text">
        Discover the <span class="pink">flavors</span> of
        <span class="pink">food</span>fun
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainBanner",
};
</script>

<style scoped>
.banner {
  padding: 0px;
  position: relative;
}

.banner-caption {
  position: absolute;
  top: 27%;
  width: 100%;
  text-align: center;
  z-index: 1;
  background: none;
}

.banner-caption-text {
  background: none;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 6vw;
  line-height: 7vw;
  color: #ffffff;
  width: 40%;
  margin: auto;
}
</style>
