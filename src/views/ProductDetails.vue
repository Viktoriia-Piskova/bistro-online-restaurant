<template>
  <div v-if="dish" class="product">
    <div class="product_photo">
      <img class="product-img" :src="imgSource" alt="" />
    </div>
    <div class="product_info">
      <h6>{{ dish.name }}</h6>
      <p class="product_ingredients">{{ dish.ingredients }}</p>
      <ul class="product_nutrition">
        <li>Protein 7.5 grams</li>
        <li>Carbs 37 grams</li>
        <li>Fiber 6 grams</li>
        <li>Fat 0.8 grams</li>
      </ul>
      <div class="price">
        <span class="total-price">${{ dish.price }}</span>
        <span class="old-price"></span>
      </div>
      <button class="add_btn" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
import DishesService from "@/services/DishesService";
export default {
  name: "ProductDetails",
  props: ["id"],
  data() {
    return {
      dish: null,
    };
  },
  computed: {
    imgSource() {
      return require(`../assets/dishes/${this.dish.id}.jpg`);
    },
  },
  created() {
    console.log(this.dish);
    DishesService.getDish(this.id)
      .then((response) => {
        this.dish = response.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.dish);
    },
  },
};
</script>

<style scoped>
.product {
  background: #2a2e37;
  border: 2px solid #000000;
  border-radius: 15px;
  margin: 80px 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

@media only screen and (max-width: 1100px) {
  .product {
    margin: 80px 2px;
  }
  .add_btn {
    position: static;
    right: auto;
    width: 100%;
  }
}
.product_photo {
  height: auto;
  width: 100%;
}

.product-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.product_info {
  height: 50%;
  position: relative;
  padding: 20px;
  padding-bottom: 70px;
}

.product_nutrition {
  font-style: italic;
}
.product_ingredients {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 38px;
  text-align: left;
}
.price {
  margin: 10px 0px;
}
.total-price {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  color: #ff5724;
}
.old-price {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-decoration-line: line-through;

  color: rgba(209, 213, 219, 0.5);
}
.add_btn {
  height: 48px;
  background: #793ef9;
  border-radius: 5px;
}
.add_btn:hover {
  background: #f000b8;
}
.add_btn:active {
  background: #373738;
}
</style>
