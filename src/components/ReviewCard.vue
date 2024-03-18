<template>
  <div class="review">
    <div class="review-card">
      <div class="text">
        <p>”{{ review.story }}”</p>
      </div>
      <div class="details-wrap">
        <img :src="review.pic" alt="" />
        <div class="details">
          <p class="name">{{ review.name }}</p>
          <p class="status">{{review.status}}</p>
        </div>
      </div>
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
    transform: rotateZ(-1deg) scale(1.02);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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

      @screen md{
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