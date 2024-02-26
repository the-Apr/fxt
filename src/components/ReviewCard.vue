<template>
  <div class="review">
    <div class="review-card">
      <div class="text">
        <p>Forex Terminators has been a revelation for my trading journey. The academy's structured courses and expert guidance have transformed my understanding of the markets. I now feel more confident and equipped to make informed decisions. Highly recommend it!</p>
      </div>
      <div class="name">
        <p>Chijioke Njoku</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.review-card{
  @apply px-8 py-12 flex flex-col gap-y-6 bg-[#ecd6d6] rounded-2xl;

  p{
    @apply text-left text-sm font-medium leading-[22px] mb-2 ;

    @screen md {
      @apply leading-[30px] tracking-wider;
    }

    @screen lg {
      @apply  text-base font-normal
    }
  }
}
</style>