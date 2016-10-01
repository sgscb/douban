import Vue from 'vue'
import Vuex from 'vuex'
import {fetchItem} from './api.js'
import {_index, _book, _tags} from './mock.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    index: _index,
    book: _book,
    tags: _tags,
    expressBookIndex: 1,
    bookBubble:{
      left: '',
      top: '',
      data: {
        title: '',
        author: '',
        year: '',
        publisher: '',
        abstract: ''
      }
    }
  },

  actions: {
    FETCH_ITEMS: ({ commit, state },  url) => {
      return fetchItem(url).then((items) => commit('SET_ITEMS', { items, url}))
    },
    EXPRESS_BOOK_INDEX: ({commit, state}, index) => {
      commit('SET_EXPRESS_BOOK', index)
    },
    MODIFY_BOOK_BUBBLE: ({commit, state}, data) => {
      commit('SET_BOOK_BUBBLE', data)
    },
  },

  mutations: {
    SET_ITEMS: (state, { items, url}) => {
      switch (url) {
        case '/index': {
          state.index = items
        }
        break
        case '/tags': {
          state.tags = items
        }
        break
        case '/book': {
          // 需要复制两个参数
          let temp = items.booksExpress
          temp.push(temp[0])
          temp.unshift(temp[temp.length - 1])
          items.booksExpress = temp
          state.book = items
        }
        break
      }
    },
    SET_EXPRESS_BOOK: (state, index) => {
      state.expressBookIndex = index
    },
    SET_BOOK_BUBBLE: (state, data) => {
      state.bookBubble = data
    }
  },

  getters: {
  }
})

export default store
