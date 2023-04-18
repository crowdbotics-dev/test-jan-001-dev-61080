import { View } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.hSBfYFeZ}></View><View style={styles.nTPzJXIu}></View><View style={styles.dYoaWBtZ}></View></ScrollView>
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
  },
  nTPzJXIu: {
    height: 158,
    width: 310,
    backgroundColor: "#1a0bbd",
    borderRadius: 0,
    color: "#777777"
  },
  dYoaWBtZ: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled5;