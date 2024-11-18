import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'



const GameStats = ({ route, navigation }) => {

    const [teamstats1, setTeamstats1] = useState([])
    const [teamstats2, setTeamstats2] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getGames = async () => {
            try {
                const response = await fetch(`http://site.api.espn.com/apis/site/v2/sports/soccer/rsa.1/teams/${route.params.item.competitions[0].competitors[0].id}`)
                const response1 = await fetch(`http://site.api.espn.com/apis/site/v2/sports/soccer/rsa.1/teams/${route.params.item.competitions[0].competitors[1].id}`)
                const team1 = await response.json()
                const team2 = await response1.json()
                setTeamstats1(team1)
                setTeamstats2(team2)

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

    if (route.params.item.competitions[0].status.type.state === 'in') {
        return (
            <View>
                <View style={{ height: 1 }}></View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => navigation.navigate('Line ups', { lineup: lineup })}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: 350, alignItems: 'center' }}>
                                <Text>{route.params.item.name}</Text>
                                <Text>{route.params.item.competitions[0].status.type.detail}</Text>
                            </View>
                            <View style={{ height: 15 }}></View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.teambox}>
                                    <Image source={{ uri: route.params.item.competitions[0].competitors[1].team.logo }} width={50} height={50} />
                                    <Text>{route.params.item.competitions[0].competitors[1].team.displayName}</Text>
                                </View>
                                <View style={{ width: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{route.params.item.competitions[0].competitors[1].score}</Text>
                                    <Text>VS</Text>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{route.params.item.competitions[0].competitors[0].score}</Text>
                                </View>
                                <View style={styles.teambox}>
                                    <Image source={{ uri: route.params.item.competitions[0].competitors[0].team.logo }} width={50} height={50} />
                                    <Text>{route.params.item.competitions[0].competitors[0].team.displayName}</Text>
                                </View>
                            </View>
                            <View style={{ height: 15 }}></View>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Game stats</Text>
                        <View style={styles.box}>
                            <Text>Posession</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[4].displayValue}%</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[4].displayValue}%</Text>
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <View style={styles.box}>
                            <Text>Total shots</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[8].displayValue}</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[8].displayValue}</Text>
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <View style={styles.box}>
                            <Text>Shots on target</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[6].displayValue}</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[6].displayValue}</Text>
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <View style={styles.box}>
                            <Text>Fouls</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[1].displayValue}</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[1].displayValue}</Text>
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <View style={styles.box}>
                            <Text>Corners</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[2].displayValue}</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[2].displayValue}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
    if (route.params.item.competitions[0].status.type.state === 'post') {
        return (
            <View>
                <View style={{ height: 1 }}></View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => navigation.navigate('Line ups', { lineup: lineup, item: route.params.item })}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: 350, alignItems: 'center' }}>
                                <Text>{route.params.item.name}</Text>
                                <Text>{route.params.item.competitions[0].status.type.detail}</Text>
                            </View>
                            <View style={{ height: 15 }}></View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.teambox}>
                                    <Image source={{ uri: route.params.item.competitions[0].competitors[1].team.logo }} width={50} height={50} />
                                    <Text>{route.params.item.competitions[0].competitors[1].team.displayName}</Text>
                                </View>
                                <View style={{ width: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{route.params.item.competitions[0].competitors[1].score}</Text>
                                    <Text>VS</Text>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{route.params.item.competitions[0].competitors[0].score}</Text>
                                </View>
                                <View style={styles.teambox}>
                                    <Image source={{ uri: route.params.item.competitions[0].competitors[0].team.logo }} width={50} height={50} />
                                    <Text>{route.params.item.competitions[0].competitors[0].team.displayName}</Text>
                                </View>
                            </View>
                            <View style={{ height: 15 }}></View>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Game stats</Text>
                        <View style={styles.box}>
                            <Text>Posession</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[4].displayValue}%</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[4].displayValue}%</Text>
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <View style={styles.box}>
                            <Text>Total shots</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[8].displayValue}</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[8].displayValue}</Text>
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <View style={styles.box}>
                            <Text>Shots on target</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[6].displayValue}</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[6].displayValue}</Text>
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <View style={styles.box}>
                            <Text>Fouls</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[1].displayValue}</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[1].displayValue}</Text>
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <View style={styles.box}>
                            <Text>Corners</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[2].displayValue}</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[2].displayValue}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
    if (route.params.item.competitions[0].status.type.state === 'halftime') {
        return (
            <View>
                <View style={{ height: 1 }}></View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => navigation.navigate('Line ups', { item: route.params.item })}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: 350, alignItems: 'center' }}>
                                <Text>{route.params.item.name}</Text>
                                <Text>{route.params.item.competitions[0].status.type.detail}</Text>
                            </View>
                            <View style={{ height: 15 }}></View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.teambox}>
                                    <Image source={{ uri: route.params.item.competitions[0].competitors[1].team.logo }} width={50} height={50} />
                                    <Text>{route.params.item.competitions[0].competitors[1].team.displayName}</Text>
                                </View>
                                <View style={{ width: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{route.params.item.competitions[0].competitors[1].score}</Text>
                                    <Text>VS</Text>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{route.params.item.competitions[0].competitors[0].score}</Text>
                                </View>
                                <View style={styles.teambox}>
                                    <Image source={{ uri: route.params.item.competitions[0].competitors[0].team.logo }} width={50} height={50} />
                                    <Text>{route.params.item.competitions[0].competitors[0].team.displayName}</Text>
                                </View>
                            </View>
                            <View style={{ height: 15 }}></View>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Game stats</Text>
                        <View style={styles.box}>
                            <Text>Posession</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[4].displayValue}%</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[4].displayValue}%</Text>
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <View style={styles.box}>
                            <Text>Total shots</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[8].displayValue}</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[8].displayValue}</Text>
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <View style={styles.box}>
                            <Text>Shots on target</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[6].displayValue}</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[6].displayValue}</Text>
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <View style={styles.box}>
                            <Text>Fouls</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[1].displayValue}</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[1].displayValue}</Text>
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <View style={styles.box}>
                            <Text>Corners</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].statistics[2].displayValue}</Text>
                            </View>
                            <View style={{ width: 150, alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].statistics[2].displayValue}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
    if (route.params.item.competitions[0].status.type.state === 'pre') {
        return (
            <View style={{ alignItems: 'center', backgroundColor: 'red', height: 740 }}>
                <View style={{ height: 1 }}></View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => navigation.navigate('Line ups', { item: route.params.item })}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: 350, alignItems: 'center' }}>
                                <Text>{route.params.item.name}</Text>
                                <Text>{route.params.item.competitions[0].status.type.detail.slice(0, 16)} {Math.round(route.params.item.competitions[0].status.type.detail.slice(21, -10)) + 7}{route.params.item.competitions[0].status.type.detail.slice(-10, -3)}</Text>
                            </View>
                            <View style={{ height: 15 }}></View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.teambox}>
                                    <Image source={{ uri: route.params.item.competitions[0].competitors[1].team.logo }} width={50} height={50} />
                                    <Text>{route.params.item.competitions[0].competitors[1].team.displayName}</Text>
                                </View>
                                <View style={{ width: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{route.params.item.competitions[0].competitors[1].score}</Text>
                                    <Text>VS</Text>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{route.params.item.competitions[0].competitors[0].score}</Text>
                                </View>
                                <View style={styles.teambox}>
                                    <Image source={{ uri: route.params.item.competitions[0].competitors[0].team.logo }} width={50} height={50} />
                                    <Text>{route.params.item.competitions[0].competitors[0].team.displayName}</Text>
                                </View>
                            </View>
                            <View style={{ height: 15 }}></View>
                        </View>
                    </TouchableOpacity>


                </View>
                <ScrollView>
                    <View style={{ width: 360, alignItems: 'center' }}>
                        <View style={{ height: 10 }}></View>
                        <View style={styles.stats}>
                            <Text >Form</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={{ width: 170, alignItems: 'center' }}>
                                <Text style={styles.text}>{route.params.item.competitions[0].competitors[1].form}</Text>
                            </View>
                            <View style={{ width: 170, alignItems: 'center' }}>
                                <Text style={styles.text}>{route.params.item.competitions[0].competitors[0].form}</Text>
                            </View>
                        </View>
                        <View style={{ height: 10 }}></View>
                        <View style={styles.stats}>
                            <Text >League ranking</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={{ width: 170, alignItems: 'center' }}>
                                <Text style={styles.text}>{teamstats2.team.record.items[0].stats[23].value}</Text>
                            </View>
                            <View style={{ width: 170, alignItems: 'center' }}>
                                <Text style={styles.text}>{teamstats1.team.record.items[0].stats[23].value}</Text>
                            </View>
                        </View>
                        <View style={{ height: 10 }}></View>
                        <View style={styles.stats}>
                            <Text >Total Goals scored</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={{ width: 170, alignItems: 'center' }}>
                                <Text style={styles.text}>{teamstats2.team.record.items[0].stats[5].value}</Text>
                            </View>
                            <View style={{ width: 170, alignItems: 'center' }}>
                                <Text style={styles.text}>{teamstats1.team.record.items[0].stats[5].value}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

}

export default GameStats

const styles = StyleSheet.create({
    box: {
        width: 358,
        padding: 5,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 5

    },
    teambox: {
        width: 130,
        alignItems: 'center'
    },
    header: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'gray',
        alignItems: 'center',
        padding: 8,

    },
    row: {
        flexDirection: 'row',
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderStyle: 'solid',
        width: 355,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    stats: {
        borderTopWidth: 2,
        borderTopColor: 'black',
        borderStyle: 'solid',
        width: 355,
        alignItems: 'center',
        backgroundColor: 'white'
    }
})