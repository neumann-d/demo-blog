import React, { createContext, useContext, useReducer } from 'react'

const GlobalStateContext = createContext({})

/**
 * @description custom hook for providing global state to the app
 */
const useGlobalState = () => useContext(GlobalStateContext)

const GlobalStateProvider = ({
  reducer,
  initialState,
  children
}) => (
  <GlobalStateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GlobalStateContext.Provider>
)

export {
  GlobalStateContext,
  useGlobalState,
  GlobalStateProvider
}