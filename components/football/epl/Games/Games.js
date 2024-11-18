import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'


const Games = ({ navigation }) => {

    const [games, setGames] = useState([])

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getGames = async () => {
            try {
                const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/soccer/rsa.1/scoreboard')

                const gs = await response.json()


                setGames(gs.events)


            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getGames()
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
        <View style={{ width: 360, alignItems: 'center', backgroundColor: 'red', height: 745 }}>
            <FlatList data={games}
                renderItem={({ item }) => {
                    if (item.competitions[0].status.type.state === 'pre' && item.competitions[0].competitors[1].team) {
                        return (
                            <TouchableOpacity style={styles.frame}
                                onPress={() => navigation.navigate('GameStats', { item: item })}>
                                <View style={styles.box}>
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>
                                        <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={30} height={30} />
                                        <View style={{ width: 10 }}></View>
                                        <View style={{ width: 100 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[1].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>-</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>
                                        <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={30} height={30} />
                                        <View style={{ width: 10 }}></View>
                                        <View style={{ width: 100 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[0].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>-</Text>
                                        <View style={{ width: 10 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].status.type.detail.slice(0, 16)} -{Math.round(item.competitions[0].status.type.detail.slice(21, -10)) + 7}{item.competitions[0].status.type.detail.slice(-10, -3)}</Text>
                                    </View>
                                    <View style={{ height: 5 }}></View>
                                </View>

                            </TouchableOpacity>

                        )
                    }
                    if (item.competitions[0].status.type.state === 'in' && item.competitions[0].competitors[1].team) {
                        return (
                            <TouchableOpacity style={styles.frame}
                                onPress={() => navigation.navigate('GameStats', { item: item })}>
                                <View style={styles.box}>
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>
                                        <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={30} height={30} />
                                        <View style={{ width: 10 }}></View>
                                        <View style={{ width: 120 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[1].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].competitors[1].score}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>
                                        <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={30} height={30} />
                                        <View style={{ width: 10 }}></View>
                                        <View style={{ width: 120 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[0].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].competitors[0].score}</Text>
                                        <View style={{ width: 80 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].status.type.detail}</Text>
                                    </View>
                                    <View style={{ height: 5 }}></View>
                                </View>

                            </TouchableOpacity>

                        )
                    }
                    if (item.competitions[0].status.type.state === 'post' && item.competitions[0].competitors[1].team) {
                        return (
                            <TouchableOpacity style={styles.frame}
                                onPress={() => navigation.navigate('GameStats', { item: item })}>
                                <View style={styles.box}>
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>
                                        <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={30} height={30} />
                                        <View style={{ width: 10 }}></View>
                                        <View style={{ width: 120 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[1].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].competitors[1].score}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>
                                        <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={30} height={30} />
                                        <View style={{ width: 10 }}></View>
                                        <View style={{ width: 120 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[0].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].competitors[0].score}</Text>
                                        <View style={{ width: 80 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].status.type.detail}</Text>
                                    </View>
                                    <View style={{ height: 5 }}></View>
                                </View>

                            </TouchableOpacity>

                        )
                    }
                    if (item.competitions[0].status.type.state === 'halftime' && item.competitions[0].competitors[1].team) {
                        return (
                            <TouchableOpacity style={styles.frame}
                                onPress={() => navigation.navigate('GameStats', { item: item })}>
                                <View style={styles.box}>
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>
                                        <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={30} height={30} />
                                        <View style={{ width: 10 }}></View>
                                        <View style={{ width: 120 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[1].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].competitors[1].score}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>

                                        <View style={{ width: 10 }}></View>
                                        <View style={{ width: 120 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[0].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].competitors[0].score}</Text>
                                        <View style={{ width: 80 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].status.type.detail}</Text>
                                    </View>
                                    <View style={{ height: 5 }}></View>
                                </View>

                            </TouchableOpacity>

                        )
                    }
                    if (item.competitions[0].status.type.state === 'pre') {
                        return (
                            <TouchableOpacity style={styles.frame}
                                onPress={() => navigation.navigate('GameStats', { item: item })}>
                                <View style={styles.box}>
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>

                                        <View style={{ width: 50 }}></View>
                                        <View style={{ width: 100 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[1].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>-</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>

                                        <View style={{ width: 50 }}></View>
                                        <View style={{ width: 100 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[0].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>-</Text>
                                        <View style={{ width: 10 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].status.type.detail.slice(0, 16)} -{Math.round(item.competitions[0].status.type.detail.slice(21, -10)) + 7}{item.competitions[0].status.type.detail.slice(-10, -3)}</Text>
                                    </View>
                                    <View style={{ height: 5 }}></View>
                                </View>

                            </TouchableOpacity>

                        )
                    }
                    if (item.competitions[0].status.type.state === 'in') {
                        return (
                            <TouchableOpacity style={styles.frame}
                                onPress={() => navigation.navigate('GameStats', { item: item })}>
                                <View style={styles.box}>
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>

                                        <View style={{ width: 50 }}></View>
                                        <View style={{ width: 120 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[1].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].competitors[1].score}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>

                                        <View style={{ width: 50 }}></View>
                                        <View style={{ width: 120 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[0].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].competitors[0].score}</Text>
                                        <View style={{ width: 80 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].status.type.detail}</Text>
                                    </View>
                                    <View style={{ height: 5 }}></View>
                                </View>

                            </TouchableOpacity>

                        )
                    }
                    if (item.competitions[0].status.type.state === 'post') {
                        return (
                            <TouchableOpacity style={styles.frame}
                                onPress={() => navigation.navigate('GameStats', { item: item })}>
                                <View style={styles.box}>
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>

                                        <View style={{ width: 50 }}></View>
                                        <View style={{ width: 120 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[1].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].competitors[1].score}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>

                                        <View style={{ width: 50 }}></View>
                                        <View style={{ width: 120 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[0].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].competitors[0].score}</Text>
                                        <View style={{ width: 80 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].status.type.detail}</Text>
                                    </View>
                                    <View style={{ height: 5 }}></View>
                                </View>

                            </TouchableOpacity>

                        )
                    }
                    if (item.competitions[0].status.type.state === 'halftime') {
                        return (
                            <TouchableOpacity style={styles.frame}
                                onPress={() => navigation.navigate('GameStats', { item: item })}>
                                <View style={styles.box}>
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>

                                        <View style={{ width: 50 }}></View>
                                        <View style={{ width: 120 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[1].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].competitors[1].score}</Text>
                                    </View>
                                    <View style={{ width: 355, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>

                                        <View style={{ width: 50 }}></View>
                                        <View style={{ width: 120 }}>
                                            <Text style={styles.teamname}>{item.competitions[0].competitors[0].team.displayName}</Text>
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].competitors[0].score}</Text>
                                        <View style={{ width: 80 }}></View>
                                        <Text style={styles.score}>{item.competitions[0].status.type.detail}</Text>
                                    </View>
                                    <View style={{ height: 5 }}></View>
                                </View>

                            </TouchableOpacity>

                        )
                    }
                }} />


        </View>
    )
}

export default Games

const styles = StyleSheet.create({
    frame: {
        width: 357,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 2,
        backgroundColor: 'red'
    },
    box: {
        width: 355,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 2,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5
    },
    teamname: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    score: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})