<template>
  <div class="top-most">
    <header>
      <nav class="nav-wrap">
        <div class="branding">
          <router-link @click="scrollToSection('home')" class="" :to="{name: 'home'}">
            <img src="../assets/logo/FXT LOGO 1.png" alt="fxt logo">
          </router-link>
        </div>
        <div class="nav-links">
          <ul v-show="!mobile">
                  
            <li @click="scrollToSection('about')">
              <router-link class="link" :to="{name: 'about'}">Who we are</router-link>
            </li>

            <li @click="scrollToSection('fxt-store')">
              <router-link class="link" :to="{ name: 'fxt-store' }">FXT Store</router-link>
            </li>

            <li @click="scrollToSection('blog')">
              <router-link class="link" :to="{ name: 'blog' }">Blog</router-link>
            </li>

            <li @click="scrollToSection('faq')">
              <router-link class="link" :to="{ name: 'faq' }">Faq</router-link>
            </li>
          
            <!-- <a href="mailto:praiseadebayo218@yahoo.com">
              <base-button title="contact"/>
            </a> -->
            
          </ul>
        </div>
      </nav>

      <!-- mobile navigation -->
      <fa-icon 
        :icon="['fas', 'bars-staggered']" 
        class="menu-icon" 
        @click="toggleNav" 
        v-show="mobile"
      />

      <!-- transition for mobile nav -->
      <transition name="mobile-nav" >
        <div v-show="mobileNav" ref="mobileWrap" @click="checkClick" class="mobile-wrap">
          <div class="mobile-nav">

            <ul>
              <div class="branding">
                <router-link @click="mobileScrollToSection('home')" class="" :to="{name: 'home'}">
                  <img src="../assets/logo/fxt_logo.png" alt="fxt logo">
                </router-link>
              </div>

              <li @click="mobileScrollToSection('home')"  class="link mobile-link">
                <fa-icon :icon="['fas', 'house']" />
                <router-link :to="{ name: 'home' }">Home</router-link>
              </li>

              <li @click="mobileScrollToSection('about')"  class="link mobile-link">
                <fa-icon :icon="['far', 'address-card']" />
                <router-link :to="{ name: 'about' }">Who we are</router-link>
              </li>

              <li @click="mobileScrollToSection('blog')"  class="link mobile-link">
                <fa-icon :icon="['fas', 'newspaper']" />
                <router-link :to="{ name: 'blog' }">Blog</router-link>
              </li>

              <li @click="mobileScrollToSection('faq')"  class="link mobile-link">
                <fa-icon :icon="['fas', 'circle-question']" />
                <router-link :to="{ name: 'faq' }">FAQs</router-link>
              </li>
            
            
            </ul>

            <div class="socials">
              <a href="https://www.instagram.com/i_am_ken_jay?igsh=OTZkMnl3ZGE2azhi&utm_source=qr" target="_blank">
                <fa-icon :icon="['fab', 'instagram']" class="icon" />
              </a>
              <a href="https://www.facebook.com/Ken.J1111?mibextid=LQQJ4d" target="_blank">
                <fa-icon :icon="['fab', 'facebook']" class="icon" />
              </a>
              <a href="https://x.com/fxterminators?s=21&t=-50ebEruvZMKl8etFJINrA" target="_blank">
                <fa-icon :icon="['fab', 'x-twitter']" class="icon" />
              </a>
              <a href="https://youtube.com/@ForexTerminators?si=8vRpGCe38W4NjsBj" target="_blank">
                <fa-icon :icon="['fab', 'youtube']" class="icon" />
              </a>
              <a href="https://wa.me/message/C2CB6JTTCQUNE1" target="_blank">
                <fa-icon :icon="['fab', 'whatsapp']" class="icon" />
              </a>
              <a href="mailto:support@forexterminators.com " target="_blank">
                <fa-icon :icon="['fas', 'envelope']" class="icon" />
              </a>
              <a href="tel:09019443735 " target="_blank">
                <fa-icon :icon="['fas', 'phone']" class="icon" />
              </a>
            </div>
          </div>
        </div>
      </transition>
    </header> 
  </div>
 
  <div v-show="showBottomScroll" class="bottom-scroll"  @click="scrollToSection('home')"> 
    <fa-icon :icon="['fas', 'caret-up']" class="icon" />
  </div>
</template>

