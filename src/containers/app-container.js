import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from '../components/app'
import { isLoading } from '../selectors'

const mapStateToProps = state => ({
  isLoading: isLoading(state),
})

export default withRouter(connect(mapStateToProps)(App))
