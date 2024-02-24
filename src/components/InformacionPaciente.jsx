import React from 'react'
import { Text, SafeAreaView, View, Pressable, StyleSheet } from 'react-native'


const InformacionPaciente = ({ paciente, setModalPaciente }) => {
    console.log(paciente)
    return (

        <SafeAreaView
            style={styles.contenedor}
        >

            <Text style={styles.titulo}>Informacion<Text style={styles.tituoBold}>{" "}Paciente</Text></Text>
            <View>
                <Pressable
                    style={styles.btnCerrar}
                    onPress={() => setModalPaciente(false)}>
                    <Text style={styles.btnCerrarTexto}>
                        X Cerrar
                    </Text>
                </Pressable>
            </View >
            <Text>{paciente.paciente}</Text>
            <Text>{paciente.paciente}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {

        backgroundColor: "orange",
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
    btnCerrar: {
        marginVertical: 30,
        marginBottom: 30,
        backgroundColor: "#5827a4",
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white"
    },
    btnCerrarTexto: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "900",
        textTransform: 'uppercase'
    },

})

export default InformacionPaciente
