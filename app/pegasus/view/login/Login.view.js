import React from "react";
import { View, Image } from "react-native";
import globalStyle from "../../assets/styles/style";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { NavigationActions, StackActions } from "react-navigation";
import database from "../../database/firebase";

export default class Login extends React.Component {

    constructor() {
        super();
    }

    login() {
        // const navigateAction = StackActions.reset({
        //     index: 0,
        //     actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
        // });
        // this.props.navigation.dispatch(navigateAction);
        database.collection('users').add({
            name: 'teste',
            password: 'teste'
        });
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <Image style={globalStyle.logo} source={require('./../../assets/image/logo.png')} />
                <Input placeholder=" Usuário" style={globalStyle.padding5} leftIcon={
                    <Icon name="user" size={22} color="black" />
                } />
                <Input placeholder=" Senha" type secureTextEntry={true} style={globalStyle.padding5} leftIcon={
                    <Icon name="key" size={22} color="black" />
                } />
                <Button title="Entrar" style={globalStyle.padding5} onPress={() => { this.login() }} />
            </View>
        );
    }
}
