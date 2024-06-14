<template>
  <div class="review">
    <div v-motion-pop-visible>
      <divv class="review-card">
        <div class="text">
          <p>”{{ review.story }}”</p>
        </div>
        <div class="details-wrap">
          <img :src="review.pic" alt="" />
          <div class="details">
            <p class="name">{{ review.name }}</p>
            <p class="status">{{ review.status }}</p>
          </div>
        </div>
      </divv>

    </div>
  </div>
</template>


<script>
export default {
  name: "review-card",

  props: ["review"],

};
</script>

<style lang="scss" scoped>
.review-card {
  @apply px-4 py-8 flex flex-col gap-y-6 bg-[#191919] justify-between rounded-2xl min-h-[200px] text-white;





  @screen md {
    @apply px-8 py-12;
  }

  &:hover {
    @apply translate-x-4 ease-in-out;
  }

  p {
    @apply text-left text-base font-normal leading-[22px];

    @screen md {
      @apply leading-[30px] tracking-wider text-xl;
    }

    @screen lg {
      @apply font-normal;
    }
  }

  .details-wrap {
    @apply flex flex-row gap-8 justify-start items-center;

    img {
      @apply rounded-full h-10 w-10;

      @screen md {
        @apply rounded-full h-14 w-14
      }
    }

    .details {
      @apply flex flex-col gap-1 justify-center;

      .name {
        @apply font-semibold;
      }
    }
  }
}
</style>