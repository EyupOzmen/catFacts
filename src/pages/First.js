import React, { useState, useContext } from 'react'
import { View, Text, Button } from 'react-native'

import Context from '../context/store'

const First = props => {

    const { state, dispatch } = useContext(Context)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            <Text>First</Text>
            
            <Text style={{ fontSize: 200 }}>{state.counter}</Text>

            <Button title="Arttır" onPress={() => dispatch({ type: "INCREASE_COUNTER" })} />
            <Button title="Azalt" onPress={() => dispatch({ type: "INCREASE_COUNTER" })} />
            
        </View>
    )
}

export { First }