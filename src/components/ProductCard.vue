<template>
  <div class="product">
    <div class="product_photo">
      <img src="./bistro-online-restaurant/src/assets/pad-thai.png" alt="" />
    </div>
    <div class="product_info">
      <h6>Pad Thai Classic</h6>
      <p class="product_ingredients">
        stir-fry dish made with rice noodles, shrimp, chicken, or tofu, peanuts,
        a scrambled egg and bean sprouts
      </p>
      <div class="price">
        <span class="total-price">$50</span>
        <span class="old-price"></span>
      </div>
      <button class="add_btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
};
</script>
