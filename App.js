/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Pressable, Modal, FlatList } from 'react-native';
import Formulario from './src/components/Formulario.jsx';
import Pacientes from './src/components/Pacientes.jsx';

const App = () => {


  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);



  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>
          Administrador de Citas <Text style={styles.titulo2}>Veterinaria</Text>
        </Text>
        <Pressable style={styles.btnNuevaCita} onPress={() => setModalVisible(true)}>
          <Text style={styles.btnTexto}>Nueva Cita</Text>
        </Pressable>


        {pacientes.length === 0
          ? <Text style={styles.noPacientes}>No hay paciente</Text>
          : <FlatList
            data={pacientes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <Pacientes
                  item={item}
                />
              );
            }}
          />
        }

        <Formulario
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setPacientes={setPacientes}
          pacientes={pacientes}
        />

      </SafeAreaView>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    // flex: 1,
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
    textAlign: 'center',

  },

  btnNuevaCita: {
    backgroundColor: '#5FD4BF',
    padding: 15,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20
  },
  btnTexto: {
    textAlign: 'center',
    color: "black",
    fontSize: 20,
    fontWeight: "900",
    textTransform: 'uppercase'
  },
  noPacientes: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "black"
  }
});

export default App;
