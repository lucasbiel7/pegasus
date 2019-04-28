import React from "react";
import { View, Text, TextInput } from "react-native";
import globalStyle from "../../assets/styles/style";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

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
                <Input placeholder=" Senha" style={{ color: 'white' }} leftIcon={
                    <Icon name="key" size={22} color="white" />
                } />
                <Button title="Entrar" icon={
                    <Icon name="sign-in" color="white" />
                } containerStyle={globalStyle.button} />
            </View>
        );
    }
}
