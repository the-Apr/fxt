import { createStore } from 'vuex'

export default createStore({
  state() {
    return{
      activeDropdownId: null,

      phishingDocs: [
        {
          id: 'p1',
          title: 'How experienced are the instructors at Forex Terminators?',
          graphs: [
            'At FXT community, we have got a top trader known as Ken Jay who is very well experienced in the financial market with more than 3 years experience. With his experience, he has been able to impact positively on other traders life, both beginners traders and advanced traders.',

            'Phishing attempts often come with urgent requests, such as claiming your account is compromised or offering attractive deals to lure you in.'
          ]
        },

        {
          id:'p2',
          title: 'What types of courses does Forex Terminators offer?',
          graphs: [
            'The courses available in the community are for both beginners traders and advanced traders with over 6hrs plus worth of forex filtered knowledge.'
          ]
        },

        {
          id:'p3',
          title: 'Is Forex Terminators suitable for someone with no prior trading experience?',
          graphs: [
            'Yes! the course is also available for beginners trader with no prior knowledge/ esperience.'
          ]
        },

        {
          id:'p4',
          title: 'Can I interact with other traders in the Forex Terminators community?',
          graphs: [
            "Yes you can, we have developed a trading community on WhatsApp for both beginners trader and also advanced traders, We also have the discord community which is strictly for advanced FXT traders. We are all families here at FXT and that's why we have these community developed.",

            "Remember, A family that stays together TERMINATES together!"
          ]
        },

        {
          id:'p5',
          title: 'How can I access the Forex Terminators store?',
          graphs: [
            "Here at the FXT community we don't just sell our courses but we as well sell the branded merch. Ensuring no one is left behind in this movement!"
          ]
        }
      ]
    }
  },
  getters: {
    phishingDocs(state){
      return state.phishingDocs
    }
  },
  mutations: {
    setActiveDropdown(state, id) {
      state.activeDropdownId = id;
    },
    clearActiveDropdown(state) {
      state.activeDropdownId = null;
    },
  },
  
  actions: {
  },
  modules: {
  }
})
