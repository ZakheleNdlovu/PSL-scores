import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Games from './Games'
import GameStats from './GameStats'
import Lineups from './Lineups'

const Stack = createNativeStackNavigator()

const GameNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={Games} options={{ headerShown: false }} />
                <Stack.Screen name='GameStats' component={GameStats} options={{ headerShown: false }} />
                <Stack.Screen name='Line ups' component={Lineups} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default GameNavigation