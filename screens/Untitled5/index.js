import { View } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.hSBfYFeZ}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  hSBfYFeZ: {
    height: 60,
    width: 318,
    backgroundColor: "#f40000",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled5;