<template>
  <div class="pricing-plan">
    <pricing-plan />
  </div>
  <div class="stats" v-motion-pop-visible>
    <h2 class="title">Don't take our words for it.</h2>
    <p class="sub-title">Let the stats tell the story. Forex Terminators: where traders thrive, profits multiply, and
      success becomes a
      measurable reality.</p>
    <div class="stat-inner">
      <div class="stat-inner-item">
        <h3>
          <AnimatedCounter :value="90" :duration="5000" class="counter" />
          <span class="counter">%</span>
        </h3>
        <p>Traders completed the course</p>
      </div>
      <div class="stat-inner-item">
        <h3>
          <AnimatedCounter :value="80" :duration="5000" class="counter" />
          <span class="counter">%</span>
        </h3>
        <p>success rate</p>
      </div>
      <div class="stat-inner-item">
        <h3>
          <AnimatedCounter :value="50" :duration="5000" class="counter" />
          <span class="counter">+</span>
        </h3>
        <p>Live traders</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const PricingPlan = defineAsyncComponent(() => import('@/components/PricingPlan.vue'));

export default {
  name: 'pricing',

  components: {
    PricingPlan,
  }
}
</script>


<style lang="scss" scoped>
.stats {
  @apply px-12 w-full bg-black text-white pt-12 pb-36 flex flex-col;


  @screen lg {
    @apply px-32;
  }

  @screen xl {
    @apply px-52
  }

  .title {
    @apply text-xl text-center font-semibold leading-[normal] m-auto p-5;
    font-size: 25px;
    font-weight: 400;
    line-height: 74.82px;
    text-align: center;

    @screen lg {
      font-size: 55px;
      width: 100%
    }
  }


  .sub-title {
    @apply text-left text-base font-normal leading-[28px] my-6;
    font-size: 20px;
    font-weight: 400;
    line-height: 32.65px;
    text-align: center;
    margin: auto;
    opacity: 70%;

    @screen lg {
      font-size: 25px;
      width: 50%;
    }
  }

  .stat-inner {
    @apply flex flex-col marker:border-t border-t-slate-200 mt-6;

    @screen lg {
      @apply flex flex-row
    }

    .stat-inner-item {
      @apply flex flex-col items-center  pt-2;

      @screen lg {
        @apply w-1/3 border-r border-r-slate-200
      }

      h3 {
        display: flex;
        align-items: center;

      }

      .counter {
        font-family: Rockwell;
        font-size: 39px;
        font-weight: 400;
        line-height: 70.46px;
        text-align: center;

        @screen lg {
          font-size: 60px;
        }
      }

      p {
        font-size: 20px;
        font-weight: 400;
        line-height: 32.65px;
        text-align: center;
        width: 100%;
        margin: auto;
        opacity: 70%;

        @screen lg {
          font-size: 20px
        }
      }
    }

    div:last-child {
      border: none;
      
    }
  }
}
</style>