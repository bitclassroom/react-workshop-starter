import React, { useContext } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import AppContext from './context/AppContext'

const darkTheme = {
    primary: '#333',
    primaryDark: 'black',
    secondary: '#666',
    accent: 'darkgreen',
    background: '#333',
    error: 'red',
    text: 'white',
    textPrimary: 'white',
    textSecondary: '#f9f9f9'
}

const lightTheme = {
    primary: '#333',
    primaryDark: 'black',
    secondary: '#ddd',
    accent: 'green',
    background: '#f9f9f9',
    text: 'black',
    error: 'red',
    textPrimary: 'black',
    textSecondary: '#333'
}

const AppTheme = props => {
    const { theme: themeName } = useContext(AppContext)
    const theme = themeName.includes('light') ? lightTheme : darkTheme

    return (
        <ThemeProvider theme={theme}>
            <>
                {props.children}
                <GlobalStyle />
            </>
        </ThemeProvider>
    )
}

const GlobalStyle = createGlobalStyle`
    #root {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    main {
        flex: 1 0 auto;
    }

    .modal {
        z-index: 5;
        top: 20%;
    }

    .open {
        display: block;
    }

    .close {
        display: none;
    }
`

export default AppTheme
