import React, { Component } from 'react'
import AppContext from './_context/AppContext'

class AppStore extends Component {
    state = {
        isGrid: true,
        isLight: true
    }

    onChangeLayout = () => {
        this.setState(prevState => ({
            ...prevState,
            isGrid: !prevState.isGrid
        }))
    }

    onChangeTheme = () => {
        this.setState(prevState => ({
            ...prevState,
            isLight: !prevState.isLight
        }))
    }

    render() {
        const storeValue = {
            ...this.state,
            onChangeLayout: this.onChangeLayout,
            onChangeTheme: this.onChangeTheme
        }

        return <AppContext.Provider value={storeValue}>{this.props.children}</AppContext.Provider>
    }
}

export default AppStore
