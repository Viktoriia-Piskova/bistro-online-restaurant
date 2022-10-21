<template>
  <div class="tr">
    <div class="tr-name">
      <div class="td">{{ order.name }}</div>
      <div class="td">${{ order.price }}</div>
    </div>

    <div class="tr-sum">
      <div class="td quantity">
        <button class="cart-quantity decrease" @click="decreaseDish()">
          -
        </button>
        {{ order.inCart }}
        <button class="cart-quantity increase" @click="increaseDish()">
          +
        </button>
      </div>
      <div class="td">${{ order.inCart * order.price }}</div>
      <div class="td">
        <button class="cart-delete" @click="deleteFromCart">
          <svg
            fill="#f000b8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path
              d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DishInCart",
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  methods: {
    increaseDish() {
      this.$store.dispatch("addToCart", this.order);
    },
    decreaseDish() {
      this.$store.dispatch("decreaseDish", this.order);
    },
    deleteFromCart() {
      this.$store.dispatch("deleteFromCart", this.order);
    },
  },
};
</script>

<style>
.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr-sum,
.tr-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tr {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: #fff 1px solid;
}

@media only screen and (max-width: 890px) {
  .tr {
    grid-template-columns: 1fr;
  }
}

/* .cart-items table {
  width: 100%;
  font-size: 20px;
  font-family: "Roboto";
} */
.td {
  color: #fff8f8;
  padding: 16px;
  width: auto;
  font-size: 20px;
  font-family: "Prompt";
}
.cart-quantity,
.cart-delete {
  margin: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  font-size: 40px;
  font-weight: 1000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #f000b8;
  cursor: pointer;
}

.cart-quantity:hover,
.cart-delete:hover {
  background-color: rgba(255, 255, 255, 0.549);
}

.cart-quantity:active,
.cart-delete:active {
  background-color: rgb(255, 255, 255);
}
</style>
