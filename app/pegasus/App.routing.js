
import React from "react";
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";

import { Icon } from "react-native-elements";
import constantesStyle from "./assets/styles/constantes.style";
/**
 * Telas que participam do roteamento
 */
import Dashboard from "./view/dashboard/Dashboard.view";
import Login from "./view/login/Login.view";
import Message from "./view/message/Message.view";
import Loader from "./view/loader/Loader.view";
import { AsyncStorage } from "react-native";
/**
 * Navegação da tela principal
 */
export const bottomNavigate = createBottomTabNavigator({
    Home: { screen: Dashboard },
    Message: { screen: Message },
    Sair: { screen: Loader }
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
                    case "Sair":
                        iconName = "exit-to-app";
                        break;
                }
                return <Icon
                    name={iconName}
                    color={focused ? constantesStyle.cores.laranja : 'white'}></Icon>
            },
            tabBarOnPress: (options) => {
                if (options.navigation.state.routeName == 'Sair') {
                    AsyncStorage.removeItem('userToken');
                }
                options.navigation.navigate(options.navigation.state.routeName);

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
const routing = createStackNavigator({
    Login: { screen: Login }
});

export default createSwitchNavigator({
    Loader: Loader,
    Auth: routing,
    App: bottomNavigate
});