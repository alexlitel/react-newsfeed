import { createSelector } from 'reselect'

const getArticles = state => state.articles.articles || []
const getTopics = state => state.topics.topics || []
const getCurrentTopics = state => state.topics.active || []

const articlesStatus = state => state.articles.status || ''
const topicsStatus = state => state.topics.status || ''

/* eslint-disable */
export const getRelevantArticles = createSelector(
  [getArticles, getCurrentTopics],
  (articles, topics) =>
  	topics.length ?
    articles.filter(article =>
      article.topics.some(topic =>
        topics.includes(topic.id)))
    : articles
)

export const mapTopics = createSelector(
	[getTopics, getCurrentTopics],
	(topics, activeIds) => 
	 topics.map(topic => Object.assign(
			{},
			topic, 
			{ active: activeIds.includes(topic.id) }
			))
	)

export const isLoading = createSelector(
  [articlesStatus, topicsStatus],
  (aStatus, tStatus) =>
    aStatus.startsWith('Making') || tStatus.startsWith('Making'),
)
