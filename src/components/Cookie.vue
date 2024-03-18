<template>
  <div v-if="!cookieConsentAccepted" class="cookie-consent">
    <p>This website uses cookies to ensure you get the best experience on our website.</p>
    <button @click="acceptCookies" class="btn">Accept Cookies</button>
    <button @click="declineCookies" class="btn">Decline Cookies</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      
    };
  },

  computed: {
    ...mapGetters(['cookieConsentAccepted'])
  },

  created() {
    // Check if the user has previously accepted or declined cookies
    const cookieConsent = this.getCookie('cookie_consent');
    if (cookieConsent === 'accepted' || cookieConsent === 'declined') {
      this.setCookieConsent(true);
    }
  },

  methods: {
    ...mapMutations(['setCookieConsent']),

    acceptCookies() {
      this.setCookie('cookie_consent', 'accepted', 365, 'Strict'); // Set cookie to expire in 365 days
      this.setCookieConsent(true); // Hide the cookie consent banner
      
    },
    declineCookies() {
      this.setCookie('cookie_consent', 'declined', 365, 'Strict'); // Set cookie to expire in 365 days
      this.setCookieConsent(true); // Hide the cookie consent banner
    },
    setCookie(name, value, days, sameSite) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = 'expires=' + date.toUTCString();
      document.cookie = name + '=' + value + ';' + expires + ';path=/';

      if (sameSite) {
        cookieString += `SameSite=${sameSite};`;
      }
    },
    getCookie(name) {
      const cookieName = name + '=';
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }
      return '';
    }
  }
};
</script>

<style scoped>
.cookie-consent {
  gap: 8px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
}
</style>
