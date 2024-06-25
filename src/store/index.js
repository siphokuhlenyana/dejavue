import { createStore } from 'vuex'

export default createStore({
  state: {
    cars:null,
    friends:null,
    games:null

  },
  getters: {
  },
  mutations: {
    setCars(state ,payload){
      state.cars=payload
    },
    setFriends(state,payload){
      state.friends=payload
    },
    setGames(state,payload){
      state.games=payload
    }

  },
  actions: {
    async getCars(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/dejavue/index.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setCars',converted.cars)
    },
    async getFriends(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/dejavue/index.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setFriends',converted.friends)
    },
    async getGames(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/dejavue/index.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setGames',converted.gaming_consoles)
    },
  },
  modules: {
  }
})
