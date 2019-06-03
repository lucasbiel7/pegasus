
import React from "react";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import Dashboard from "./view/dashboard/Dashboard.view";
import Message from "./view/message/Message.view";
import { Icon } from "react-native-elements";
import constantesStyle from "./assets/styles/constantes.style";

export const bottomNavigate = createBottomTabNavigator({
    Home: { screen: Dashboard },
    Message: { screen: Message }
},
    {
        defaultNavigationOptions: ({ navigation }) => ({

            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case "Dashboard":
                        iconName = "home";
                        break;
                    case "Message":
                        iconName = "message";
                        break;
                }
                return <Icon
                    name={iconName}
                    color={focused ? constantesStyle.cores.darkBlue : 'black'}></Icon>
            }
        }),
    });

const Routing = createStackNavigator({
    // Login: { screen: Login },
    Dashboard: { screen: bottomNavigate }
});

export default Routing;