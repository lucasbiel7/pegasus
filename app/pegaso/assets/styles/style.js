import { StyleSheet } from "react-native";
import Contantes from "./constantes.style";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 10,
        paddingRight: 10
    },
    logo: {
        alignSelf: "stretch",
        resizeMode: "contain",
        width: "50%",
        marginLeft: "25%",
        position: 'absolute',
    },
    whiteText: {
        color: "white"
    },
    input: {
        borderWidth: 1
    },
    button: {
        backgroundColor: Contantes.cores.laranja,
    }
});
