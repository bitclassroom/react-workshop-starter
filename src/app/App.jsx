import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import Main from './Main'
import AppStore from './AppStore'
import AppTheme from './AppTheme'

const App = () => (
    <AppStore>
        <AppTheme>
            <Header title="App" />
            <Main />
            <Footer />
        </AppTheme>
    </AppStore>
)

export default App
