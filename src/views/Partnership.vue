<template>
  <!-- Partnership -->
  <div class="partnership">
    <h2 class="partner"><span class="text-[#8C0100]">FXT</span> PARTNERSHIP PRGRAM</h2>
    <p>Did you know that you can earn up to 6% of our earning by just referring us to friends and family? We have
      made it possible for both Non-Trader and Traders to be part of this grate community, Now you can earn from us!
    </p>
    <p>Join our Partnership program and earn after a successful referral to our paid Products (Signals/Beginners
      course /Advanced course). All earnings would be processed on <a href='https://Whop.com/' target='_blank'>WHOP</a>
      and can be withdrawn to your Local banks.
    </p>
    <p>Its essential for you to have an account on <a href='https://Whop.com/' target='_blank'>WHOP</a> in other to
      successfully Partner with us.</p>
    <p> Note: This program is limited to 10 Lucky Persons to sign up per month.</p>
    <h3>HOW IT WORKS</h3>
    <div class="partnership-steps">
      <div>
        <img src="../assets/icon/submit-document.png" alt="icon" />
        <span>1. Sign Up</span>
      </div>
      <div>
        <img src="../assets/icon/copy-link.png" alt="icon" />
        <span>2. Get Link</span>
      </div>
      <div>
        <img src="../assets/icon/promote.png" alt="icon" />
        <span>3. Share Link</span>
      </div>
      <div>
        <img src="../assets/icon/cash-in-hand.png" alt="icon" />
        <span>4. Get Paid</span>
      </div>
    </div>
    <a href="https://dpaouyw709k.typeform.com/to/gaY9x31S" target='_blank' class='partnership-link'>Become an <span
        class="text-[#8C0100]">FXT</span> Partner</a>
  </div>
</template>


<style lang="scss" scoped>
.partnership {
  @apply px-12 py-8 w-full bg-black text-white py-12 flex flex-col;
  font-family: 'Goudy Old Style', serif;

  @screen md {
    @apply py-10;
  }

  @screen lg {
    @apply px-32 h-screen;
  }

  @screen xl {
    @apply px-52
  }

  h2 {
    @apply text-xl text-center font-semibold leading-[normal] uppercase w-[70%] m-auto p-5;

    @screen md {
      @apply text-2xl;
    }

    @screen lg {
      @apply text-[35px];
    }
  }

  h3 {
    @apply text-lg text-center font-semibold leading-[normal] uppercase w-[70%] m-auto p-5;

    @screen md {
      @apply text-2xl;
    }

    @screen lg {
      @apply text-[35px];
    }
  }

  p {
    @apply text-left text-base font-normal leading-[28px] my-6;

    @screen md {
      @apply leading-[34px] text-xl tracking-wider;
    }

    @screen xl {
      @apply text-2xl font-normal
    }

  }

  .partnership-steps {
    @apply flex flex-col justify-around;

    @screen lg {
      @apply flex flex-row
    }

    div {
      @apply flex flex-col items-center justify-center gap-4;

      img {
        height: 50px;

        @screen lg {
          height: 100px
        }
      }

      span {
        @apply text-[25px];
      }
    }

  }

  a {
    text-decoration: underline;
  }

  .partnership-link {
    position: relative;
    padding: 12px;
    gap: 10px;
    border-radius: 30px;
    background-color: white;
    color: black;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    width: max-content;
    align-self: center;
    margin-top: 40px;
    text-decoration: none;

    @screen lg {
      font-size: 25px;
    }
  }

  .partnership-link:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  .partnership-link::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 100%;
    background-image: linear-gradient(120deg,
        rgba(255, 255, 255, 0) 30%,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0) 70%);
    top: 0;
    left: 3%;
    opacity: 0.6;
  }

  @keyframes shine {
    0% {
      left: 3%;
    }

    60% {
      left: 90%;
    }

    to {
      left: 90%;
    }
  }

}
</style>