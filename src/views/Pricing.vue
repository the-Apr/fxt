<template>
  <div class="pricing-plan">
    <pricing-plan/>
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
