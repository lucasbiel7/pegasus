import React from "react";
import { View } from "react-native";
import {
    ThemeProvider,
    Image,
    Text,
    Icon,
    Button
} from "react-native-elements";

/**
 * Estilos proprios
 */
import pegasusTheme from "../../assets/styles/pegasus.theme";
import globalStyle from "../../assets/styles/style";
import constantesStyle from "../../assets/styles/constantes.style";
import DashboardStyle from "./Dashboard.style";

export default class Dashboard extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <View style={[{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
        }]}>
            <ThemeProvider theme={pegasusTheme}>
                <View style={{ width: '100%', maxHeight: '15%' }}>
                    <Image
                        style={[globalStyle.logoTexto,]}
                        source={require('./../../assets/image/logo-texto.png')} />
                </View>
                <View>
                    <Button
                        title="Avaliações"
                        style={[DashboardStyle.button.style]}
                        buttonStyle={[DashboardStyle.button.buttonStyle]}
                        titleStyle={[DashboardStyle.button.titleStyle]}
                        icon={
                            <Icon
                                name="new-message"
                                type='entypo'
                                iconStyle={[DashboardStyle.button.iconStyle]}
                                color={constantesStyle.cores.darkBlue} size={25} />
                        } />
                </View>

                <View>
                    <Button
                        title="Barragens"
                        style={[DashboardStyle.button.style]}
                        buttonStyle={[DashboardStyle.button.buttonStyle]}
                        titleStyle={[DashboardStyle.button.titleStyle]}
                        icon={
                            <Icon
                                name="folder-images"
                                type="entypo"
                                iconStyle={[DashboardStyle.button.iconStyle]}
                                color={constantesStyle.cores.darkBlue}
                                size={25} />
                        } />
                </View>

                <View>
                    <Button
                        title="Classificacao das Barragens"
                        style={[DashboardStyle.button.style]}
                        buttonStyle={[DashboardStyle.button.buttonStyle]}
                        titleStyle={[DashboardStyle.button.titleStyle]}
                        icon={
                            <Icon
                                name="list-alt"
                                type="font-awesome"
                                iconStyle={[DashboardStyle.button.iconStyle]}
                                color={constantesStyle.cores.darkBlue} size={25} />
                        } />
                </View>
            </ThemeProvider>
        </View>;
    }
}

