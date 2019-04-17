import Login from "./view/login/Login.view";
import { createStackNavigator } from "react-navigation";

const Routing = createStackNavigator({
  Login: { screen: Login }
});
export default Routing;
