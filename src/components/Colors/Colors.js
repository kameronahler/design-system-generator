import React, { useContext } from 'react'
import {
  GlobalContext,
  GlobalContextProvider,
} from '../../context/GlobalContextProvider'

export default function Colors() {
  const globalState = useContext(GlobalContext)

  return (
    <GlobalContextProvider>{globalState.colors.primary}</GlobalContextProvider>
  )
}
