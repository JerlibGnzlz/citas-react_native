import { Text, StyleSheet, View, Pressable } from "react-native";



const Pacierntes = ({
  item,
  setModalVisible,
  pacienteEditar,
  pacienteEliminar,
  setModalPaciente
}) => {
  const { paciente, fecha, id } = item;

  const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha);
    const opciones = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    return nuevaFecha.toLocaleDateString("es-ES", opciones);
  };


  return (
    <Pressable
      onLongPress={() => setModalPaciente(true)}
    >

      <View style={styles.contenedor}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>
          {paciente}
        </Text>
        <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

        <View style={styles.contenedorBotones}>
          <Pressable style={[styles.btn, styles.btnEditar]}
            onLongPress={() => {
              setModalVisible(true);
              pacienteEditar(id);
            }}
          >
            <Text style={styles.btnTexto}>Editar</Text>
          </Pressable>

          <Pressable style={[styles.btn, styles.btnEliminar]}
            onLongPress={() => pacienteEliminar(id)}
          >
            <Text style={styles.btnTexto}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "white",
    padding: 20,
    borderBlockColor: "#94a3b8",
    borderBottomWidth: 1
  },
  label: {
    color: "#374151",
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: 10
  },
  texto: {
    color: "#6d28d9",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10
  },
  fecha: {
    color: "#374151",
  }
  ,
  contenedorBotones: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  btnEditar: {
    backgroundColor: "orange"
  },
  btnEliminar: {
    backgroundColor: "red"
  },
  btnTexto: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 12,
    color: "#fff"
  }
});

export default Pacierntes;
