import React from "react";
import { View, ActivityIndicator, Image } from "react-native";
import styles from "./assets/styles/style";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./assets/image/logo.png")}
          style={styles.logo}
        />
        <ActivityIndicator size="large" color="#00008B" />
      </View>
    );
  }
}
const MainNavigator = createStackNavigator({
  Home: { screen: Home }
});

const App = createAppContainer(MainNavigator);
