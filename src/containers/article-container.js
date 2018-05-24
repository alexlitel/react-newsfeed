import { connect } from 'react-redux'
import Feed from '../components/feed'
import { isLoading } from '../selectors'
import { fetchArticleRequest } from '../actions/articles'

const mapStateToProps = state => ({
  isLoading: isLoading(state),
  feedItems: state.articles.current || [],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadFeed: () => dispatch(fetchArticleRequest(ownProps.match.params.id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
