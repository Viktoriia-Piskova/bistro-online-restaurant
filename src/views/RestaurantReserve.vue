<template>
  <h1>Restaurant</h1>
  <p class="rest-description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum
    neque sapiente, aliquid mollitia asperiores nisi ex placeat repellat
    corporis non corrupti repellendus laboriosam molestiae accusantium voluptate
    magnam. Velit, similique!
  </p>
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
      <button class="sign-btn">Reserve</button>
    </form>
  </section>
  <SliderOnMain />
</template>

<script>
import SliderOnMain from "@/components/SliderOnMain.vue";
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
  components: {
    SliderOnMain,
  },
};
</script>

<style scoped>
h1 {
  margin-top: 50px;
}
.account {
  display: flex;
  align-items: stretch;
  justify-content: center;
}
.account-decor {
  width: 50%;
  overflow: hidden;
}
.account-header {
  color: #2a2e37;
}
.account-decor img {
  height: 100%;
  overflow: auto;
  width: auto;
  float: right;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.form input {
  background: #dde1cd;
  border-radius: 4px;
  color: #000000;
  font-size: 20px;
  margin: 15px;
  padding: 5px 10px;
  height: 49px;
  width: 100%;
  margin: 10px auto;
}

.form input:focus {
  background: #f1f3e6;
  border: 1px solid #637a30;
  box-shadow: 0px 0px 10px rgba(106, 100, 173, 0.1);
  border-radius: 4px;
  outline: none;
}

.account-form {
  width: 50%;
  padding: 40px;
  background-color: #e8eae0;
  color: #000;
}
.address {
  width: 100%;
}
.sign-btn {
  background: #637a30;
  box-shadow: 0px 0px 30px rgb(99 122 48 / 40%);
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Prompt";
}
td {
  border: solid 1px black;
  height: 30px;
  width: 30px;
  background-color: #f000b8;
}

.account {
  flex-wrap: wrap;
}

.account-form {
  min-width: 280px;
}

.map {
  min-width: 280px;
  filter: grayscale(70%) invert(1) saturate(0.5) hue-rotate(129deg)
    contrast(0.8);
}

.rest-description {
  width: 80%;
  margin: 20px auto;
}

.sign-btn {
  margin: 10px auto;
}

@media only screen and (max-width: 900px) {
  .account-form {
    width: 100%;
  }
  .account-decor {
    width: 100%;
  }
}
</style>
