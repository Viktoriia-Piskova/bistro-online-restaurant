<template>
  <div class="cart-inputs">
    <div class="cart-address">
      <div>
        <label>
          Your name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value="Test user name"
          />
        </label>
        <label>
          Phone number
          <input type="tel" name="tel" id="tel" placeholder="+380-000-00-00" />
        </label>
      </div>

      <div>
        <label>
          Street name
          <input
            type="text"
            name="street"
            id="street"
            placeholder="Street name"
            value="Street"
          />
        </label>
        <label
          >Appartment<input
            type="text"
            class="input-small"
            name="apartment"
            placeholder="456"
        /></label>
      </div>
    </div>
    <div>
      <h6>Click to save this data into profile</h6>
      <button class="donate-btn">
        <router-link to="/profile">Save</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartNonRegisteredUser",
};
</script>

<style scoped>
.cart-inputs {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.select-time {
  width: 50%;
  padding: 10px;
  color: black;
  border: none;
  font-size: 20px;
}

input {
  color: #000;
  font-size: 20px;
  padding: 20px;
  margin: 10px;
}
.cart-address div {
  display: flex;
  flex-wrap: wrap;
}

.input-small {
  width: 100px;
}

label {
  font-family: "Prompt";
  font-size: 20px;
  font-size: 20px;
  display: grid;
  justify-items: baseline;
}
</style>
