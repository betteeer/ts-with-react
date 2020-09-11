import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Heading from './Heading'
import Content from './Content'

const routes = (
  <React.Fragment>
     <Route path="/" component={Heading} />
    <Route path="/home" component={Content} />
    <Redirect from='*' to='/'  />
  </React.Fragment>
)
export default routes