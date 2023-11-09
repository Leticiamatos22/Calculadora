import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './Components/Caixa/Box';
import Buttons from './Components/Botao/Buttons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora</Text>
      <Box />
      <Buttons />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBC7C7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontSize: 30,
    height: 150,
    color: 'black'
  },
});
