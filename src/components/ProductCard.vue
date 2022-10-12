<template>
  <div class="product">
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
      <button class="add_btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      // name: "Pad Thai Classic",
      // ingredients:
      //   "stir-fry dish made with rice noodles, shrimp, chicken, or tofu, peanuts,a scrambled egg and bean sprouts",
      // price: 50,
      // discount: 100,
      //dish: null,
    };
  },
  props: {
    dish: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product {
  width: 413px;
  background: #2a2e37;
  border: 2px solid #000000;
  border-radius: 15px;
  margin: 10px;
}
.product_photo {
  height: 50%;
}
.product_info {
  height: 50%;
  position: relative;
  padding: 20px;
  padding-bottom: 70px;
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
  width: 90px;
  background: #793ef9;
  border-radius: 5px;
  position: absolute;
  right: 20px;
}
.add_btn:hover {
  background: #f000b8;
}
.add_btn:active {
  background: #373738;
}
</style>
