<template>
  <li class="faq-item">
    <div class="item-wrap" 
    :class="{ 'bg-bkup-blue': isActive }">

      <!-- drop down -->
      <div class="drop-down">
        <router-link :to="faqLink"> 
          <fa-icon icon="sort-desc" 
          :class="{ 'transition duration-700 transform rotate-180': isActive, 'rotate-0': !isActive }" 
          @click="toggleDropdown"/>
        </router-link>
      </div>

      <!-- faq title -->
      <div class="title-wrap" @click="toggleDropdown">
        <router-link :to="faqLink"> 
          <h1>{{title}}</h1>
        </router-link>
      </div>
    </div>

    <!-- faq answer -->
    <div class="answers" 
    :class="{ 'my-4':isActive,}" 
    v-if="isActive" >
      <router-view v-for="graph in graphs" :key="graph">
        <p>{{ graph }}</p>
      </router-view>
    
    </div>
    
  </li>
</template>

<script>

export default {
  components: {
   
  },
  props: ['title', 'body', 'graphs', 'id'],

  data(){
    return{}
  },

  computed: {
    faqLink(){
      return { name: 'Que', params: {id: this.id} }
    },
    isActive() {
      return this.$store.state.activeDropdownId === this.id;
    },
  },

  methods: {
    toggleDropdown(){
      if (this.isActive) {
        this.$store.commit('clearActiveDropdown');
      } else {
        this.$store.commit('setActiveDropdown', this.id);
      }
    }
  },
  
}
</script>

<style lang="scss" scoped>
.bg-bkup-blue {
  @apply bg-[#b2b2b2];
  /* bg-[#ecd6d6] */
}

.faq-item {
  @apply grid grid-cols-12;

  .item-wrap {
    @apply grid col-span-12 grid-cols-12 border-t items-center p-1 transition-all;

    @screen md {
      @apply border-t-2 p-4;
    }

    &:hover {
      @apply bg-[#b2b2b2];
    }

    .drop-down {
      @apply col-span-1 grid justify-items-start;
    }

    .title-wrap {
      @apply  col-start-2 col-span-10 justify-items-start;

      h1{
        @apply font-medium leading-6 tracking-wide text-sm  text-left;

        @screen md {
          @apply text-lg tracking-wider;
        }
        @screen xl {
          @apply text-xl;
        }
      }
    }
  }

  .answers {
    @apply col-start-2 col-span-10 ml-1;

    @screen md {
      @apply ml-3;
    }

    p{
      @apply font-normal text-base text-start mb-2 tracking-[0.035px] leading-[22px];

      @screen md {
        @apply text-xl 
      }
    }
  }
}
</style>