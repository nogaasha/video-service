import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { privateRoutes, publicRoutes } from '.'

const Root = () => {
  const auth = false
  return (

    auth
      ?
      <Switch>
        {privateRoutes.map(item =>
          <Route path={item.path}
            exact={item.exact}
            component={item.component}
            key={item.path}
          />
        )}
        <Redirect to={'/'} />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(item =>
          <Route path={item.path}
            exact={item.exact}
            component={item.component}
            key={item.path}
          />
        )}
        <Redirect to={'/login'} />
      </Switch>
  )
}

export default Root