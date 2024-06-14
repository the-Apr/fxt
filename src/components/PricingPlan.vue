<template>
  <div class="pricing">
    <div class="pricing-wrap">
      <h2>Pricing Plan</h2>

      <div class="pricing-body">
        <p class="para">Empower your trading journey with Forex Terminators courses. Choose the plan that fits your
          goals and gain access to expert insights and a supportive community.</p>
        <div class="payment-method">
          <div class="circle">
            <p class="inner-circle"></p>
          </div>
          <p class="text">PAY WITH DOLLAR CARD/CRYPTO</p>
        </div>
        <div class="price-cards">
          <div class="plan" v-for="(plan, index) in pricingPlan" :key="index">
            <span>{{ plan.rating }}</span>
            <h3>{{ plan.plan }}</h3>
            <div class="gradient"></div>
            <h2>{{ plan.price }}</h2>
            <base-button :title="'Get started'" @click="togglePlanPop(index)" class="b-btn z-[10]" />
            <div class="gradient"></div>
            <div class="pros">
              <div class="pro-wrap" v-for="(pro, index) in plan.packages" :key="index">
                <fa-icon :icon="['fas', 'arrow-right']" size="2xs" class="icon" />
                <p>{{ pro }}</p>
              </div>
            </div>
            <img v-lazy="{ src: srcPath }" class="gradient">
            <div v-if="plan.showPlanPop" class="plan-pop z-50">
              <button class="close-btn" @click="togglePlanPop(index)">X</button>
              <h3 class="text-[40px]"> VPN USAGE </h3>
              <p class="text-[30px]">Checkout page MAY not load while using your local network IP address. Kindly
                activate your <a class="underline" href='https://protonvpn.com/'>VPN</a> to access
                the checkout page.</p>
              <base-button :title="'Continue'" :link= "plan.link" class="b-btn z-50"/>
              <div></div>
            <img src="../assets/icon/middle-gradient.png" alt="gradient" class="absolute bottom-0 top-0 z-20 opacity-[0.3]" />
            </div>
            <img src="../assets/icon/middle-gradient.png" alt="gradient" class="absolute bottom-10 z-20 opacity-[0.3]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pricingPlan',
  data() {
    return {
      srcPath: require('../assets/icon/plan-gradient.png'),
      pricingPlan: [
        {
          rating: 'MOST DEMANDED',
          plan: 'FXT Free Course',
          price: '$0',
          link: 'https://whop.com/checkout/plan_EJtBNZlfsQp0m?d2c=true',
          packages: [
            'FREE Beginners Guide',
            'Access to FXT Free Signal channel',
            'FXT trading Journal',
            'Lifetime course access',
          ],
          showPlanPop: false,
        },
        {
          rating: 'MOST POPULAR',
          plan: 'FXT Signal Course',
          price: '$25',
          link: 'https://whop.com/checkout/plan_zd2m8IWnAKVae?d2c=true',
          packages: [
            'One - Three Trades per week',
            'Trading tutorial course',
            'Live News trading with Ken Jay',
            'Access to FXT community',
            '10% discount on advanced course',
            '1 month subscription',
          ],
          showPlanPop: false,
        },
        {
          rating: 'MOST POPULAR',
          plan: 'FXT Beginners Course',
          price: '$50',
          link: 'https://whop.com/checkout/plan_FtTRe1q9Pc7in?d2c=true',
          packages: [
            'Recorded beginners crash course',
            'One of FXT setup',
            'Weekly Webinars',
            'Access to FXT community',
            '20% discount on advanced course',
            'Lifetime Mentorship',
            'Fundamental trading method',
          ],
          showPlanPop: false,
        },
        {
          rating: 'RECOMMENDED',
          plan: 'FXT Advanced Course',
          price: '$200',
          link: 'https://whop.com/checkout/plan_Bv0a0lQnVaLlA?d2c=true',
          packages: [
            'Recorded crash courses',
            'All of FXT setup',
            'Live trading with Ken Jay',
            'Access to FXT community',
            'One of FXT Merch',
            'Lifetime Mentorship',
            'Fundamental trading method',
          ],
          showPlanPop: false,
        },
      ],
    };
  },
  methods: {
    togglePlanPop(index) {
      this.pricingPlan.forEach((plan, i) => {
        if (i !== index) {
          plan.showPlanPop = false;
        }
      });
      this.pricingPlan[index].showPlanPop = !this.pricingPlan[index].showPlanPop;
    },
  },
};
</script>