<script>
// import { mapMutations, mapActions, mapState } from 'vuex';
import BaseButton from '@/components/UI/BaseButton.vue'
export default {
  name: 'navigation',

  components: {
    BaseButton,
  },

  data() {
    return {
      showBottomScroll: false,
      scrollThreshold: 0.3,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },

  created() {
    window.addEventListener('resize', this.checkScreen);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.bottomScroll);
    this.checkScreen();
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreen);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.bottomScroll);
  },

  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 850) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleNav() {
      this.mobileNav = !this.mobileNav;
      if (this.mobileNav) {
        // Prevent scrolling when the mobile nav is active
        document.body.style.overflow = 'hidden';
      } else {
        // Restore scrolling when the mobile nav is closed
        document.body.style.overflow = '';
      }
    },

    scrollToSection(sectionId) {
      this.$root.scrollToSection(sectionId);
    },
    
    mobileScrollToSection(sectionId) {
      this.$root.scrollToSection(sectionId);
      this.toggleNav();
    },

    checkClick(e) {
      if(e.target === this.$refs.mobileWrap) {
        this.toggleNav();
      }
    },


    handleScroll() {
      const navLinks = document.querySelectorAll('.link');
      navLinks.forEach(navLink => {
        const href = navLink.getAttribute('href');
        if (href) {
          const sectionId = href.substring(1);
          const section = document.getElementById(sectionId);
          if (section && this.isElementInViewport(section)) {
            navLink.classList.add('active');
          } else {
            navLink.classList.remove('active');
          }
        }
      });
    },

    isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    },

    bottomScroll() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;

      // Calculate the scroll position as a percentage
      const scrollPosition = scrollY / (totalHeight - windowHeight);

      // Toggle the visibility of the bottom-scroll element
      this.showBottomScroll = scrollPosition > this.scrollThreshold;
    },

  },

}
</script>

<style lang="scss" scoped>
  .bottom-scroll {
    @apply bg-[#a33333] rounded-full fixed flex justify-center items-center px-1 py-3 right-10 bottom-52 text-center z-50;

    @screen sm {
      @apply px-2 py-4 right-20 bottom-16;
    }

    .icon {
      @apply text-white  w-9 m-1;
      // bg-[#5AEEB9]
      
    }
  }

  .active {
    border-bottom: 1px solid #8C0100;
  }

  .top-most {
    @apply sticky top-0 left-0 w-full opacity-90;
    z-index: 999;
  }

  header {
    @apply py-3 px-3 text-black ;
    // border-bottom: 1px solid #4238c9;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) ;

    @screen md {
      @apply py-1
    }
    @screen lg {
      @apply px-14
    }

    .nav-wrap {
      @apply px-1 mx-4;

      @screen sm {
        @apply px-4
      }
    }
  }
  ul{
    @apply list-none cursor-pointer;
  }

  a{
    @apply no-underline;
  }

  .link{
    @apply  py-2 px-2 text-xl font-semibold tracking-wider;
    // transition: .3s color ease-in;
    // color: #2c3e50;

    &:hover {
      // color: #8C0100;;
      @apply transform transition-transform duration-500;
      border-bottom: 1px solid #8C0100;
    }

    &.router-link-exact-active {
      
      border-bottom: 1px solid #8C0100;
    }
  }

  nav {
    @apply flex py-3 h-14;

    @screen md{
      @apply py-3 h-20;
    }

    .nav-links {
      @apply relative flex items-center justify-end flex-1;

      ul {
      @apply flex gap-6 items-center;

        // .link {
        //   font-weight: bold;
        //   color: #2c3e50;
        // }

        // a.router-link-exact-active {
        //   color: #42b983;
        // }
      }
    }
  }


  .branding {
    @apply flex items-center;

    img {
      @apply object-cover;
      width: 200px;
      height: 60px;

      @screen md {
        width: 250px;
      }
    }
  }


  .menu-icon {
    @apply cursor-pointer absolute top-6 right-10 h-6 w-auto;

    @screen sm {
      @apply h-8
    }

    @media (min-width: 768px) {
      top: 35px;
      right: 54px;

    }
  }

  .mobile-wrap {
    @apply fixed top-0 left-0 w-full bg-transparent;
    height: 100%;
    z-index: 3;
  }

  .mobile-nav {
    @apply p-6 w-4/6 flex flex-col justify-between h-full text-white;
    max-width: 250px;
    // background-color: #4b4b4f;
    background-color: #1f1f23;
    box-shadow: 7px 0px 11px 5px rgba(0, 0, 0, 0.1);

    ul{
      @apply flex flex-col gap-y-2
    }

    .link {
      @apply p-1
    }

    .mobile-link {
      @apply flex gap-6 items-center
    }

    .socials {
      @apply justify-center flex gap-x-6 gap-y-3 px-6 flex-wrap;

      &:hover {
      color: #4238c9;
    }
    }
  }
 
  // animation
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter-from {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
</style>
