import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import { First, Second, Third } from './pages'

import Provider from './context/Provider'

const Main = props => {
    return (
        <Provider>
            <SafeAreaView style={{ flex: 1 }}>
                <First />
                <Second />
                <Third />
            </SafeAreaView>
        </Provider>
    )
}

export default Main