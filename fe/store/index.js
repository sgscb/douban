import Vue from 'vue'
import Vuex from 'vuex'
import {fetchItem} from './api.js'
import {_index, _book} from './mock.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    index: _index,
    book: _book,
    expressBookIndex: 0,
  },

  actions: {
    FETCH_ITEMS: ({ commit, state },  url) => {
      return fetchItem(url).then((items) => commit('SET_ITEMS', { items, url}))
    },
    EXPRESS_BOOK_INDEX: ({commit, state}, index) => {
      commit('SET_EXPRESS_BOOK', index)
    }
  },

  mutations: {
    SET_ITEMS: (state, { items, url}) => {
      switch (url) {
        case '/index': {
          state.index = items
        }
        break
        case '/book': {
          // 需要复制两个参数
          state.book = items
        }
        break
      }
    },
    SET_EXPRESS_BOOK: (state, index) => {
      state.expressBookIndex = index
    }
  },

  getters: {
  }
})

export default store
