import { getRelevantArticles, isLoading, mapTopics } from './selectors'

let state

beforeEach(() => {
  state = {
    articles: {
      articles: [
        { id: '1', topics: [{ id: 1 }] },
        { id: '2', topics: [{ id: 2 }] },
        { id: '2', topics: [{ id: 2 }] },
      ],
    },
    topics: {
      active: [],
    },
  }
})

describe('getRelevantArticles', () => {
  test('Returns articles when topics selected', () => {
    state.topics.active = [1, 2]
    expect(getRelevantArticles(state)).toHaveLength(3)
  })
})

describe('isLoading', () => {
  test('Returns true if topics are loading', () => {
    state.topics.status = 'Making fetch request'
    expect(isLoading(state)).toBeTruthy()
  })

  test('Returns true if articles are loading', () => {
    state.articles.status = 'Making fetch request'
    expect(isLoading(state)).toBeTruthy()
  })

  test('Returns false if nothing is loading', () => {
    expect(isLoading(state)).toBeFalsy()
  })
})

describe('mapTopics', () => {
  test('Return topics labeled by active status', () => {
    state.topics.topics = [{ id: 1 }, { id: 2 }]
    state.topics.active = [1]
    const mapped = mapTopics(state)
    expect(mapped[0]).toHaveProperty('active', true)
    expect(mapped[1]).toHaveProperty('active', false)
  })
})
