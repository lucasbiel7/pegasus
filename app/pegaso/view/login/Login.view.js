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
                <Input placeholder=" Usuário" leftIcon={
                    <Icon name="user" size={22} color="black" />
                } />
                <Input placeholder=" Senha" style={{ color: 'black' }} leftIcon={
                    <Icon name="key" size={22} color="black" />
                } />
                <Button title="Entrar" icon={
                    <Icon name="sign-in" color="black" />
                } containerStyle={globalStyle.button} />
            </View>
        );
    }
}
