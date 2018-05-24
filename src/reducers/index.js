import { combineReducers } from 'redux'
import topicsReducer from './topics'
import articlesReducer from './articles'

export default combineReducers({
  topics: topicsReducer,
  articles: articlesReducer,
})
