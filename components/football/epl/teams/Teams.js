import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'


const Teams = ({ navigation }) => {

    const [teams, setTeams] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTeams = async () => {
            try {
                const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/soccer/rsa.1/teams')
                const team = await response.json()
                setTeams(team.sports[0].leagues[0].teams)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getTeams()
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
            <FlatList
                data={teams}
                renderItem={({ item }) => {
                    if (item.team.logos[0]) {
                        return (
                            <View style={{ padding: 2, backgroundColor: 'red' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item })}>
                                    <View style={{ flexDirection: 'row', padding: 6, alignItems: 'center', backgroundColor: 'white', borderRadius: 5, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }}>
                                        <Image source={{ uri: item.team.logos[0].href }} width={60} height={60} />
                                        <View style={{ width: 15 }}></View>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.team.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ padding: 2, backgroundColor: 'red' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item })}>
                                    <View style={{ flexDirection: 'row', padding: 6, alignItems: 'center', backgroundColor: 'white', height: 72, borderRadius: 5, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }}>

                                        <View style={{ width: 75 }}></View>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.team.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }} />
        </View>
    )
}

export default Teams