import React, { useReducer } from 'react'

const initialContext = {
  typographyElements: ['h1'],
}

const reducer = (state, action) => {
  switch (action.type) {
    case CONTEXT_ACTIONS.TYPOGRAPHY_ELEMENTS_UPDATE:
      return action.payload
    default:
      return
  }
}

export const CONTEXT_ACTIONS = {
  TYPOGRAPHY_ELEMENTS_UPDATE: 'typography_elements_update',
}

export const Context = React.createContext()

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialContext)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
