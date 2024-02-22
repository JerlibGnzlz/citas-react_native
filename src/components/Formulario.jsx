import React, { useEffect, useState } from 'react';
import { Modal, Text, StyleSheet, SafeAreaView, TextInput, View, ScrollView, Pressable, Alert } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

const Formulario = (
    { modalVisible,
        setModalVisible,
        setPacientes,
        pacientes,
        setPaciente: setPacientesAPP,
        paciente: pacienteOBJ
    }) => {

    const [paciente, setPaciente] = useState("");
    const [id, setId] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fecha, setFecha] = useState(new Date());
    const [sintomas, setSintomas] = useState("");


    useEffect(() => {
        const { nombre, propietario, email, alta, sintoma } = paciente;

        if (Object.keys(pacienteOBJ).length > 0) {
            setPaciente(pacienteOBJ.paciente);
            setId(pacienteOBJ.id)
            setPropietario(pacienteOBJ.propietario);
            setEmail(pacienteOBJ.email);
            setFecha(pacienteOBJ.fecha)
            setTelefono(pacienteOBJ.telefono);
            setSintomas(pacienteOBJ.sintomas);

        }
    }, [paciente]);

    const handleCita = () => {
        if ([paciente, propietario, email, telefono, fecha, sintomas].includes("")) {
            Alert.alert(
                "Error",
                "Todos los Campos son Requeridos",

            );
            return;
        }



        const nuevoPaciente = {
            paciente,
            propietario,
            email,
            telefono,
            fecha,
            sintomas
        };


        if (id) {
            nuevoPaciente.id = id

            const pacienteActualizado = pacientes.map(
                pacienteState => pacienteState.id === nuevoPaciente.id
                    ? nuevoPaciente : pacienteState)

            setPacientes(pacienteActualizado)
            setPacientesAPP({})
            return
        } else {
            nuevoPaciente.id = Date.now()
            setPacientes([...pacientes, nuevoPaciente]);

        }

        setId("")
        setModalVisible(!modalVisible);
        setPaciente("");
        setPropietario("");
        setEmail("");
        setTelefono("");
        setFecha(new Date());
        setSintomas("");

    };


    return (

        <Modal
            animationType={"slide"}
            visible={modalVisible}
        >
            <SafeAreaView style={styles.contenido}>
                <ScrollView>

                    <Text
                        style={styles.titulo}
                    >Nueva{" "}<Text style={styles.tituoBold}>Cita</Text></Text>


                    <Pressable
                        onPress={() => {
                            setId("")
                            setModalVisible(!modalVisible)
                            setPacientesAPP({})
                            setPaciente("");
                            setPropietario("");
                            setEmail("");
                            setTelefono("");
                            setFecha(new Date());
                            setSintomas("");
                        }}
                        style={styles.btnCancelar}>
                        <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                            placeholder='Nombre Paciente'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}

                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                            placeholder='Nombre Propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}

                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propietario</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="email-address"
                            placeholder='Email Propietario'
                            placeholderTextColor={'#666'}
                            value={email}
                            onChangeText={setEmail}

                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono Propietario</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="phone-pad"
                            placeholder='Telefono Propietario'
                            placeholderTextColor={'#666'}
                            value={telefono}
                            onChangeText={setTelefono}

                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha de Alta</Text>


                        <View style={styles.container}>
                            <DateTimePicker
                                mode="single"
                                date={fecha}
                                locale="es"

                            />
                        </View>

                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>sintomas</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                            placeholder='Sintomas'
                            placeholderTextColor={'#666'}
                            value={sintomas}
                            onChangeText={setSintomas}

                        />
                    </View>

                    <Pressable
                        style={styles.btnNuevacita}
                        onPress={handleCita}
                    >

                        <Text style={styles.btnNuevaCitaTexto} > Agregar Paciente</Text>
                    </Pressable>

                </ScrollView>
            </SafeAreaView>
        </Modal >

    );
};

const styles = StyleSheet.create(
    {
        contenido: {
            backgroundColor: "#6D28D9",
            flex: 1
        },
        titulo: {
            textAlign: "center",
            fontSize: 20,
            textTransform: "uppercase",
            fontWeight: "900"
        },
        tituoBold: {
            fontWeight: "900"
        },
        campo: {
            marginTop: 15,
            marginHorizontal: 30,
        },
        label: {
            color: "#fff",
            marginBottom: 10,
            marginTop: 15,
            fontSize: 20,
            fontWeight: "600"
        },
        input: {
            backgroundColor: "white",
            padding: 15,
            borderRadius: 10,
        },
        container: {
            flex: 1,
            backgroundColor: '#F5FCFF',
            borderRadius: 10,
        },
        btnCancelar: {
            marginVertical: 30,
            marginBottom: 30,
            backgroundColor: "#5827a4",
            marginHorizontal: 30,
            padding: 15,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "white"
        },
        btnCancelarTexto: {
            color: "#fff",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "900",
            textTransform: 'uppercase'
        },
        btnNuevacita: {
            marginVertical: 30,
            marginHorizontal: 30,
            backgroundColor: "#f59E0B",
            borderRadius: 10,
            padding: 15,


        },
        btnNuevaCitaTexto: {
            textAlign: "center",
            fontSize: 20,
            textTransform: "uppercase",
            fontWeight: "900"

        }

    }
);
export default Formulario;