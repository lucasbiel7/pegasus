import React from "react";
import { View, Image } from "react-native";
import globalStyle from "../../assets/styles/style";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { NavigationActions, StackActions } from "react-navigation";
import database from "../../database/firebase";
import Usuario from "../../resource/usuario.class";

export default class Login extends React.Component {

    usuario = new Usuario();

    constructor() {
        super();
    }

    login() {
        if (this.usuario.login) {
            database.ref('users').orderByChild('user').equalTo(this.usuario.login).on('value', (snapshot) => {
                let data = snapshot.val();
                if (data) {
                    let itens = Object.values(data);
                    itens.forEach(element => {
                        if (element.password == this.usuario.senha) {
                            this.redirectDashboard();
                        }
                    });
                }
            });
        }
    }

    redirectDashboard() {
        const navigateAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <Image style={globalStyle.logo} source={require('./../../assets/image/logo.png')} />
                <Input placeholder=" Usuário" onChangeText={(login) => this.usuario.login = login} style={globalStyle.padding5} leftIcon={
                    <Icon name="user" size={22} color="black" />
                } />
                <Input placeholder=" Senha" type secureTextEntry={true} onChangeText={(senha) => this.usuario.senha = senha} style={globalStyle.padding5} leftIcon={
                    <Icon name="key" size={22} color="black" />
                } />
                <Button title="Entrar" style={globalStyle.padding5} onPress={() => { this.login() }} />
            </View>
        );
    }
}
