import { StyleSheet, Font } from '@react-pdf/renderer';
import titleFont from '../assets/fonts/DancingScript-Bold.ttf';
import fontPacifico from '../assets/fonts/Cutscript.ttf';

Font.register({
    family: "Pacifico",
    src: fontPacifico
});

Font.register({
    family: "DancingScriptBold",
    src: titleFont
});

const style = StyleSheet.create({
    gifttitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        color: "#F22248",
        fontSize: "40",
        fontFamily: "DancingScriptBold",
    },
    page: {
        width: "100vh",
        height: "100vh",
        backgroundColor: 'tomato'
    },
    image: {
        position: "absolute",
        backgroundSize: "100% 100%",
        width: "100%",
        height: "100vh",
        alignItems: "center"
    },
    giftcard: {
        width: "100%",
        height: "100vh",
        flexDirection: "row",
        alignItems: "center"
    },
    giftindexs: {
        fontFamily: "Pacifico",
        width: "48%",
        padding: "0 1%",
    },
    giftindex: {
        flexDirection: "row",
        borderBottom: "1",
        textAlign: "left",
        margin: "10px 0",
        fontSize: "15"
    },
    giftpart: {
        width: "50%"
    }
});

export default style;