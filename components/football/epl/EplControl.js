import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Navigation from './Navigation'
import GameNavigation from './Games/GameNavigation'
import Standings from './standings/Standings'
import Teams from './teams/Teams'
import TeamsNav from './teams/TeamsNav'



const EplControl = () => {

    const [state, setState] = useState(0)

    if (state === 0) {
        return (
            <View style={{ height: 760, backgroundColor: 'red' }}>
                <Navigation state={state} setState={setState} />
                <GameNavigation />
            </View>
        )
    }

    if (state === 1) {
        return (
            <View style={{ height: 760, backgroundColor: 'red' }}>
                <Navigation state={state} setState={setState} />
                <Standings />
            </View>
        )
    }

    if (state === 2) {
        return (
            <View style={{ height: 761, backgroundColor: 'red' }}>
                <Navigation state={state} setState={setState} />
                <TeamsNav />
            </View>
        )
    }

}

export default EplControl