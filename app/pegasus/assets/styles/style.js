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
        maxWidth: '75%',
        maxHeight: '50%',
        marginLeft: '12.5%',
    },
    logoTexto: {
        resizeMode: "contain",
        maxWidth: '75%',
        maxHeight: '100%',
        marginLeft: '12.5%',
    },
    whiteText: {
        color: "white"
    },
    padding5: {
        paddingTop: 5,
    },
    button: {
        backgroundColor: Contantes.cores.laranja,
    }
});
