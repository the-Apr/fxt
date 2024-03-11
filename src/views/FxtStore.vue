<template>
  <div class="fxt-store">
    <div class="store-wrap">
      <div class="heading">
        <h2>FXT Store</h2>
        <p>Get the FXT Merch directly fromn our store</p>
      </div>

      <div class="store-card">
        <div class="card">
          <img src="../assets/display/coming soon.png" alt="coming soon">
        </div>
        <div class="card hidden md:block">
          <img src="../assets/display/coming soon.png" alt="coming soon">
        </div>
       
      </div>
    </div>

    <!-- <div class="stat">
      <div class="heading">
        <h2>Do not take our word for it</h2>
        <p>Let the stat tell our story</p>
      </div>

      <div class="stat-data rule-top">
        <div class="figures right-rule">
          <h3>1500+</h3>
          <p>Traders completed training</p>
        </div>
        <div class="figures right-rule">
          <h3>72% </h3>
          <p>Success Rate</p>
        </div>
        <div class="figures">
          <h3>900+ </h3>
          <p>Live Traders</p>
        </div>
        

      </div>
    </div> -->
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

  // .stat {
  //   @apply flex flex-col gap-y-4 bg-[#f6ecec] px-4 py-8 mb-4 items-center;

  //   @screen md {
  //     @apply gap-y-16 py-14;
  //   }

  //   .rule-top{
  //     @apply border-[#191919] border-t w-3/5
  //   }

  //   .stat-data{
  //     @apply flex flex-col gap-y-4 flex-wrap items-center justify-center px-2  ;

  //     @screen md {
  //       @apply px-8 flex-row gap-x-20;
  //     }
      

  //     .figures {
  //       @apply flex flex-col gap-y-2 items-center justify-center pr-8 pt-8;

  //       @screen md {
  //         @apply flex-col gap-y-4
  //       }
  //       h3 {
  //         @apply text-3xl font-semibold;
  //         color: #033549
  //       }
  //       p {
  //         @apply text-xl font-semibold;
  //         color: #a33333;
  //         letter-spacing: 0.09px;
  //       }
  //     }

  //     .right-rule{
  //       @apply border-r border-[#191919];
  //     }
      
  //   }
  // }
}  
</style>