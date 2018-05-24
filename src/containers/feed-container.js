import { connect } from 'react-redux'
import Feed from '../components/feed'
import { isLoading, getRelevantArticles } from '../selectors'
import { fetchArticleRequest } from '../actions/articles'

const mapStateToProps = state => ({
  isLoading: isLoading(state),
  feedItems: getRelevantArticles(state),
})

const mapDispatchToProps = dispatch => ({
  loadFeed: () => dispatch(fetchArticleRequest(null)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
