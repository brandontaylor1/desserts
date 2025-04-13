import React from 'react'

import { DessertProvider } from '../context/DessertContext.jsx'
import MainContainer from './components/MainContainer.jsx'


const App = () => {
  return (
    <>
    <DessertProvider>
        <MainContainer />
    </DessertProvider>
    </>
      
  )
}

export default App