import { connect } from 'react-redux'
import Topics from '../components/topics'
import { isLoading, mapTopics } from '../selectors'
import { fetchTopicsRequest, selectTopic, deselectTopic } from '../actions/topics'

const mapStateToProps = state => ({
  isLoading: isLoading(state),
  topics: mapTopics(state),
})

const mapDispatchToProps = dispatch => ({
  loadTopics: () => dispatch(fetchTopicsRequest()),
  toggleTopic: (active, id) => dispatch(active ? deselectTopic(id) : selectTopic(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Topics)
