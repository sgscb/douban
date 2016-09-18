import Vue from 'vue'
import Vuex from 'vuex'
import {fetchItem} from './api.js'
import {_index, _book} from './mock.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    index: _index,
    book: _book
  },

  actions: {
    FETCH_ITEMS: ({ commit, state },  url) => {
      console.log(url);
      return fetchItem(url).then((items) => commit('SET_ITEMS', { items, url}))
    },
  },

  mutations: {
    SET_ITEMS: (state, { items, url}) => {
      switch (url) {
        case '/index': {
          state.index = items
        }
        break
        case '/book': {
          state.book = items
        }
        break
      }
    }
  },

  getters: {
  }
})

export default store
