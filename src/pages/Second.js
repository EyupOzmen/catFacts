import React, { useContext } from 'react'
import { View, Text } from 'react-native'

import Context from '../context/store'

const Second = () => {

    const { state, dispatch } = useContext(Context)

    return (
        <View style={{ flex: 1, backgroundColor: '#eceff1', justifyContent: 'center', alignItems: 'center' }}>

            <Text>Second</Text>

            <Text style={{ fontSize: 200 }}>{state.counter}</Text>

        </View>
    )
}

export { Second }