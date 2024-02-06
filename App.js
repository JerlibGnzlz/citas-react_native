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
    backgroundColor: 'gray',
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
    backgroundColor: 'red',
  },
  btnTexto: {
    textAlign: 'center',
  },
});

export default App;
