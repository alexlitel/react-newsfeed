import { call, put, takeLatest } from 'redux-saga/effects'
import { apiPath, fetchRequest } from '../util'
import * as actions from '../actions/articles'

/**
 * articleFetchRequest
 * @desc Calls  API with fetch request, if getting all articles
 * @param      {object}  action  Dispatched action with payload and type
 * @param      {number}  arg1.payload:id  Id of article (optional)
 * @yields     {action}  passes data from fetch request or error to action for dispatch to store
 */
export function* articleFetchRequest({ payload: id }) {
  try {
    if (id && Number.isNaN(+id)) throw new Error('Invalid id')
    const url = `${apiPath}/articles${id ? `/${id}` : ''}.json`
    const data = yield call(fetchRequest, url)
    yield put(id ? actions.loadArticle(data) : actions.loadAllArticles(data))
  } catch (e) {
    yield put(actions.fetchArticleFailure(e.toString()))
  }
}


/**
 * articleFetchRequest
 * @desc Watches for dispatched article fetch request actions to make API calls
 * @yields     {action}  calls fetch request function with action payload
 */
export function* watchArticleRequests() {
  yield takeLatest(actions.ARTICLE_FETCH_REQUEST, articleFetchRequest)
}
