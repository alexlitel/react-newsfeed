import articlesReducer from './articles'
import * as actions from '../actions/articles'

let articleState = null

beforeEach(() => {
  articleState = articlesReducer(undefined, {})
})

test('Handle LOAD_ALL', () => {
  articleState = articlesReducer(articleState, actions.loadAllArticles([1, 2, 3]))
  expect(articleState.articles).toEqual([1, 2, 3])
  expect(articleState.status).toBeTruthy()
})

test('Handle LOAD_ARTICLE', () => {
  articleState = articlesReducer(articleState, actions.loadArticle({ id: 3 }))
  expect(articleState.current).toEqual({ id: 3 })
  expect(articleState.status).toBeTruthy()
})

test('Handle ARTICLE_FETCH_REQUEST', () => {
  articleState = articlesReducer(articleState, actions.fetchArticleRequest('13'))
  expect(articleState.status).toBeTruthy()
})

test('Handle ARTICLE_FETCH_FAILURE', () => {
  articleState = articlesReducer(articleState, actions.fetchArticleFailure())
  expect(articleState.status).toBeTruthy()
})
