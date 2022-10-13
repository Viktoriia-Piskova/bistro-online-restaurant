<template>
  <section class="cart">
    <div class="cart-user">Hello user! {{ cartSum }} your items</div>
    <div class="cart-items">
      <table>
        <tr>
          <td>1</td>
          <td>Tom Yam soup</td>
          <td>quan 1</td>
          <td>sum 356</td>
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
  </section>
</template>

<script>
export default {
  name: "CartPage",
  data() {
    return {
      cartSum: this.$store.state.cart,
    };
  },
  created() {
    console.log(this.$store.state.cart);
  },
};
</script>
