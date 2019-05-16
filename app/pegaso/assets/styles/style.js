import { StyleSheet } from "react-native";
import Contantes from "./constantes.style";
export default StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    logo: {
        resizeMode: "contain",
        maxWidth: '50%',
        maxHeight: '50%',
        marginLeft: '25%',
    },
    whiteText: {
        color: "white"
    },
    input: {
        paddingTop: 5,
    },
    button: {
        backgroundColor: Contantes.cores.laranja,
    }
});
