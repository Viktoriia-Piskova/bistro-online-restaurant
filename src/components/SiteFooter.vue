<template>
  <footer>
    <div class="contacts">
      <p>
        <span>Bistro Chiangmai</span>
        <br />
        4/1 Samlarn Road,Amphoe Mueang<br />
        Chiang Mai, Thailand
      </p>
      <p class="pink"><a href="tel:+11234567890"> ✆ Call +01 1234567890</a></p>
      <p class="pink">
        <a href="mailto:foodOnline@gmail.com"> foodOnline@gmail.com</a>
      </p>
    </div>

    <div class="copyright">
      <div class="footer-logo"><img src="@/assets/logo.png" alt="logo" /></div>
      <p>
        Necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with
      </p>
      <div class="footer-social">
        <div class="social-circle">
          <a href="https://www.facebook.com/">
            <svg
              width="23"
              height="23"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.75 2.36399C12.75 1.24093 11.7591 0.25 10.636 0.25H2.11399C0.99093 0.25 0 1.24093 0 2.36399V10.886C0 12.0091 0.99093 13 2.11399 13H6.40803V8.17746H4.82254V6.06347H6.40803V5.20466C6.40803 3.75129 7.46503 2.49611 8.78627 2.49611H10.5039V4.6101H8.78627C8.58808 4.6101 8.38989 4.80829 8.38989 5.20466V6.06347H10.5039V8.17746H8.38989V13H10.636C11.7591 13 12.75 12.0091 12.75 10.886V2.36399Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
        <div class="social-circle">
          <a href="https://twitter.com/home">
            <svg
              width="23"
              height="23"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.95 2.175C14.42232.4 13.825 2.55 13.225 2.625C13.825 2.25 14.35 1.65 14.575 0.975002C13.975 1.35 13.375 1.575 12.625 1.725C12.1 1.125 11.275 0.75 10.45 0.75C8.79999 0.75 7.44999 2.1 7.44999 3.75C7.44999 3.975 7.45 4.2 7.525 4.425C5.05 4.275 2.8 3.075 1.3 1.275C1.075 1.725 0.924995 2.25 0.924995 2.775C0.924995 3.825 1.45 4.725 2.275 5.25C1.75 5.25 1.3 5.1 0.924995 4.875C0.924995 6.3 1.97499 7.575 3.32499 7.8C3.09999 7.875 2.8 7.875 2.5 7.875C2.275 7.875 2.125 7.875 1.9 7.8C2.275 9 3.4 9.9 4.75 9.9C3.7 10.725 2.425 11.175 1 11.175C0.775 11.175 0.55 11.175 0.25 11.1C1.6 11.925 3.175 12.45 4.9 12.45C10.45 12.45 13.45 7.875 13.45 3.9V3.525C14.05 3.3 14.575 2.775 14.95 2.175Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
        <div class="social-circle">
          <a href="https://www.instagram.com/">
            <svg
              width="23"
              height="23"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9356 0H1.81442C0.784614 0 0 0.784616 0 1.81442V10.9356C0 11.9654 0.784614 12.75 1.81442 12.75H10.9356C11.9654 12.75 12.75 11.9654 12.75 10.9356V1.81442C12.75 0.784616 11.9654 0 10.9356 0ZM6.375 10.2C8.48365 10.2 10.2 8.53269 10.2 6.52211C10.2 6.17885 10.151 5.78654 10.0529 5.49231H11.1317V10.6904C11.1317 10.9356 10.9356 11.1808 10.6413 11.1808H2.10866C1.86346 11.1808 1.61827 10.9846 1.61827 10.6904V5.44327H2.74616C2.64808 5.78654 2.59904 6.12981 2.59904 6.47308C2.55 8.53269 4.26635 10.2 6.375 10.2ZM6.375 8.72885C5.00192 8.72885 3.92308 7.65 3.92308 6.32596C3.92308 5.00192 5.00192 3.92308 6.375 3.92308C7.74808 3.92308 8.82692 5.00192 8.82692 6.32596C8.82692 7.69904 7.74808 8.72885 6.375 8.72885ZM11.0827 3.48173C11.0827 3.77596 10.8375 4.02115 10.5433 4.02115H9.17019C8.87596 4.02115 8.63077 3.77596 8.63077 3.48173V2.15769C8.63077 1.86346 8.87596 1.61827 9.17019 1.61827H10.5433C10.8375 1.61827 11.0827 1.86346 11.0827 2.15769V3.48173Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
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

footer p {
  font-family: "Prompt";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.contacts {
  width: 20%;
}
.copyright {
  width: 25%;
}
.footer-social {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.social-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  padding: 15px;
}

.social-circle:hover {
  background-color: #f000b8;
}

.social-circle:hover * {
  fill: #fff;
}
.schedule {
  width: 20%;
}
.footer-logo img {
  height: 100px;
  width: auto;
}
</style>
