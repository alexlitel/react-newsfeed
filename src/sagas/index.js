import { fork, all } from 'redux-saga/effects'
import { watchArticleRequests } from './articles'
import { watchTopicRequests } from './topics'

/**
 * rootSaga
 * @yield	Combines sagas and watchers
 */
export default function* rootSaga() {
  yield all([
    fork(watchArticleRequests),
    fork(watchTopicRequests),
  ])
}
