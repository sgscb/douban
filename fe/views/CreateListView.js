import ItemList from '../components/pub/ItemList.vue'
export function createListView (title) {
  return {
    name: 'list-stories-view',

    preFetch (store, router) {
      return store.dispatch('FETCH_LIST_DATA',router.history.current.params.id)
    },
    // this will be called during SSR to pre-fetch data into the store!
    render (h) {
      return h(ItemList, { props: {title}})
    }
  }
}