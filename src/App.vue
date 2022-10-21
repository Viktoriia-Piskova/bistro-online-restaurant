<template>
  <header>
    <nav>
      <ul class="menu">
        <li>
          <router-link to="/"
            ><img src="@/assets/logo.png" alt="logo"
          /></router-link>
        </li>
        <li>
          <router-link to="/delivery">Delivery</router-link>
        </li>
        <li>
          <router-link to="/restaurant">Restaurant</router-link>
        </li>
      </ul>
      <ul class="user">
        <li>
          <router-link to="/profile">Profile</router-link>
        </li>
        <li class="cart-link" @add_to_cart="addToCart">
          <router-link to="/cart"
            >Cart {{ $store.state.cardQuantity }}</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
  <router-view />
  <SiteFooter />
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
export default {
  data() {
    return {
      cart: [],
    };
  },
  components: {
    SiteFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #3d4451;
}

body,
body * {
  box-sizing: border-box;
  border: none;
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: "Roboto", sans-serif;
  line-height: 1;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
  display: block;
}

li {
  display: block;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

img {
  width: 100%;
  height: auto;
}

section {
  padding: 100px 10%;
}

button {
  height: 40px;
  transition: all 300ms;
  font-size: 20px;
  padding: 10px;
}

.pink {
  color: #f000b8;
}

h1 {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #ffffff;
}

h2 {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 800;
  font-size: 38px;
  line-height: 48px;
  text-align: center;
  margin: 20px 0px;
}

h3 {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
}

h6 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 28px;
  margin: 10px 0px;
}

p {
  font-family: "Prompt";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin: 10px 0px;
  text-align: center;
  color: #ffffff;
}
a {
  text-decoration: none;
  font-style: inherit;
}
header nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Prompt";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin: auto;
}

header {
  background: #2a2e37;
}

.menu li {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0px 20px;
}

.menu li a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

.user li a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

.menu li:hover {
  background-color: #3d4451;
}
.menu {
  display: flex;
  align-items: center;
}

.user {
  display: flex;
  align-items: center;
  gap: 50px;
}

.user li {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0px 20px;
}

.user li:hover {
  background-color: #3d4451;
}

.products-wrapper {
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-items: center;
  align-items: center;
  padding: 50px 0px;
}

@media only screen and (max-width: 1500px) {
  .products-wrapper {
    grid-template-columns: auto auto;
  }
}

@media only screen and (max-width: 600px) {
  .products-wrapper {
    grid-template-columns: auto;
  }
  section {
    margin: auto;
    padding: 0px;
  }
  header {
    display: none;
  }
}

.cart-link {
  background-color: #f000b8;
}
</style>
