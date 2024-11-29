import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const Loader = ({ retry, error }) => {
  return (
    <View style={styles.container}>
      {error && <Error />}
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Cargando ...</Text>
      {error && (
        <TouchableOpacity style={styles.button} onPress={retry}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Loader;
