import { createAction } from 'redux-actions'

export const ARTICLE_LOAD = 'ARTICLES/LOAD_ARTICLE'
export const ARTICLE_LOAD_ALL = 'ARTICLES/LOAD_ALL'
export const ARTICLE_FETCH_REQUEST = 'ARTICLES/FETCH_REQUEST'
export const ARTICLE_FETCH_FAILURE = 'ARTICLES/FETCH_FAILURE'

export const loadArticle = createAction(ARTICLE_LOAD)
export const loadAllArticles = createAction(ARTICLE_LOAD_ALL)
export const fetchArticleRequest = createAction(ARTICLE_FETCH_REQUEST)
export const fetchArticleFailure = createAction(ARTICLE_FETCH_FAILURE)
