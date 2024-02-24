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

                <View
                    style={styles.contenido}
                >

                    <Text>{paciente.paciente}</Text>

                </View>
            </View >
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
    contenido: {
        backgroundColor: "#FFF",
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    }

})

export default InformacionPaciente
