import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Navigation = ({ state, setState }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.box}
                onPress={() => setState(state = 0)}>
                <Text style={styles.text}>Games</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}
                onPress={() => setState(state = 1)}>
                <Text style={styles.text}>Standings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}
                onPress={() => setState(state = 2)}>
                <Text style={styles.text}>Teams</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Navigation

const styles = StyleSheet.create({
    header: {
        width: 359,
        flexDirection: 'row',
        paddingTop: 40,
        alignItems: 'center',
        paddingBottom: 5,
        justifyContent: 'space-evenly'
    },
    box: {
        backgroundColor: 'white',
        width: 117,

        paddingTop: 8,
        alignItems: 'center',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 5
    },
    text: {
        color: 'black',
        fontSize: 18
    }
})