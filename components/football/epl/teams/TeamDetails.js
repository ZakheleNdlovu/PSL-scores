import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'

const TeamDetails = ({ route, navigation }) => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`http://site.api.espn.com/apis/site/v2/sports/soccer/rsa.1/teams/${route.params.item.team.id}`)
                const res = await response.json()
                setData(res.team)

            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getData()
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

    if (route.params.item.team.logos[0]) {
        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Roster', { item: route.params.item })}>
                    <View>
                        <View style={{ alignItems: 'center', backgroundColor: 'lightgray' }}>
                            <Image source={{ uri: route.params.item.team.logos[0].href }} width={90} height={90} />
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{route.params.item.team.name}</Text>
                            <View style={{ height: 10 }}></View>
                            <Text>Tap to see roster</Text>
                            <View style={{ height: 5 }}></View>
                        </View>

                    </View>
                </TouchableOpacity>
                <View style={{ height: 15 }}></View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Team Stats</Text>
                </View>
                <View style={{ height: 15 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 360 }}>

                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total Goals scored</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[5].value}</Text>
                    </View>
                    <View style={{ width: 40 }}></View>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total Goals scored against</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[4].value}</Text>
                    </View>
                </View>
                <View style={{ height: 15 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 360 }}>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Points</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[3].value}</Text>
                    </View>
                    <View style={{ width: 40 }}></View>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Games Played</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[0].value}</Text>
                    </View>
                </View>
                <View style={{ height: 15 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 360 }}>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Wins</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[8].value}</Text>
                    </View>
                    <View style={{ width: 40 }}></View>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Draws</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[7].value}</Text>
                    </View>
                </View>
                <View style={{ height: 15 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 360 }}>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Rank</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[23].value}</Text>
                    </View>
                    <View style={{ width: 40 }}></View>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Losses</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[1].value}</Text>
                    </View>
                </View>
            </View>
        )
    }
    else {
        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Roster', { item: route.params.item })}>
                    <View>
                        <View style={{ alignItems: 'center', backgroundColor: 'lightgray', height: 120, alignItems: 'center', justifyContent: 'center' }}>

                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{route.params.item.team.name}</Text>
                            <View style={{ height: 10 }}></View>
                            <Text>Tap to see roster</Text>
                            <View style={{ height: 5 }}></View>
                        </View>

                    </View>
                </TouchableOpacity>
                <View style={{ height: 15 }}></View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Team Stats</Text>
                </View>
                <View style={{ height: 15 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 360 }}>

                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total Goals scored</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[5].value}</Text>
                    </View>
                    <View style={{ width: 40 }}></View>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total Goals scored against</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[4].value}</Text>
                    </View>
                </View>
                <View style={{ height: 15 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 360 }}>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Points</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[3].value}</Text>
                    </View>
                    <View style={{ width: 40 }}></View>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Games Played</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[0].value}</Text>
                    </View>
                </View>
                <View style={{ height: 15 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 360 }}>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Wins</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[8].value}</Text>
                    </View>
                    <View style={{ width: 40 }}></View>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Draws</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[7].value}</Text>
                    </View>
                </View>
                <View style={{ height: 15 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 360 }}>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Rank</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[23].value}</Text>
                    </View>
                    <View style={{ width: 40 }}></View>
                    <View style={{ width: 100 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Losses</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{data.record.items[0].stats[1].value}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default TeamDetails