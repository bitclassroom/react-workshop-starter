import React from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

import AppStore from './AppStore'
import Modal from './components/Modal'

class App extends React.Component {
    render() {
        return (
            <AppStore>
                <Header title="App" />
                <Main />
                <Footer />
            </AppStore>
        )
    }
}

export default App
