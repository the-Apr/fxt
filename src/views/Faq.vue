<template>
<div class="faq-wrap">
  <faq-list></faq-list>

  <div class="why-choose-us">
    <h2>Why Choose Us?</h2>
    <why-us :cardDetails="cardDetails"/>

  </div>
</div>
  
</template>

<script>
import { defineAsyncComponent } from 'vue';

const WhyUs = defineAsyncComponent(() => import('@/components/WhyUs.vue'));

const FaqList = defineAsyncComponent(() => import('@/components/FaqList.vue'));

export default {
  name: 'Faq',

  components: {
    FaqList,
    WhyUs
  },

  data() {
    return {
      cardDetails: [
        {
          title : "Expert Lead Education",
          image: require("../assets/icon/Vector.png"),
          body: " At Forex Terminators, our courses are crafted by seasoned traders and financial experts. Benefit from their wealth of experience as they guide you through the intricacies of the forex market. Your journey is in expert hands."
        },
        {
          title : "Simplified Learning Experience",
          image: require("../assets/icon/book.png"),
          body: "We believe in breaking down complex concepts into digestible, easy-to-understand modules. Our user-friendly platform ensures that learning about forex is not just insightful but also an enjoyable experience. Master the markets with simplicity"
        },
        {
          title : "Community Support",
          image: require("../assets/icon/community.png"),
          body: "Join a community of like-minded traders who share your passion. At Forex Terminators, we foster an environment where traders support each other. Connect, exchange ideas, and grow together as you embark on your trading journey"
        },
        // {
        //   title : "Cutting-Edge Resources",
        //   image: require("../assets/icon/cube.png"),
        //   body: "Stay ahead of the curve with our cutting-edge resources. From market analysis to exclusive tools, we provide everything you need for a successful trading experience. It's not just education; it's empowerment through innovation"
        // },
        // {
        //   title : "Empowering Your Trading Lifestyle",
        //   image: require("../assets/icon/money.png"),
        //   body: "Forex Terminators is more than an academy; it's a lifestyle. Explore our store for stylish merchandise and practical tools designed to complement your trading journey. Experience success with a touch of sophistication"
        // },
        {
          title : "Tailored for All Skill Levels",
          image: require("../assets/icon/tailor.png"),
          body: "Whether you're a beginner or an experienced trader, Forex Terminators caters to all skill levels. Our courses are structured to meet you where you are, providing a customized learning path that suits your individual needs and goals"
        },
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.faq-wrap{
  @apply mx-2 px-2 my-10;

  @screen md {
    @apply mx-4 px-6
  }

  @screen xl {
    @apply mx-20 px-12
  }
  

  .why-choose-us {
    @apply flex flex-col my-8 py-2 gap-8;

    @screen sm {
      @apply my-14;
    }

    @screen md {
      @apply my-24 gap-14 px-14;
    }

    h2{
      @apply  text-[25px] font-semibold leading-[normal];

      @screen md {
        @apply text-[35px]
      }
    }
  }
}
</style>