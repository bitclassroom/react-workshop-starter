import React from 'react'

const AppContext = React.createContext({
    theme: 'light',
    changeTheme: f => f
})

// create the consumer as higher order component
export const withAppContext = ChildComponent => props => (
    <AppContext.Consumer>
        {providerValue => <ChildComponent {...props} global={providerValue} />}
    </AppContext.Consumer>
)

export default AppContext
