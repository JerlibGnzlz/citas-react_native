import React, { useState } from 'react'
import { Modal, Text, StyleSheet, SafeAreaView, TextInput, View, ScrollView } from 'react-native'
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

const Formulario = ({ modalVisible }) => {

    const [paciente, setPaciente] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [fecha, setFecha] = useState(dayjs());
    const [sintomas, setSintomas] = useState("")

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
                            inputMode="default"
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
                            inputMode="email-address"
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
                            inputMode="phone-pad"
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
                            inputMode="default"
                            placeholder='Sintomas'
                            placeholderTextColor={'#666'}
                            value={sintomas}
                            onChangeText={setSintomas}

                        />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </Modal >

    )
}

const styles = StyleSheet.create(
    {
        contenido: {
            backgroundColor: "#6D28D9",
            flex: 1
        },
        titulo: {
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            marginTop: 15,
            color: "white"
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
        }
    }
)
export default Formulario