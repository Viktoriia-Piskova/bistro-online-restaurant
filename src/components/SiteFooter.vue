<template>
  <footer>
    <div class="contacts">
      <p>Location</p>
      <p>Call +01 1234567890</p>
      <p>foodOnline@gmail.com</p>
    </div>

    <div class="copyright">
      <div>Logo</div>
      <p>
        Necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with
      </p>
      <div>social media</div>
    </div>

    <div class="schedule">
      <h4>Visit us</h4>
      <p>daily</p>
      <p>from 4:00 till 8:00</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background-color: #2a2e37;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 100px 10%;
}
.contacts {
  width: 10%;
}
.copyright {
  width: 15%;
}
.schedule {
  width: 10;
}
</style>
