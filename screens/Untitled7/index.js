import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.BGyfgvjD} value="Hi there"></TextInput><TextInput style={styles.cEjEyBtR}></TextInput><TextInput style={styles.pkWVOfSY}></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  SEEtXMtF: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  BGyfgvjD: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 297,
    height: 30,
    position: "absolute",
    left: 17,
    top: 83
  },
  cEjEyBtR: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    left: 7,
    top: 207
  },
  pkWVOfSY: {
    backgroundColor: "#d00000",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    left: 8,
    top: 145
  }
});
export default Untitled7;