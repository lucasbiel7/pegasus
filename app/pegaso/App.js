import React from "react";
import { StyleSheet, View, ActivityIndicator, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./assets/image/logo.jpeg")}
          style={styles.logo}
        />
        <ActivityIndicator size="large" color="#00008B" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2691E",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: "50%",
    height: "75%",

    "object-fit": "cover"
  }
});
