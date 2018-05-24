import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FeedItem from './feed-item'

const NoFeedItems = () => (
  <div className="app-feed-wrapper app-feed-missing">
    <h2 className="app-feed-missing-text">
		There are no articles in your feed. Please visit the <a href="/topics">
    Topics page</a> to follow topics relevant to you.
    </h2>
  </div>
)


class Feed extends Component {
  componentDidMount() {
    this.props.loadFeed()
  }
  render() {
    const { feedItems, isLoading } = this.props
    if (isLoading && !feedItems.length) {
      return <div className="app-feed-wrapper" />
    } else if (!feedItems.length) {
      return <NoFeedItems />
    }

    return (
      <div className="app-feed-wrapper">
        { feedItems.map(item =>
          <FeedItem key={item.id} item={item} />)}
      </div>
    )
  }
}

Feed.defaultProps = {
  feedItems: [],
}

Feed.propTypes = {
  feedItems: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  loadFeed: PropTypes.func.isRequired,
}


export default Feed
