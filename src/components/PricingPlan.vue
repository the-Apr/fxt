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
            <base-button :title="'Get started'" :link= "plan.link" class="b-btn"/>
            <div class="pros">
              <div class="pro-wrap" v-for="(pro, index) in plan.packages" :key="index">
                <fa-icon :icon="['fas', 'arrow-right']" size="2xs" class="icon"/>
                <p>{{pro}}</p>
              </div>
              
            </div>
            
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
          plan: 'FXT Beginners Course',
          price: '$50',
          link: 'https://paystack.com/buy/fxt-beginners-crash-course-attcbj ',
          packages: [
            'Recorded beginers crash course',
            'One of FXT setup',
            'Weekly Webinars',
            'Access to FXT community',
            '20% discount on advanced course',
            'Lifetime Mentorship'
          ]
        },

        {
          plan: 'FXT Advanced Course',
          price: '$200',
          link: 'https://paystack.com/buy/fxt-advanced-crash-course-thmfpr ',
          packages: [
            'Recorded crash courses',
            'All of FXT setup',
            'Live trading with Ken Jay',
            'Access to FXT community',
            'One of FXT Merch',
            'Lifetime Mentorship'
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
        @apply text-center text-base font-normal w-[90%] leading-[22px] mb-2 ;

        @screen md {
          @apply leading-[30px] text-xl tracking-wide w-4/5;
        }

        @screen lg {
          @apply  text-2xl
        }
      }

      .price-cards{
        @apply flex flex-col  gap-6;

        @screen md {
          @apply flex-row gap-8;
        }

        .plan {
          @apply p-8 flex flex-col items-center justify-start gap-6 rounded-3xl bg-[#191919] text-white min-w-[350px] max-w-[400px];
          box-shadow: 8px 9px 25px 2px rgba(0, 0, 0, 0.15);

          @screen md{
            @apply py-16 px-10 gap-10
          }

          h3{
            @apply text-[18px] font-semibold uppercase text-center leading-normal;

            @screen md {
              @apply text-[22px];
            }
            @screen lg {
              @apply text-[24px];
            }
          }

          h2{
            @apply text-4xl font-bold leading-[normal] tracking-wider  uppercase;
            font-family: 'Lucida Sans', 'serif';
            
            @screen md {
              @apply text-4xl;
            }

            @screen xl {
              @apply  text-[43px];
            }
          }

          .b-btn {
            @apply w-full
          }

          .pros{
            @apply space-y-2 w-full;

            .pro-wrap {
              @apply flex flex-row items-center gap-2;

              @screen md {
                @apply gap-3;
              }

              p{
                @apply text-base text-start font-medium;

                @screen md {
                  @apply text-lg tracking-wider;
                }

              }

              .icon {
                @apply text-black bg-white rounded-full bg-opacity-85 p-2;
                // bg-[#5AEEB9]
                // bg-[#dcb2b2] 
                // text-[#a33333]
                
              }
            }
          }
        }
      }
    }

  }
}
</style>