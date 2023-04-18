import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled9 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.lvbLrHjy}></View><View style={styles.HLaHfJLg}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  lvbLrHjy: {
    height: 60,
    width: 140,
    backgroundColor: "#f60000",
    borderRadius: 0,
    color: "#777777"
  },
  HLaHfJLg: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled9;