import { handleActions } from 'redux-actions'
import * as actions from '../actions/articles'


const initialState = {
  articles: null,
  status: null,
  current: null,
}

const articlesReducer = handleActions({
  [actions.ARTICLE_LOAD]: (state, action) => ({ ...state, status: 'Loaded article', current: action.payload }),
  [actions.ARTICLE_LOAD_ALL]: (state, action) => ({ ...state, status: 'Loaded articles', articles: action.payload }),
  [actions.ARTICLE_FETCH_REQUEST]: state => ({ ...state, status: 'Making article fetch request' }),
  [actions.ARTICLE_FETCH_FAILURE]: state => ({ ...state, status: 'Unable to load article' }),
}, initialState)

export default articlesReducer
