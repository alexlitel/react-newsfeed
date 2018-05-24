import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Feed from './containers/feed-container'
import Topics from './containers/topics-container'
import Article from './containers/article-container'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route exact path="/topics" component={Topics} />
    <Route path="/articles/:id" component={Article} />
  </Switch>
)

export default Routes
