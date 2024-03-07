<template>
  <li class="grid grid-cols-12">
    <div class="grid col-span-12 grid-cols-12 border-t md:border-t-2 items-center p-1 md:p-4 transition-all hover:bg-bkup-blue" 
    :class="{ 'bg-bkup-blue': isActive }">

      <div class="col-span-1 grid justify-items-start">
        <router-link :to="faqLink"> 
          <fa-icon icon="sort-desc" 
          :class="{ 'transition duration-700 transform rotate-180': isActive, 'rotate-0': !isActive }" 
          @click="toggleDropdown"/>
        </router-link>
      </div>

      <div class=" col-start-2 col-span-10 grid justify-items-start">
        <router-link :to="faqLink"> 
          <h1 class="font-semibold leading-8 tracking-wider text-sm md:text-lg text-left" @click="toggleDropdown">{{title}}</h1>
        </router-link>
      </div>
    </div>

    <div class="md:col-span-10 md:ml-28 col-span-12" 
    :class="{ 'my-4':isActive,}" 
    v-if="isActive" >
      <router-view v-for="graph in graphs" :key="graph">
        <p class="font-normal text-sm md:text-base text-start mb-2 tracking-[0.035px] leading-[22px]">{{ graph }}</p>
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

<style scoped>
.bg-bkup-blue {
  @apply bg-[#b2b2b2];
  /* bg-[#ecd6d6] */
}
</style>