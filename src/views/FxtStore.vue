<template>
  <div class="fxt-store">
    <div class="store-wrap">
      <div class="heading">
        <h2>FXT Store</h2>
        <p>Get the FXT Merch directly from our store</p>
      </div>

      <div class="store-card">
        <div class="card">
          <img src="../assets/display/coming soon.webp" alt="coming soon">
        </div>
        <div class="card hidden md:block">
          <img src="../assets/display/coming soon.webp" alt="coming soon">
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.fxt-store {
  @apply  flex flex-col gap-6 mt-10;

  @screen md {
    @apply mt-20 gap-4;
  }

  .heading {
    @apply flex flex-col gap-4 items-center;
    h2{
      @apply text-xl text-center font-semibold leading-[normal] uppercase;

      @screen md {
        @apply text-2xl text-left;
      }

      @screen lg {
        @apply  text-[35px];
      }
    }

    p{
      @apply text-center text-base font-medium leading-[22px] mb-2;

      @screen md {
        @apply text-xl leading-[30px] tracking-wide text-left
      }

      @screen lg {
        @apply font-normal text-2xl;
      }
    }
  }

  .store-wrap {
    @apply flex flex-col gap-y-8 items-center justify-center px-2;

    @screen md {
      @apply gap-y-14 px-20;
    }

    @screen lg {
      @apply px-52
    }

    .store-card {
      @apply grid grid-cols-1 gap-2;

      @screen md {
        @apply grid-cols-2 gap-4;
      }

      .card {
        @apply border p-1;
      }
    }
  }
}  
</style>