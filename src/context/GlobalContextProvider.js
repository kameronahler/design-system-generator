import React, { createContext } from 'react'

const initialContext = {
  typographyElements: 'h1',
  colors: {
    primary: '#000000',
  },
}

export const GlobalContext = createContext(initialContext)

export const GlobalContextProvider = props => {
  return (
    <GlobalContext.Provider value={initialContext}>
      {props.children}
    </GlobalContext.Provider>
  )
}
