import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Roster = ({ route }) => {

    const [roster, setRoster] = useState([])
    const [stats, setStats] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getRoster = async () => {
            try {
                const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/rsa.1/teams/${route.params.item.team.id}/roster`)
                const t = await response.json()
                setRoster(t.athletes)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getRoster()
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
        <View style={{ backgroundColor: 'red' }}>
            <FlatList data={roster}
                renderItem={({ item }) => {

                    return (
                        <View style={{ padding: 1 }}>
                            <View style={styles.row}>
                                <Text>{item.fullName}</Text>
                                <Text>{item.position.name}</Text>
                            </View>
                        </View>
                    )



                }} />
        </View>
    )
}

export default Roster

const styles = StyleSheet.create({
    row: {
        backgroundColor: 'white',
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid'
    },
    row1: {
        backgroundColor: 'blue',
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid'
    }

})