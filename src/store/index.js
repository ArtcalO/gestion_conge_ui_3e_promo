import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      user:null,
      db:{"username":"ArtcalO","password":"UFO2020"}
    }
  }
})

export default store