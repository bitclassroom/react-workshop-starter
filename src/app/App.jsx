import React from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './Main'
import AppStore from './AppStore'

const App = () => (
    <AppStore>
        <Header title="App" />
        <Main />
        <Footer />
    </AppStore>
)

export default App
