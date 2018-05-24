import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions/topics'
import { watchTopicRequests, topicsFetchRequest } from './topics'
import { apiPath, fetchRequest } from '../util'

describe('topicsFetchRequest', () => {
  test('Fetches topics correctly', () => {
    const saga = topicsFetchRequest()
    expect(saga.next().value).toEqual(call(fetchRequest, `${apiPath}/topics.json`))
    expect(saga.next().value).toEqual(put(actions.loadTopics()))
    expect(saga.next().done).toBeTruthy()
  })
})

describe('watchTopicRequests', () => {
  test('Calls topicsFetchRequest', () => {
    const saga = watchTopicRequests()
    expect(saga.next().value).toEqual(takeLatest(actions.TOPICS_FETCH_REQUEST, topicsFetchRequest))
  })
})
