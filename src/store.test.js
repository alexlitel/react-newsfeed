import configureStore from './store'

let store

beforeEach(() => {
 	store = configureStore()
})
test('Creates store', () => {
  expect(store.getState()).toEqual({
    articles: { articles: null, current: null, status: null },
    topics: { topics: [], active: [], status: null },
  })
})
