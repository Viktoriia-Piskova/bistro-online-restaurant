<template>
  <div class="product">
    <router-link :to="{ name: 'ProductDetails', params: { id: dish.id } }">
      <div class="product_photo">
        <img src="@/assets/dishes/d1.png" alt="" />
      </div>
      <div class="product_info">
        <h6>{{ dish.name }}</h6>
        <p class="product_ingredients">{{ dish.ingredients }}</p>
        <div class="price">
          <span class="total-price">${{ dish.price }}</span>
          <span class="old-price"></span>
        </div>
      </div>
    </router-link>
    <button class="add_btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {};
  },
  props: {
    dish: {
      type: Object,
      required: true,
    },
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
  max-width: 420px;
  min-width: 260px;
  background: #2a2e37;
  border: 2px solid #000000;
  border-radius: 15px;
  margin: 10px;
  padding: 15px;
}
.product_photo {
  height: 50%;
}
.product_info {
  height: 40%;
  padding: 20px;
}
.product_ingredients {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 38px;
  text-align: left;
  height: 220px;
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
  height: 50px;
  width: 120px;
  background: #793ef9;
  border-radius: 5px;
  margin: 10px;
}
.add_btn:hover {
  background: #f000b8;
}
.add_btn:active {
  background: #373738;
}
</style>
