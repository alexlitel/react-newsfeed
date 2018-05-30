import React from 'react'
import PropTypes from 'prop-types'
import sanitizeHtml from 'sanitize-html'
import { formatDate, baseUrl } from '../util'

/* eslint-disable react/jsx-indent react/no-danger */
const FeedItem = ({ item }) => (
  <div className="app-feed-item">
    <h3 className="app-feed-item-date">
      {formatDate(item.createdAt)}
    </h3>
    <h3 className="app-feed-item-source">
      {item.attribution.displayName}
    </h3>
    <h2 className="app-feed-item-title">
      <a href={`/articles/${item.id}`} className="app-feed-item-link">
        {item.title}
      </a>
    </h2>
    {item.media.length > 0 && (
    	<a href={`${baseUrl}/articles/${item.id}`}>
      		<img className="app-feed-item-img" src={item.media[0].url} alt="Article description" />
    </a>)
    }
    <p className="app-feed-item-summary">{item.summary} {!item.body && (<a href={`${baseUrl}/articles/${item.id}`}>Read More</a>)}</p>
    {item.body && (<div className="app-feed-item-body" dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.body) }} />)}

    {item.topics.length > 0 && (
    	<div className="app-feed-item-topics">
      	<ul className="app-feed-item-topics-list">
        {item.topics.map(topic => (
          <li key={topic.id} className="app-feed-item-topics-list-item">
            {topic.name}
          </li>
    		))}
      </ul>
    	</div>
    	)}
  </div>
  /* eslint-enable react/jsx-indent react/no-danger */
)

FeedItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedItem
