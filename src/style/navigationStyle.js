import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const naviStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    bottmContainer: {
      height: 60,
      flexDirection: "row"
    },
    background: {
      height: 800,
      width: 600,
      position: "absolute"
    },
    button: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    buttonText: {
      fontSize: 20,
      color: "#fff",
      fontWeight: "bold"
    },
    title: {
      fontSize: 30,
      color: "#fff",
      fontWeight: "bold",
      backgroundColor: "rgba(0,0,0,0)"
    },
    desc: {
      fontSize: 20,
      color: "#fff",
      backgroundColor: "rgba(0,0,0,0)",
      textAlign: "center"
    }
  });
  
  export default naviStyle;