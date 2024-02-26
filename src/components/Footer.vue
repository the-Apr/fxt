<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="text">
        <h2>Contact us</h2>
        <p>Stay connected and join the conversation by following us on social media.</p>
      </div>
      
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
      </div>

      <div class="right-reserved">
        <p>© 2024 Forex Terminators. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.footer {
  @apply px-4 py-12 mt-10 bg-[#f6ecec] text-[#8C0100];

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
      @apply text-left text-sm font-normal leading-[22px] mb-2;

      @screen md {
        @apply leading-[30px] tracking-wider text-base;
      }

      @screen lg {
        @apply  text-base font-normal
      }
    }

    .socials {
      @apply flex gap-4 flex-1 justify-end;

      @screen md {
        @apply gap-6;
      }

      .icon{
        @apply h-4 bg-[#8C0100] text-white p-2 rounded-full;

        @screen md{
          @apply  h-5 p-3;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'footer',
}
</script>