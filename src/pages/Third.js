import React, { useContext } from 'react'
import { View, Text } from 'react-native'

import Context from '../context/store'

const Third = props => {

    const { state } = useContext(Context)

    return (
        <View style={{ flex: 1, backgroundColor: '#bdbdbd', justifyContent: 'center', alignItems: 'center' }}>

            <Text>Name: {state.user.name}</Text>
            <Text>Surname: {state.user.surname}</Text>
            <Text>Yaş: {state.user.age}</Text>

        </View>
    )
}

export { Third }