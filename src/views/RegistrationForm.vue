<template>
  <section class="account">
    <div class="account-decor">
      <img src="@/assets/signup-decor.jpg" alt="" />
    </div>

    <form class="form account-form" action="#">
      <h3 class="account-header">Create new account</h3>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button class="sign-btn">Sign up</button>
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
      userId: 1,
      name: "",
      email: "",
      password: "",
    };
  },
};
</script>

<style>
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
.sign-btn {
  background: #637a30;
  box-shadow: 0px 0px 30px rgba(99, 122, 48, 0.4);
  border-radius: 4px;
  width: 100%;
  height: 40px;
}
.account-policy a {
  color: #2a2e37;
}
</style>
