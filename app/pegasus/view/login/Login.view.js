import React from "react";
import {
    View,
    Image,
    AsyncStorage
} from "react-native";
import globalStyle from "../../assets/styles/style";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Input,
    Button,
    ThemeProvider
} from 'react-native-elements';
import { NavigationActions, StackActions } from "react-navigation";
import database from "../../database/firebase";
import Usuario from "../../resource/Usuario.class";
import pegasusTheme from "../../assets/styles/pegasus.theme";

export default class Login extends React.Component {

    usuario = new Usuario();
    senhaError = null;


    constructor() {
        super();
    }

    /**
     * Logica criada para buscar o usuário no firebird
     * e realizar as validações necessárias da tela
     * 
     */
    login() {
        if (this.state) {
            this.state.form = {};
        }
        if (this.usuario.login) {
            if (this.usuario.senha) {
                database.ref('users').orderByChild('user').equalTo(this.usuario.login).on('value', (snapshot) => {
                    let data = snapshot.val();
                    if (data) {
                        let itens = Object.values(data);
                        let usuario = itens.filter(usuario => usuario.password == this.usuario.senha)[0];
                        if (usuario) {
                            AsyncStorage.setItem('userToken', usuario.user);
                            this.redirectDashboard();
                        } else {
                            this.falhaLogin();
                        }
                    } else {
                        this.falhaLogin();
                    }
                });
            } else {
                this.setState({ form: { senhaError: 'Campo de senha é obrigatório' } });
            }
        } else {
            this.setState({ form: { usuarioErro: 'Campo de usuário é obrigatório' } });
        }
    }

    falhaLogin() {
        this.setState({ form: { senhaError: 'Usuário ou senha incorretos' } });
    }

    /**
     * Navegando e resetando o stack bar navigation
     */
    redirectDashboard() {
        // const navigateAction = StackActions.reset({
        //     index: 0,
        //     actions: [NavigationActions.navigate({ routeName: 'App' })]
        // });
        // this.props.navigation.dispatch(navigateAction);
        this.props.navigation.navigate('Loader');
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <ThemeProvider theme={pegasusTheme}>
                    <Image style={globalStyle.logo} source={require('./../../assets/image/logo.png')} />
                    <Input placeholder=" Usuário"
                        onChangeText={(login) => this.usuario.login = login}
                        errorMessage={this.state && this.state.form ? this.state.form.usuarioErro : ""}
                        style={globalStyle.padding5} leftIcon={
                            <Icon name="user" size={22} color="black" />
                        } />
                    <Input placeholder=" Senha"
                        secureTextEntry={true}
                        onChangeText={(senha) => this.usuario.senha = senha}
                        style={globalStyle.padding5}
                        errorMessage={this.state && this.state.form ? this.state.form.senhaError : ""}
                        leftIcon={
                            <Icon name="key" size={22} color="black" />
                        } />
                    <Button title="Entrar"
                        style={[{ maxWidth: 80, minWidth: 80, marginLeft: '40%' }, globalStyle.padding5]}
                        onPress={() => { this.login() }} />
                </ThemeProvider>
            </View>
        );
    }
}
