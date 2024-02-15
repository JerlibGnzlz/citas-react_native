import { Text, StyleSheet } from "react-native";



const Pacierntes = ({ item }) => {
  const { paciente, fecha } = item;
  return (
    <Text style={styles.noPacientes}>
      {paciente}
    </Text>
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
