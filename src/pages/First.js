import React, { useState, useContext } from 'react'
import { View, Text, Button } from 'react-native'

import Context from '../context/store'

const First = props => {
    const [myCounter, setMyCounter] = useState(0)
    const { state, dispatch } = useContext(Context)

    const login = () => {
        let user = { name: "Ezran", surname: "Bayantemur", age: 28 }
        dispatch({ type: "SET_USER", userObj: user })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Button title="Giriş" onPress={login} />

        </View>
    )
}

export { First }
