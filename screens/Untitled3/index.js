import { ImageBackground } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable><Pressable><Text style={styles.IHmJxyhM}>Lorem ipsum…</Text></Pressable></Pressable><TextInput style={styles.DViYqIqT}></TextInput><View style={styles.CdAuCkgx}></View><ImageBackground style={styles.sitRkiJY} source={{
        uri: "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/makeperfectgettyimages-1003089626hr.jpg?w=1600&h=900"
      }} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  IHmJxyhM: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    flexDirection: "row",
    flex: "1"
  },
  DViYqIqT: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  CdAuCkgx: {
    height: 60,
    width: 100,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    top: 30,
    left: 30
  },
  sitRkiJY: {
    width: 341,
    height: 326
  }
});
export default Untitled3;