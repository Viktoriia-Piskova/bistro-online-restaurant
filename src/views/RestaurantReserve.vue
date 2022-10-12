<template>
  <h1>Restaurant</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum
    neque sapiente, aliquid mollitia asperiores nisi ex placeat repellat
    corporis non corrupti repellendus laboriosam molestiae accusantium voluptate
    magnam. Velit, similique!
  </p>
  <p>slider</p>
  <section class="account">
    <div class="account-decor map">
      <!-- <img src="./bistro-online-restaurant/src/assets/signup-decor.jpg" alt=""> -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.253897136056!2d98.98002301322974!3d18.786835065883682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a9c816c9ea9%3A0xaa117a6983df89a6!2sBistro%20Terrace%20Chiangmai!5e0!3m2!1sen!2sua!4v1665572282987!5m2!1sen!2sua"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <form class="form account-form" action="#">
      <h3 class="account-header">Reserve a table</h3>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <div class="form-date">
        <input type="date" />
        <input type="time" />
      </div>
      <div>
        <table>
          <tr>
            <td>
              <label>1 tb<input type="checkbox" value="1" id="1" /></label>
            </td>
          </tr>
        </table>
      </div>
      <button class="sign-btn">Reserve</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "RestaurantReserve",
  data() {
    return {
      name: "",
      email: "",
      date: "",
      time: "",
      table: "",
    };
  },
};
</script>

<style scoped>
td {
  border: solid 1px black;
  height: 30px;
  width: 30px;
  background-color: #f000b8;
}

.map {
  filter: grayscale(70%) invert(1) saturate(0.5) hue-rotate(129deg)
    contrast(0.8);
}
</style>
