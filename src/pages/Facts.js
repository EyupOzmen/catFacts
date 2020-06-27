import React, { useContext } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import Context from '../context/store'

const Facts = props => {

    const { state, dispatch } = useContext(Context)

    console.log(state.user);

    return (
        <SafeAreaView>
            <Text>Facts</Text>
        </SafeAreaView>
    )
}

export { Facts }