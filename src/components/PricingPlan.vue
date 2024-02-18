<template>
  <div class="pricing">
    <div class="pricing-wrap">
      <h2>Pricing Plan</h2>
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
          <base-button :title="'Get started'"/>
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
          price: '$24',
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
  @apply mx-4;

  .pricing-wrap {
    @apply flex flex-col w-full gap-8 py-10 justify-center items-center;

    h2{
      @apply text-xl font-semibold leading-[normal] uppercase;

      @screen md {
        @apply text-2xl;
      }

      @screen lg {
        @apply  text-[35px];
      }
    }

    .price-cards{
      @apply flex flex-col  gap-8;

      .plan {
        @apply px-6 py-8 flex flex-col items-center justify-center gap-6 rounded-2xl;
        box-shadow: 8px 9px 25px 2px rgba(0, 0, 0, 0.15);

        h3{
          @apply text-base font-semibold uppercase leading-normal;

          @screen md {
            @apply text-[20px];
          }
        }

        h2{
          @apply text-3xl font-bold leading-[normal] text-[#5AEEB9] uppercase;

          @screen md {
            @apply text-2xl;
          }

          @screen lg {
            @apply  text-[35px];
          }
        }

        .pros{
          @apply space-y-2;

          .pro-wrap {
            @apply flex flex-row items-center gap-2;

            p{
              @apply text-sm font-normal
            }

            .icon {
              @apply text-[#5AEEB9] bg-[#5AEEB9] rounded-full bg-opacity-15 p-2;

            }
          }
        }
      }
    }
  }
}
</style>