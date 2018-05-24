import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Topics extends Component {
  componentDidMount() {
    this.props.loadTopics()
  }
  render() {
    const { topics, isLoading } = this.props
    if (isLoading || !topics.length) {
      return <div className="app-topics-wrapper" />
    }
    /* eslint-disable react/jsx-indent */
    return (
      <div className="app-topics-wrapper">
        <h2>Choose the topics you are interested in</h2>
        { topics.map(topic => (
          <div key={topic.id} className="app-topics-row">
            <span className="app-topics-label">
              {topic.name}
            </span>
            <button
              className={`app-topics-btn${topic.active ? ' btn-active' : ''}`}
              onClick={() => this.props.toggleTopic(topic.active, topic.id)}
            >
              {topic.active ? 'Remove' : 'Add'}
            </button>
          </div>
        ))
        }
      </div>
    )
    /* eslint-enable react/jsx-indent */
  }
}

Topics.defaultProps = {
  topics: [],
}

Topics.propTypes = {
  topics: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  loadTopics: PropTypes.func.isRequired,
  toggleTopic: PropTypes.func.isRequired,
}


export default Topics
