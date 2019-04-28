import React from "react";
import { View, Text, TextInput } from "react-native";
import globalStyle from "../../assets/styles/style";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default class Login extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <Input placeholder=" Usuário" leftIcon={
                    <Icon name="user" size={22} color="white" />
                } />
                <Input placeholder=" Senha" leftIcon={
                    <Icon name="key" size={22} color="white" />
                } />
            </View>
        );
    }
}
