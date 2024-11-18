import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Teams from './Teams'
import TeamDetails from './TeamDetails'
import Roster from './Roster'

const Stack = createNativeStackNavigator()

const TeamsNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Teams' component={Teams} options={{ headerShown: false }} />
                <Stack.Screen name='Details' component={TeamDetails} options={{ headerShown: false }} />
                <Stack.Screen name='Roster' component={Roster} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default TeamsNav