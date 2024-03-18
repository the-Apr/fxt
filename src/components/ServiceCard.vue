<template>
  <div class="service">
    <div class="service-wrap" v-for="(service, index) in serviceCard" :key="index">
      <fa-icon :icon="['fas', service.icon]" class="menu-icon"  />
      <h3>{{service.text}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'serviceCard',

  data() {
    return {
      serviceCard: [
        {
          text: "Fxt Weekly Analysis",
          icon: 'chart-line'
        },
        {
          text: "Fxt Weekly Webinar",
          icon: 'globe'
        },
        {
          text: "Access to Fxt Community",
          icon: 'people-group'
        },
        {
          text: "24/7 Support",
          icon: 'headset'
        },

      ] 
    }
  }
}
</script>

<style lang="scss" scoped>
.service {
  @apply mx-2 flex flex-row gap-3 flex-wrap;

  .service-wrap {
    @apply   flex flex-row  max-w-[400px] flex-auto gap-6 border shadow-lg p-3 cursor-default transition-transform duration-500;

    &:hover {
      @apply transform scale-75;
    }

    .menu-icon {
      @apply h-6 w-6;
      color: #8C0100 !important;
    }

    h3 {
      @apply uppercase text-base font-medium tracking-wide
    }
  }
}
</style>