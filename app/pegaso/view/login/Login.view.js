import React from "react";
import { View, Image } from "react-native";
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
                <Image style={globalStyle.logo} source={require('./../../assets/image/logo.png')} />
                <Input placeholder=" Usuário" style={globalStyle.input} leftIcon={
                    <Icon name="user" size={22} color="black" />
                } />
                <Input placeholder=" Senha" style={globalStyle.input} leftIcon={
                    <Icon name="key" size={22} color="black" />
                } />
                <Button title="Entrar" style={{ marginTop: 4 }} icon={
                    <Icon name="sign-in" color="black" />
                } containerStyle={globalStyle.button} />
            </View>
        );
    }
}
