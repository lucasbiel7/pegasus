import { StyleSheet } from "react-native";
import Contantes from "./constantes.style";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Contantes.cores.darkBlue,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 10,
        paddingRight: 10
    },
    logo: {
        flex: 1,
        alignSelf: "stretch",
        resizeMode: "contain",
        width: "75%",
        marginLeft: "13.5%"
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
