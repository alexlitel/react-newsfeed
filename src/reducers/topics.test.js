import topicsReducer from './topics'
import * as actions from '../actions/topics'

let topicsState = null

beforeEach(() => {
  topicsState = topicsReducer(undefined, {})
})

test('Handle TOPICS_LOAD', () => {
  const mockTopics = [1, 2, 3].map(x => ({ name: 'foo', id: x }))
  topicsState = topicsReducer(topicsState, actions.loadTopics(mockTopics))
  expect(topicsState.topics).toEqual(mockTopics)
  expect(topicsState.active).toEqual([1, 2, 3])
  expect(topicsState.status).toBeTruthy()
})

test('Handle TOPIC_SELECT', () => {
  topicsState.topics = [{ id: 3, name: 'whatever' }]
  topicsState = topicsReducer(topicsState, actions.selectTopic(3))
  expect(topicsState.active).toEqual([3])
  expect(topicsState.status).toBeTruthy()
})

test('Handle TOPIC_DESELECT', () => {
  topicsState.active = [1, 2, 3]
  topicsState = topicsReducer(topicsState, actions.deselectTopic(3))
  expect(topicsState.active).toEqual([1, 2])
  expect(topicsState.status).toBeTruthy()
})

test('Handle TOPICS_FETCH_REQUEST', () => {
  topicsState = topicsReducer(topicsState, actions.fetchTopicsRequest())
  expect(topicsState.status).toBeTruthy()
})

test('Handle TOPICS_FETCH_FAILURE', () => {
  topicsState = topicsReducer(topicsState, actions.fetchTopicsFailure())
  expect(topicsState.status).toBeTruthy()
})
