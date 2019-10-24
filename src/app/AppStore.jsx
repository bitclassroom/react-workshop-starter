import React, { Component } from 'react'
import AppContext from './context/AppContext'

class AppStore extends Component {
    state = {
        theme: 'light'
    }

    changeTheme = () => {
        this.setState(prevState => {
            const theme = prevState.theme === 'light' ? 'dark' : 'light'
            return { theme }
        })
    }

    render() {
        const { changeTheme } = this
        const { theme } = this.state
        return (
            <AppContext.Provider value={{ theme, changeTheme }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppStore
