import Login from "./view/login/Login.view";
import { createStackNavigator } from "react-navigation";
import Dashboard from "./view/dashboard/Dashboard.view";

const Routing = createStackNavigator({
    Login: { screen: Login },
    Dashboard: { screen: Dashboard }
});

export default Routing;
