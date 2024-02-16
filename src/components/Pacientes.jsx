import { Text, StyleSheet, View } from "react-native";



const Pacierntes = ({ item }) => {
  const { paciente, fecha } = item;

  const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha)
    const opciones = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }

    return nuevaFecha.toLocaleDateString("es-ES", opciones)
  }


  return (

    <View>
      <Text style={styles.noPacientes}>
        {paciente}
      </Text>
      <Text>{formatearFecha(fecha)}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  noPacientes: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "black"
  }
});

export default Pacierntes;
