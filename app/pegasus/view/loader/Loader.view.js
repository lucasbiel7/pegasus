import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import globalStyle from "../../assets/styles/style";
import {
    Image,
} from "react-native-elements";
import constantesStyle from '../../assets/styles/constantes.style';

export default class Loader extends React.Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };
    render() {
        return (
            <View style={[globalStyle.container, { backgroundColor: constantesStyle.cores.laranja }]}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}