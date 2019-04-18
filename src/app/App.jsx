import React from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

class App extends React.Component {
    state = {
        isGrid: true
    }

    onChangeView = () => {
        this.setState({
            isGrid: !this.state.isGrid
        })
    }

    render() {
        return (
            <>
                <Header title="App" onSwitchView={this.onChangeView} />
                <Main isGrid={this.state.isGrid} />
                <Footer />
            </>
        )
    }
}

export default App
