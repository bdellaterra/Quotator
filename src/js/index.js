import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'rxjs'

import App from 'components/App'
import store from 'store'

class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

render(
  <Index />,
  document.getElementById('root')
)