<style lang="scss" scoped>
.pricing {
  @apply mx-2;

  @screen md {
    @apply mx-4;
  }

  .pricing-wrap {
    @apply flex flex-col w-full gap-8 py-8 justify-center items-center;

    @screen md {
      @apply gap-12 py-12;
    }

    h2 {
      @apply text-xl font-semibold leading-[normal] uppercase;

      @screen md {
        @apply text-2xl;
      }

      @screen lg {
        @apply text-[35px];
      }
    }

    .pricing-body {
      @apply flex flex-col gap-14 justify-center items-center;

      .para {
        @apply text-center text-base font-normal w-[90%] leading-[22px] mb-2;

        @screen md {
          @apply leading-[30px] text-xl tracking-wide w-4/5;
        }

        @screen lg {
          @apply text-2xl;
        }
      }

      .payment-method {
        @apply flex items-center justify-end gap-2 w-[95%] font-[700] text-2xl;

        .circle {
          @apply w-[18px] h-[18px] bg-[#E6E6E6] rounded-full relative flex justify-center items-center;
        }

        .inner-circle {
          @apply w-[12px] h-[12px] bg-[#8C0100] rounded-full;
        }

        .text {
          @apply text-[14px];
          font-family: 'Goudy Old Style', serif;
        }
      }

      .price-cards {
        @apply flex flex-col gap-6;

        @screen md {
          @apply flex-row gap-8 flex-wrap justify-center;
        }

        .plan {
          @apply p-8 flex flex-col items-center justify-start gap-5 rounded-3xl bg-[#191919] text-white min-w-[350px] max-w-[400px] relative;
          box-shadow: 8px 9px 25px 2px rgba(0, 0, 0, 0.15);

          @screen md {
            @apply py-16 px-10 gap-10 transition-transform duration-500;

            &:hover {
              @apply translate-y-4 ease-in-out;
            }
          }

          .plan-pop {
            @apply p-8 flex flex-col items-center justify-between rounded-3xl bg-[#191919] text-white absolute bottom-0 left-0 right-0 top-0;
            .close-btn {
              @apply absolute top-2 right-2 text-black font-bold text-lg bg-[#AFAFAF] rounded-full w-8 h-8 flex items-center justify-center z-30;
            }
          }

          .gradient {
            min-width: inherit;
            max-width: 400px;
            height: 1px;
            background: linear-gradient(to right, gray, transparent 25%, transparent 50%, transparent 75%, gray 100%);
          }

          h3 {
            @apply text-[18px] font-semibold uppercase text-center leading-normal;

            @screen md {
              @apply text-[22px];
            }

            @screen lg {
              @apply text-[24px];
            }
          }

          h2 {
            @apply text-4xl font-bold leading-[normal] tracking-wider uppercase;
            font-family: 'Rockwell Nova', 'serif';

            @screen md {
              @apply text-4xl;
            }

            @screen xl {
              @apply text-[43px];
            }
          }

          img {
            @apply absolute bottom-0;
          }

          span {
            @apply text-[20px] bg-[#8C0100] leading-[32.65px] absolute top-0 right-0 px-3 py-1 font-normal rounded-s-[14px] rounded-tr-3xl;
          }

          .b-btn {
            @apply w-full;
          }

          .pros {
            @apply space-y-2 w-full;

            .pro-wrap {
              @apply flex flex-row items-center gap-2;

              @screen md {
                @apply gap-3;
              }

              p {
                @apply text-base text-start font-medium;

                @screen md {
                  @apply text-lg tracking-wider;
                }
              }

              .icon {
                @apply text-black bg-white rounded-full bg-opacity-85 p-2;
              }
            }
          }
        }
      }
    }
  }
}
</style>
