import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStateProvider } from './storeConfig/store'
import { rootReducer } from './storeConfig/rootReducers'
import { globalState } from './storeConfig/globalState'
import App from './pages/app'

ReactDOM.render(
  <GlobalStateProvider initialState={globalState} reducer={rootReducer}>
    <App />
  </GlobalStateProvider>,
  document.getElementById('root')
)
