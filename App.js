/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Pressable } from 'react-native';

const App = () => {
  const nuevaCitahandler = () => {
    console.log('diste Click..');
  };

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>
          Administrador de Citas <Text style={styles.titulo2}>Veterinaria</Text>
        </Text>
        <Pressable style={styles.btnNuevaCita} onPress={nuevaCitahandler}>
          <Text style={styles.btnTexto}>Nueva Cita</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ff33',
    padding: 20
  },
  titulo: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
  },
  titulo2: {
    color: 'green',
    fontSize: 30,
    fontWeight: '900',
  },

  btnNuevaCita: {
    backgroundColor: 'blue',
    padding: 15,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20
  },
  btnTexto: {
    textAlign: 'center',
    color: "#FFF",
    fontSize: 20,
    fontWeight: "900",
    textTransform: 'uppercase'
  },
});

export default App;
