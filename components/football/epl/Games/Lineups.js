import { View, Text, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const Lineups = ({ route }) => {
    const [players, setPlayers] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getLineup = async () => {
            try {
                const response1 = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/${route.params.item.competitions[0].competitors[0].id}/roster`)
                const player = await response1.json()
                setPlayers(player)
                console.log(player)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getLineup()
    }, [])

    if (loading) {
        return (
            <View style={{ width: 359, height: 760, alignItems: 'center' }}>
                <Image source={{ uri: 'https://th.bing.com/th/id/OIP.Bna5LYMllfrKk-RWlPXUpQHaJE?rs=1&pid=ImgDetMain' }} width={350} height={740} />
            </View>
        )
    }

    if (error) {
        return (
            <View>
                <Text>Error: {error}</Text>
            </View>
        )
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            <Text>hello</Text>
        </View>
    )
}

export default Lineups