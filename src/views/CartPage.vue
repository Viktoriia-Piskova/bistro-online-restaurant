<template>
  <section class="cart">
    <div class="cart-user"><h3>Hello user! your items</h3></div>
    <div v-if="orders.length === 0" class="cart-user empty-order">
      <h3>Your cart is empty</h3>
      <p>Add something delisious</p>
    </div>
    <div v-if="orders.length > 0">
      <div class="cart-items">
        <table>
          <tr v-for="order in orders" :key="order.id">
            <td>1</td>
            <td>{{ order.name }}</td>
            <td>{{ order.price }}</td>
            <td>356</td>
            <td><button class="cart-delete">X</button></td>
          </tr>
        </table>
      </div>
      <div class="cart-total">
        <p>Total: 3479 sum</p>
      </div>
      <div class="cart-time">
        <form action="#">
          <select class="select-time" name="delivery-time" id="now">
            <option value="nearest">nearest</option>
            <option value="change-time">change time</option>
          </select>
        </form>
      </div>
      <div class="cart-payment">
        <button class="payment google"></button>
        <p>or ented card credentials</p>
        <div class="pay-card">
          <div class="card-wrapper">
            <form class="card__form" action="">
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
              <button class="submit-btn-active" type="submit">Confirm</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CartPage",
  data() {
    return {
      orders: this.$store.state.cart,
    };
  },
  created() {
    console.log(this.$store.state.cart);
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

.cart-delete {
  width: 50px;
  height: 50px;
  color: darkred;
  font-size: 20px;
  font-weight: 700;
  background: none;
}

.select-time {
  width: 50%;
  padding: 10px;
  color: black;
  border: none;
  font-size: 20px;
}

select * {
  color: #000;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
}

.card-wrapper {
  background-color: #793ef9;
  border-radius: 20px;
}
</style>
