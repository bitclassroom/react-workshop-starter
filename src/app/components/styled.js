import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: ${props => props.theme.background || 'yellow'};
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 10px;
`

export const CardPrimary = styled(Card)`
    background-color: greenyellow;
`

export const Title = styled.h1`
    color: ${props => props.theme.text};
`

export const SubTitle = styled.h2`
    color: ${props => props.theme.text};
`

export const Text = styled.p`
    color: ${props => props.theme.text};

    &:hover {
        color: blue;
    }

    @media (min-width: 768px) {
        background: mediumseagreen;
        color: papayawhip;
    }
`

export const Content = styled.div`
    display: flex;
    padding: 20px;
`
