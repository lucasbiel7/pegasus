import React from "react";
import { View, Image } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  NavigationActions
} from "react-navigation";
import styles from "./assets/styles/style";
import Login from "./view/Login.view";

const EntityAction = NavigationActions.navigate({ routeName: "screen:Login" });
export default class Home extends React.Component {
  load(propriedades) {
    // propriedades.navigation.navigate("Login");
  }
  render() {
    setTimeout(() => this.load(this.props), 3000);
    return (
      <View style={styles.container}>
        <Image
          source={require("./assets/image/logo.png")}
          style={styles.logo}
        />
      </View>
    );
  }
}
const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login }
});
const App = createAppContainer(MainNavigator);
