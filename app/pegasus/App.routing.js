
import React from "react";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";

import { Icon } from "react-native-elements";
import constantesStyle from "./assets/styles/constantes.style";
/**
 * Telas que participam do roteamento
 */
import Dashboard from "./view/dashboard/Dashboard.view";
import Login from "./view/login/Login.view";
import Message from "./view/message/Message.view";


/**
 * Navegação da tela principal
 */
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
                    case "Home":
                        iconName = "home";
                        break;
                    case "Message":
                        iconName = "message";
                        break;
                }
                return <Icon
                    name={iconName}
                    color={focused ? constantesStyle.cores.laranja : 'white'}></Icon>
            }
        }),
        tabBarOptions: {
            activeTintColor: constantesStyle.cores.laranja,
            inactiveTintColor: 'white',
            activeBackgroundColor: constantesStyle.cores.darkBlue,
            inactiveBackgroundColor: constantesStyle.cores.darkBlue,
        },
    });

/**
 * Navegação da tela de login, stack principal
 */
const Routing = createStackNavigator({
    Login: { screen: Login },
    Dashboard: { screen: bottomNavigate }
});

export default Routing;