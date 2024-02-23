<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <!-- <swiper-slide  v-for="(quote,index) in quotes" :key="index">
      <p>{{quote}}</p>
    </swiper-slide> -->

    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
  </swiper>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  // import './style.css';

  // import required modules
  import { Autoplay, Pagination, Navigation} from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        modules: [Autoplay, Pagination, Navigation],

        quotes: [
          "Trading decisions doesn't just end on chart, it's reflect on your personality",
          "Trade what you see and not what you think.",
          "Liquidation doesn't define your weakness but prepares you for your success",
          // "Generational wealth starts with one risk taker",
          // "The greatest mistake a trader can make is to have high expectation on strategy learnt or developed without consideration of the risk behind",
          // "Trade with precision, Profit with intention"
        ]
      };
    },
  };
</script>
<style lang="scss" scoped>
p{
  @apply text-center text-base font-medium leading-[22px] italic;

  @screen md {
    @apply leading-[30px] text-lg tracking-wide;
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
