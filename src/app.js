import React from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './scss/index.scss'

const App = () => {
  return (
    <div className="grid-container">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default App