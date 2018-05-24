import { call, put, takeLatest } from 'redux-saga/effects'
import { apiPath, fetchRequest } from '../util'
import * as actions from '../actions/topics'

/**
 * topicsFetchRequest
 * @desc Calls  API with fetch request
 * @yields     {action}  passes data from fetch request or error to action for dispatch to store
 */
export function* topicsFetchRequest() {
  try {
    const data = yield call(fetchRequest, `${apiPath}/topics.json`)
    yield put(actions.loadTopics(data))
  } catch (e) {
    yield put(actions.fetchTopicsFailure(e.toString()))
  }
}


/**
 * watchTopicsRequest
 * @desc Watches for dispatched topic fetch request actions to make API calls
 * @yields     {action}  calls fetch request function with action payload
 */
export function* watchTopicRequests() {
  yield takeLatest(actions.TOPICS_FETCH_REQUEST, topicsFetchRequest)
}
