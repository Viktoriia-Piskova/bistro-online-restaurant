<template>
  <div class="home">
    <MainBanner></MainBanner>
    <section class="promo">
      <img class="promo_image" src="@/assets/promo-dish.png" alt="" />
      <div class="promo_description">
        <h2>Special <span class="pink">breakfast</span></h2>
        <p>
          Created god gathered don't you yielding herb you had. And isn't, god
          was saw. Dominion. Great sixth for in unto was. Open can't tree am
          waters brought. Divide after there. Was.
        </p>
      </div>
    </section>
    <div class="products-wrapper">
      <ProductCard v-for="dish in dishes" :key="dish.id" :dish="dish" />
    </div>

    <section class="extra">
      <div class="extra-description">
        <h3>Charity food</h3>
        <p>
          Created god gathered don't you yielding herb you had. And isn't, god
          was saw. Dominion. Great sixth for in unto was. Open can't tree am
          waters brought. Divide after there. Was.
        </p>
        <button class="donate-btn">Donate</button>
      </div>
      <img class="extra-image" src="@/assets/promo-burger.png" alt="" />
    </section>

    <section class="reviews">
      <div class="review">
        <div class="review_content">
          <p class="review_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p class="review_rating">5</p>
        </div>
        <div class="review_author">Moana Michell</div>
      </div>
      <div class="review">
        <div class="review_content">
          <p class="review_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p class="review_rating">5</p>
        </div>
        <div class="review_author">Moana Michell</div>
      </div>
    </section>
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

<style>
.promo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #2a2e37;
}
.promo_image {
  width: 45%;
}
.promo_description {
  width: 45%;
}

.extra {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2a2e37;
}
.extra-image {
  width: 500px;
  height: auto;
}
.extra-description {
  display: flex;
  flex-direction: column;
  gap: 45px;
  align-items: center;
}
.donate-btn {
  background-color: #f000b8;
  height: 48px;
  width: 90px;
  border-radius: 5px;
  font-weight: 560;
}

.reviews {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 40px;
}

.review {
  background: #2a2e37;
  border-radius: 10px;
  padding: 30px;
}
.review_content {
  font-weight: 500;
  font-size: 25px;
}
</style>
