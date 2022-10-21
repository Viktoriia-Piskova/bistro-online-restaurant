<template>
  <section class="cart">
    <div class="cart-user">
      <h3>Hello, {{ userName || "dear" }}!</h3>
    </div>
    <div v-if="orders.length === 0" class="cart-user empty-order">
      <h3>Your cart is empty</h3>
      <h3>Add something delisious</h3>
      <button class="donate-btn">
        <router-link to="/delivery">Delivery</router-link>
      </button>
    </div>
    <div v-if="orders.length > 0">
      <form action="" @submit.prevent="sendOrder">
        <fieldset class="cart-items">
          <legend>Your order</legend>
          <table>
            <DishInCart
              v-for="order in orders"
              :key="order.id"
              :order="order"
            />
            <tr>
              <td colspan="6">
                <h6>Total: ${{ $store.state.cardCost }}</h6>
              </td>
            </tr>
          </table>
        </fieldset>
        <fieldset class="cart-delivery">
          <legend>Personal data and address</legend>
          <CartNonRegisteredUser v-if="!$store.state.userData.name" />
          <CartRegisteredUser v-if="$store.state.userData.name" />
        </fieldset>
        <fieldset class="cart-payment">
          <legend>Payment details</legend>
          <button class="g-pay">
            Pay with <span class="pink">G</span> pay
          </button>
          <p>or ented card credentials</p>
          <div class="pay-card">
            <div class="card-wrapper">
              <input type="text" placeholder="number" />
              <input type="text" placeholder="cardholder name" />
              <div class="card__expire">
                <select name="month" id="month" placeholder="month">
                  <option value="01">1</option>
                  <option value="02">2</option>
                  <option value="03">3</option>
                  <option value="04">4</option>
                </select>

                <select name="year" id="year">
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>
            </div>
          </div>
        </fieldset>
        <button type="submit" class="cart-confirm">Confirm order</button>
      </form>
    </div>
  </section>
</template>

<script>
import DishInCart from "@/components/CartPage/DishInCart.vue";
import CartNonRegisteredUser from "@/components/CartPage/CartNonRegisteredUser.vue";
import CartRegisteredUser from "@/components/CartPage/CartRegisteredUser.vue";

export default {
  name: "CartPage",
  data() {
    return {
      orders: this.$store.state.cart,
      userName: this.$store.state.userData.name,
    };
  },
  components: {
    DishInCart,
    CartNonRegisteredUser,
    CartRegisteredUser,
  },
  created() {
    console.log(this.order);
  },
  methods: {
    sendOrder() {
      return;
    },
  },
};
</script>

<style scoped>
.cart-items table {
  width: 100%;
  font-size: 20px;
  font-family: "Roboto";
}

.cart-items td {
  color: #fff8f8;
  background-color: #c0c0c04a;
  padding: 16px;
  width: auto;
  font-size: 32px;
  font-family: "Prompt";
}

input {
  color: #000;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
}

input[radio] {
  height: 10px;
  width: 10px;
}

select {
  color: #000;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
}

select * {
  color: #000;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
}

.g-pay {
  background-color: #000;
  max-width: 500px;
  margin: 10px auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-wrapper {
  background-color: #414f69;
  border-radius: 20px;
  max-height: 287px;
  max-width: 500px;
  margin: auto;
  box-shadow: #1a1818 3px 3px 5px;
  padding: 15px;
  display: grid;
}

.card__form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.card-submit {
  background-color: #000;
  margin: 20px auto;
}

.cart-confirm {
  height: 50px;
  max-width: 500px;
  background-color: rgb(15, 95, 15);
  margin: 20px auto;
  padding: 20px;
  display: flex;
  font-family: "Prompt";
  align-items: center;
  justify-content: center;
}

.cart-confirm:hover,
.cart-confirm:hover {
  background-color: rgb(74, 209, 74);
  margin: 20px auto;
}

legend {
  font-family: "Prompt";
  font-size: 30px;
  font-weight: 300;
  color: #adaaad94;
  text-transform: uppercase;
}

fieldset {
  border: 2px solid #adaaad94;
  margin: 20px auto;
  padding: 20px;
}

.cart-address {
  display: flex;
}

.input-small {
  width: 100px;
}

label {
  font-size: 20px;
  font-size: 20px;
  display: grid;
  justify-items: baseline;
}

.g-pay:active,
.g-pay:hover,
.card-submit:active,
.card-submit:hover {
  background-color: #fff;
  color: #000;
  transition: all 500ms;
}
</style>
