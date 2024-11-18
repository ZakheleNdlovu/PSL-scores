import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const Standings = () => {

    const [standings, setStandings] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getStandings = async () => {
            try {
                const response = await fetch('https://site.api.espn.com/apis/v2/sports/soccer/rsa.1/standings')
                const res = await response.json()
                setStandings(res.children[0].standings.entries)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getStandings()
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
        <View>
            <View style={styles.header}>
                <Text style={styles.text}>               Team name                                    PTS     W     L     D     GF    GA</Text>
            </View>
            <FlatList data={standings}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={styles.box}>

                                <View style={{ flexDirection: 'row', padding: 4 }}>
                                    <View style={{ width: 20 }}>
                                        <Text>{item.stats[10].value}</Text>
                                    </View>
                                    <View style={{ width: 150, flexDirection: 'row' }}>
                                        <Image source={{}} />
                                        <View style={{ width: 5 }}></View>
                                        <Text>{item.team.name}</Text>
                                    </View>
                                    <View style={{ width: 29 }}></View>
                                    <View style={{ width: 28, alignItems: 'center' }}>
                                        <Text>{item.stats[3].value}</Text>
                                    </View>

                                    <View style={{ width: 30, alignItems: 'center' }}>
                                        <Text>{item.stats[7].value}</Text>
                                    </View>

                                    <View style={{ width: 19, alignItems: 'center' }}>
                                        <Text>{item.stats[1].value}</Text>
                                    </View>

                                    <View style={{ width: 24, alignItems: 'center' }}>
                                        <Text>{item.stats[6].value}</Text>
                                    </View>

                                    <View style={{ width: 25, alignItems: 'center' }}>
                                        <Text>{item.stats[5].value}</Text>
                                    </View>

                                    <View style={{ width: 25, alignItems: 'center' }}>
                                        <Text>{item.stats[4].value}</Text>
                                    </View>

                                </View>

                            </View>
                            <View style={{ height: 1 }}></View>
                        </View>
                    )
                }} />

        </View>
    )
}

export default Standings

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        padding: 2,
        height: 35
    },
    header: {
        height: 30,
        padding: 5,
        backgroundColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black'
    },
    text: {
        color: 'white',

    }
})