import { handleActions } from 'redux-actions'
import * as actions from '../actions/topics'


const initialState = {
  topics: [],
  active: [],
  status: null,
}

const topicsReducer = handleActions({
  [actions.TOPICS_LOAD]: (state, action) => ({
    ...state,
  	status: 'Loaded topics',
  	topics: action.payload,
  	active: state.active.length ? state.active : action.payload.map(x => x.id),
  }),
  [actions.TOPIC_DESELECT]: (state, action) => ({
    ...state,
    status: 'Deselected topic',
    active: state.active.filter(id => +id !== +action.payload),
  }),
  [actions.TOPIC_SELECT]: (state, action) => ({
    ...state,
    status: 'Selected topic',
    active: [...state.active, state.topics.find(topic => +topic.id === +action.payload).id],
  }),
  [actions.TOPICS_FETCH_REQUEST]: state => ({ ...state, status: 'Making topics fetch request' }),
  [actions.TOPICS_FETCH_FAILURE]: state => ({ ...state, status: 'Unable to load topics' }),
}, initialState)

export default topicsReducer
