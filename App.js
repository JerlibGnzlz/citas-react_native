/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Pressable, Modal } from 'react-native';
import { Formulario } from './src/components/Formulario';

const App = () => {


  const [modalVisible, setModalVisible] = useState(false)



  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>
          Administrador de Citas <Text style={styles.titulo2}>Veterinaria</Text>
        </Text>
        <Pressable style={styles.btnNuevaCita} onPress={() => setModalVisible(true)}>
          <Text style={styles.btnTexto}>Nueva Cita</Text>
        </Pressable>

        <Formulario
          modalVisible={modalVisible}

        />

      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D1117',
    padding: 20
  },
  titulo: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#39D353',
    fontSize: 30,
    fontWeight: '600',
  },
  titulo2: {
    color: '#F1E05A',
    fontSize: 30,
    fontWeight: '900',
  },

  btnNuevaCita: {
    backgroundColor: '#5FD4BF',
    padding: 15,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20
  },
  btnTexto: {
    textAlign: 'center',
    color: "black",
    fontSize: 20,
    fontWeight: "900",
    textTransform: 'uppercase'
  },
});

export default App;
