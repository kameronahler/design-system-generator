import React, { useContext } from 'react'
import {
  GlobalContext,
  GlobalContextProvider,
} from '../../context/GlobalContextProvider'

export default function Typography() {
  const globalState = useContext(GlobalContext)

  return (
    <GlobalContextProvider>
      {globalState.typographyElements}
    </GlobalContextProvider>
  )
}
