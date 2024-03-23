<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="text">
        <h2>Contact us</h2>
        <p>Stay connected and join the conversation by following us on social media.</p>
      </div>
      
      <div class="socials">
        <a href="https://www.instagram.com/i_am_ken_jay?igsh=OTZkMnl3ZGE2azhi&utm_source=qr" target="_blank" v-motion-fade-visible>
          <fa-icon :icon="['fab', 'instagram']" class="icon" />
        </a>
        <a href="https://www.facebook.com/Ken.J1111?mibextid=LQQJ4d" target="_blank" v-motion-roll-bottom>
          <fa-icon :icon="['fab', 'facebook']" class="icon" />
        </a>
        <a href="https://x.com/fxterminators?s=21&t=-50ebEruvZMKl8etFJINrA" target="_blank" v-motion-fade-visible>
          <fa-icon :icon="['fab', 'x-twitter']" class="icon" />
        </a>
        <a href="https://youtube.com/@ForexTerminators?si=8vRpGCe38W4NjsBj" target="_blank" v-motion-roll-bottom>
          <fa-icon :icon="['fab', 'youtube']" class="icon" />
        </a>
        <a href="https://wa.me/message/C2CB6JTTCQUNE1" target="_blank" v-motion-fade-visible>
          <fa-icon :icon="['fab', 'whatsapp']" class="icon" />
        </a>
        <a href="mailto:support@forexterminators.com " target="_blank" v-motion-roll-bottom>
          <fa-icon :icon="['fas', 'envelope']" class="icon" />
        </a>
        <a href="tel:09019443735 " target="_blank" v-motion-fade-visible>
          <fa-icon :icon="['fas', 'phone']" class="icon" />
        </a>
      </div>

      <div class="right-reserved">
        <p>© 2024 Forex Terminators. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.footer {
  @apply px-4 py-12 mt-10 bg-[#191919] text-white;
  

  @screen md {
    @apply px-10 py-5 mt-12;
  }

  @screen lg {
    @apply px-14 py-10 mt-32;
  }

  .footer-wrap {
    @apply flex flex-col gap-6 justify-center items-center;

    @screen md {
      @apply gap-8;
    }

    .text {
      @apply flex flex-col gap-4 items-center mt-4;

      @screen md {
        @apply mt-8;
      }
    }

    h2{
      @apply text-xl font-semibold leading-[normal] uppercase;

      @screen md {
        @apply text-[30px];
      }

      @screen lg {
        @apply  text-[35px];
      }
    }

    p{
      @apply text-center text-base font-normal leading-[22px] mb-2;

      @screen md {
        @apply leading-[30px] tracking-wider text-xl;
      }

      @screen lg {
        @apply   font-normal
      }
    }

    .socials {
      @apply flex gap-3 flex-1 justify-end;

      @screen sm {
        @apply gap-4;
      }

      @screen md {
        @apply gap-6;
      }
      

      .icon{
        @apply h-4 bg-white opacity-85 text-black p-2 rounded-full cursor-pointer transition-transform duration-500;

        @screen md{
          @apply  h-5 p-3;
        }

        &:hover {
          @apply translate-y-3;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'footnote',
}
</script>