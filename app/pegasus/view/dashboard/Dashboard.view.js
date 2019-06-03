import React from "react";
import { View } from "react-native";
import {
    ThemeProvider,
    Card
} from "react-native-elements";
import pegasusTheme from "../../assets/styles/pegasus.theme";

export default class Dashboard extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <View>
            <ThemeProvider theme={pegasusTheme}>
                <Card>

                </Card>
            </ThemeProvider>
        </View>;
    }
}

