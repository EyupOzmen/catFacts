import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Facts, Login, VoteFilter } from './pages'

const Stack = createStackNavigator();

function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Facts" component={Facts} />
                <Stack.Screen name="Votes" component={VoteFilter} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main;