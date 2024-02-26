<template>
  <div class="pricing">
    <div class="pricing-wrap">
      <h2>Pricing Plan</h2>

      <div class="pricing-body">
        <p class="para">Empower your trading journey with Forex Terminators courses. Choose the plan that fits your goals and gain access to expert insights and a supportive community.</p>

        <div class="price-cards" >
          <div class="plan" v-for="(plan, index) in pricingPlan" :key="index">
            <h3> {{plan.plan}}</h3>
            <h2>{{plan.price}}</h2>
            <div class="pros">
              <div class="pro-wrap" v-for="(pro, index) in plan.packages" :key="index">
                <fa-icon :icon="['fas', 'arrow-right']" size="2xs" class="icon"/>
                <p>{{pro}}</p>
              </div>
              
            </div>
            <base-button :title="'Get started'" :link= "plan.link"/>
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
      pricingPlan: [
        {
          plan: 'Beginner Course',
          price: '$24',
          link: 'https://paystack.com/buy/fxt-beginners-crash-course-attcbj ',
          packages: [
            'Recorded beginers crash course',
            'One of FXT setup',
            'Weekly Webinars',
            'Access to FXT community',
            '20% discount on advanced course',
            'Lifetime Membership'
          ]
        },

        {
          plan: 'Advanced Course',
          price: '$50',
          link: 'https://paystack.com/buy/fxt-advanced-crash-course-thmfpr ',
          packages: [
            'Recorded beginers crash course',
            'One of FXT setup',
            'Weekly Webinars',
            'Access to FXT community',
            '20% discount on advanced course',
            'Lifetime Membership'
          ]
        }
      ]
    }
  }
}
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
      @apply gap-12 py-12
    }

    h2{
      @apply text-xl font-semibold leading-[normal] uppercase;

      @screen md {
        @apply text-2xl;
      }

      @screen lg {
        @apply  text-[35px];
      }
    }

    .pricing-body {
      @apply flex flex-col gap-14 justify-center items-center;

      .para{
        @apply text-center text-sm font-normal leading-[22px] mb-2 ;

        @screen md {
          @apply leading-[30px] text-lg tracking-wide w-4/5;
        }

        @screen lg {
          @apply  text-base 
        }
      }

      .price-cards{
        @apply flex flex-col  gap-8;

        @screen md {
          @apply flex-row gap-12;
        }

        .plan {
          @apply px-4 py-8 flex flex-col items-center justify-center gap-6 rounded-2xl;
          box-shadow: 8px 9px 25px 2px rgba(0, 0, 0, 0.15);

          @screen md {
            @apply py-16 px-12 gap-10
          }

          h3{
            @apply text-base font-semibold uppercase leading-normal;

            @screen md {
              @apply text-[19px];
            }
          }

          h2{
            @apply text-3xl font-bold leading-[normal] text-[#a33333] uppercase;

            @screen md {
              @apply text-4xl;
            }

            @screen lg {
              @apply  text-[43px];
            }
          }

          .pros{
            @apply space-y-2;

            .pro-wrap {
              @apply flex flex-row items-center gap-2;

              @screen md {
                @apply gap-3;
              }

              p{
                @apply text-sm text-start font-medium;

                @screen md {
                  @apply text-base;
                }

              }

              .icon {
                @apply text-[#a33333] bg-[#dcb2b2] rounded-full bg-opacity-15 p-2;
                // bg-[#5AEEB9]
                
              }
            }
          }
        }
      }
    }

  }
}
</style>