<template>
  <div class="fxt-store">
    <div class="store-wrap">
      <div class="heading">
        <h2>FXT Store</h2>
        <p>Get the FXT Merch directly fromn our store</p>
      </div>

      <div class="store-card">
        <div class="card">
          <img src="../assets/display/comingsoon.jpeg" alt="coming soon">
        </div>
        <div class="card">
          <img src="../assets/display/comingsoon.jpeg" alt="coming soon">
        </div>
        <div class="card">
          <img src="../assets/display/comingsoon.jpeg" alt="coming soon">
        </div>
      </div>
    </div>

    <div class="stat">
      <div class="heading">
        <h2>Do not take our word for it</h2>
        <p>Let the stat tell our story</p>
      </div>

      <div class="stat-data">
        <div class="figures">
          <h3>1500+</h3>
          <p>Traders completed training</p>
        </div>
        <div class="figures">
          <h3>72% </h3>
          <p>Success Rate</p>
        </div>
        <div class="figures">
          <h3>900+ </h3>
          <p>Live Traders</p>
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
    @apply mt-20 gap-8;
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
      @apply text-center text-sm font-medium leading-[22px] mb-2;

      @screen md {
        @apply text-base leading-[30px] tracking-wide text-left
      }

      @screen lg {
        @apply font-normal;
      }
    }
  }

  .store-wrap {
    @apply flex flex-col gap-y-8 items-center justify-center px-2;

    @screen md {
      @apply gap-y-14 px-20;
    }

    @screen xl {
      @apply px-36
    }

    .store-card {
      @apply grid grid-cols-1 gap-2;

      @screen md {
        @apply grid-cols-2 gap-4;
      }

      .card {
        @apply border border-gray-400 p-1;
      }
    }
  }

  .stat {
    @apply flex flex-col gap-y-4 bg-[#f6ecec] px-4 py-8;

    @screen md {
      @apply gap-y-16 py-14;
    }

    .stat-data{
      @apply flex flex-col gap-y-4 flex-wrap items-center justify-center px-2;

      @screen md {
        @apply px-8 flex-row gap-x-20;
      }

      .figures {
        @apply flex flex-col gap-y-2 items-center justify-center;

        @screen md {
          @apply flex-col gap-y-4
        }
        h3 {
          @apply text-xl font-semibold;
          color: #033549
        }
        p {
          @apply text-sm font-semibold;
          color: #a33333;
          letter-spacing: 0.09px;
        }
      }
    }
  }
}  
</style>