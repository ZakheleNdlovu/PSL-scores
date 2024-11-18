import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameNavigation from './components/football/epl/Games/GameNavigation';
import TeamsNav from './components/football/epl/teams/TeamsNav';
import Standings from './components/football/epl/standings/Standings';
import Navigation from './components/football/epl/Navigation';
import EplControl from './components/football/epl/EplControl';


export default function App() {
  return (
    <View style={styles.container}>
      <EplControl />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,




  },
});
