<template>
  <div class="cart-inputs">
    <div class="form account-form">
      <div class="address">
        <p>
          <span class="data-name">Name: </span>
          <span class="data-value">{{ $store.state.userData.name }}</span>
        </p>
      </div>

      <div class="address">
        <p>
          <span class="data-name">Phone number: </span>
          <span class="data-value">{{ $store.state.userData.phone }}</span>
        </p>
      </div>

      <div class="address">
        <p>
          <span class="data-name">Address: </span>
          <span class="data-value">{{
            $store.state.userData.address.street
          }}</span
          >,
          <span class="data-value">{{
            $store.state.userData.address.apartment
          }}</span>
        </p>
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
  name: "CartRegisteredUser",
};
</script>

<style scoped>
.cart-inputs {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
