<template>
  <section class="account">
    <div class="account-decor">
      <img src="@/assets/signup-decor.jpg" alt="" />
    </div>

    <form @submit.prevent="addUser" class="form account-form" action="#">
      <h3 class="account-header">Account data</h3>
      <input v-model="userData.name" type="text" placeholder="Name" required />
      <div class="address">
        <input
          v-model="userData.address.street"
          type="text"
          placeholder="Street name"
          required
        />
        <input
          v-model="userData.address.apartment"
          type="text"
          placeholder="app №"
        />
      </div>
      <input
        v-model="userData.phone"
        type="tel"
        placeholder="099 123 45 67"
        required
      />
      <button type="submit" class="sign-btn">Sign up</button>
      <p class="account-policy">
        <a href="https://en.wikipedia.org/wiki/Terms_of_service"
          >Terms of service</a
        >
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: "RegistrationForm",
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
      this.$emit("changeEditable");
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
.account-policy a {
  color: #2a2e37;
}

@media only screen and (max-width: 900px) {
  .account-form {
    width: 100%;
  }
  .account-decor {
    display: none;
  }
}
</style>
