/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Pressable, Modal, FlatList, Alert } from 'react-native';
import Formulario from './src/components/Formulario.jsx';
import Pacientes from './src/components/Pacientes.jsx';
import InformacionPaciente from './src/components/InformacionPaciente.jsx';

const App = () => {


  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [modalPaciente, setModalPaciente] = useState(false);

  const pacienteEditar = (id) => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id);
    setPaciente(pacienteEditar[0]);
  };


  const pacienteEliminar = (id) => {
    Alert.alert(
      "Deseas Elimniar el paciente.?",
      "Un paciente eliminado no se puede recuperar",
      [
        { text: "Cancelar" },
        {
          text: "Si Eliminar", onPress: () => {
            const pacienteActualizados = pacientes.filter(pacientesState => pacientesState.id !== id);
            setPacientes(pacienteActualizados);
          }
        }
      ]
    );
  };

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
            style={styles.listado}
            data={pacientes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <Pacientes
                  item={item}
                  setModalVisible={setModalVisible}
                  pacienteEditar={pacienteEditar}
                  pacienteEliminar={pacienteEliminar}
                  setModalPaciente={setModalPaciente}
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
          paciente={paciente}
          setPaciente={setPaciente}
        />


        <Modal
          visible={modalPaciente}
          animationType='fade'
        >

          <InformacionPaciente />
        </Modal>


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
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
});

export default App;
