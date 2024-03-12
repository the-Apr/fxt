<template>
<div class="list-wrap">
  <div class="faqList-wrap">
    <div class="mb-8">
      <h1 class="md:text-3xl text-xl font-bold lg:text-4xl">Frequently Asked Question</h1>
    </div>

    <div class="faq-list">
      <faq-item v-for="faqDoc in faqDocs" :key="faqDoc.id"
      :id="faqDoc.id"
      :title="faqDoc.title"
      :graphs="faqDoc.graphs"
      >
      </faq-item>
    </div>

  </div>

  <!-- contact us -->
  <div class="contact-us">
    <h2>Still have Questions?</h2>
    <p>Need assistance or have questions? Our support team is here to help.  Contact us today, and let's navigate the markets together.</p>
    <a href="mailto:support@forexterminators.com " target="_blank">
      <button class="btn">Contact us</button>
    </a>
  </div>
</div>
</template>

<script>
import FaqItem from './FaqItem.vue';

export default {
  components: {
    FaqItem
  },

  computed: {
    faqDocs(){
      return this.$store.getters['phishingDocs']
    }
  },
  
}
</script>

<style lang="scss" scoped>

.list-wrap {
  @apply flex flex-col gap-6;

  @screen md {
    @apply gap-16;
  }

  .faqList-wrap {
    @apply flex flex-col gap-2 justify-center items-center w-full;

    @screen md {
      @apply gap-8 px-10;
    }

    .faq-list {
      @apply w-full
    }

  }

  .contact-us {
    @apply flex flex-col gap-6 justify-center items-center mt-4;

    h2{
      @apply text-xl text-black font-semibold leading-[normal];

      @screen md {
        @apply text-2xl;
      }

      @screen lg{
        @apply  text-[35px];
      }
    }

    p{
      @apply text-center text-base font-normal leading-[22px] mb-2 max-w-[600px];

      @screen md {
        @apply leading-[30px] tracking-wide text-xl;
      }

      @screen lg {
        @apply  text-2xl font-normal max-w-[1000px];
      }
    }

    .btn{
      @apply max-w-full my-2 text-white bg-[#8C0100] py-4  px-8 rounded-2xl transition-colors duration-500 ease-in-out text-lg font-medium tracking-wide;

      @screen md {
        @apply max-w-[250px] text-2xl font-semibold;
      }

      &:hover{
        @apply bg-white text-black border border-[#8C0100];
        }
      }
  }
}
</style>