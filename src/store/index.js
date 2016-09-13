import Vue from 'vue'
import Vuex from 'vuex'
import {fetchItem} from './api.js'
import {_index} from './mock.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    index: _index
  },

  actions: {
    FETCH_ITEMS: ({ commit, state }, { url }) => {
      return fetchItem(url).then((items) => commit('SET_ITEMS', { items }))
    },
  },

  mutations: {
    SET_ITEMS: (state, { items }) => {
      console.log('修改');
      console.log(state);
      state.index = items
      // Vue.set(state.index, items)
    }
  },

  getters: {
  }
})

export default store
