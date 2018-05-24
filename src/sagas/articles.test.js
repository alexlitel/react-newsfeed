import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions/articles'
import { watchArticleRequests, articleFetchRequest } from './articles'
import { apiPath, fetchRequest } from '../util'

describe('articleFetchRequest', () => {
  test('Fetches article correctly with null payload', () => {
    const saga = articleFetchRequest(actions.fetchArticleRequest(null))
    expect(saga.next().value).toEqual(call(fetchRequest, `${apiPath}/articles.json`))
    expect(saga.next().value).toEqual(put(actions.loadAllArticles()))
    expect(saga.next().done).toBeTruthy()
  })
  test('Fetches article correctly with non-null payload', () => {
    const saga = articleFetchRequest(actions.fetchArticleRequest(1))
    expect(saga.next().value).toEqual(call(fetchRequest, `${apiPath}/articles/1.json`))
    expect(saga.next().value).toEqual(put(actions.loadArticle()))
    expect(saga.next().done).toBeTruthy()
  })

  test('Fails when url nonexistent', () => {
    const saga = articleFetchRequest(actions.fetchArticleRequest('92d90dioad'))
    expect(saga.next().value).toEqual(put(actions.fetchArticleFailure('Error: Invalid id')))
  })
})

describe('watchArticleRequests', () => {
  test('Calls articleFetchRequest', () => {
    const saga = watchArticleRequests()
    expect(saga.next().value)
    	.toEqual(takeLatest(actions.ARTICLE_FETCH_REQUEST, articleFetchRequest))
  })
})
