import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.nOOFbOtv}></View><View style={styles.zvBAdJZZ}></View><View style={styles2.kEBppMTu}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  nOOFbOtv: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  zvBAdJZZ: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
const styles2 = StyleSheet.create({
  kEBppMTu: {
    height: 60,
    width: 140,
    backgroundColor: "#000",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled4;