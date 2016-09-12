import Vue from 'vue'
import Vuex from 'vuex'
import {fetchIndexData} from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    indexV
  },

  actions: {
    FETCH_ITEMS: ({ commit, state }, { url }) => {
      if (ids.length) {
        return fetchIndexData(url).then(items => commit('SET_ITEMS', { items }))
      } else {
        return Promise.resolve()
      }
    },
  },

  mutations: {
    SET_ITEMS: (state, { items }) => {
      Vue.set(state.indexV, items)
    }
  },

  getters: {
  }
})

export default store
