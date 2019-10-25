import React from 'react'
import { Card, Text, Title, SubTitle } from 'app/components/styled'

const UserListItem = ({ user }) => {
    const { name, email, website } = user

    return (
        <Card>
            <Title>{name}</Title>
            <SubTitle>{website}</SubTitle>
            <Text>{email}</Text>
        </Card>
    )
}

export default UserListItem
