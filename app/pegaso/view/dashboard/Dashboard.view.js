import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
export default class Dashboard extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { navigate } = this.props.navigation;
        return <View style={{ flex: 2, alignItems: 'center' }}>
            <Button />
        </View>;
    }
}