import React from "react";
import { View, Text, TextInput } from "react-native";
import globalStyle from "../../assets/styles/style";

export default class Login extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <Text style={[globalStyle.whiteText]}>Usuário</Text>
                <TextInput />
                <Text style={[globalStyle.whiteText]}>Senha</Text>
                <TextInput />
            </View>
        );
    }
}
