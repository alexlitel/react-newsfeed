import { createAction } from 'redux-actions'

export const TOPICS_FETCH_REQUEST = 'TOPICS/FETCH_REQUEST'
export const TOPICS_LOAD = 'TOPICS/LOAD'
export const TOPICS_FETCH_FAILURE = 'TOPICS/FETCH_FAILURE'
export const TOPIC_DESELECT = 'TOPICS/DESELECT'
export const TOPIC_SELECT = 'TOPICS/SELECT'


export const fetchTopicsRequest = createAction(TOPICS_FETCH_REQUEST)
export const loadTopics = createAction(TOPICS_LOAD)
export const fetchTopicsFailure = createAction(TOPICS_FETCH_FAILURE)
export const deselectTopic = createAction(TOPIC_DESELECT)
export const selectTopic = createAction(TOPIC_SELECT)
