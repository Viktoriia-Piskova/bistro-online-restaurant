<template>
  <section class="account">
    <div class="form account-form" action="#">
      <h3 class="account-header">Hello, {{ $store.state.userData.name }}</h3>
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
      <div class="address">
        <p>
          <span class="data-name">Phone number: </span>
          <span class="data-value">{{ $store.state.userData.phone }}</span>
        </p>
      </div>
      <p class="account-policy"></p>
    </div>
    <div class="account-decor">
      <img src="@/assets/signup-decor.jpg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "UserRegistered",
  data() {
    return {
      userData: {
        name: null,
        phone: null,
        address: {
          street: "",
          apartment: "",
        },
      },
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch("addUser", this.userData);
    },
  },
};
</script>

<style scoped>
.account {
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
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
  align-items: flex-start;
  justify-content: space-around;
}

.account-form {
  width: 50%;
  padding: 40px;
  background-color: #e8eae0;
  color: #000;
}

.data-name {
  font-family: "Prompt";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 28px;
  margin: 10px 0px;
  color: #1d1e1d;
  text-align: left;
  display: block;
}

.data-value {
  font-family: "Prompt";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 28px;
  margin: 10px 0px;
  color: #5b875b;
}

.account-policy a {
  color: #2a2e37;
}
</style>
