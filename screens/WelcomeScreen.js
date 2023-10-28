import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import cameraGirl from "../assets/Img/girl.png";
const WelcomeScreen = ({ navigation }) => {
  const handleCamera = () => {
    navigation.navigate("Camera");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTxt}>Welcome to the Photo gallery App.</Text>
      </View>
      <Image source={cameraGirl} style={{ width: "100%", flex: 2}} />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity style={styles.btnContainer} onPress={handleCamera}>
          <Text style={styles.btnText}>Let's begin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 5,
    backgroundColor: "#fff",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    backgroundColor: "#F9A826",
    width: "85%",
    marginVertical: 10,
    // paddingHorizontal: 40,
    paddingVertical: 8,
    alignSelf: "center",
    borderRadius: 15,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
  },
  titleTxt: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
