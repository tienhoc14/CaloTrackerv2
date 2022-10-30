import { StatusBar, StyleSheet } from "react-native";
import color from "./color";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.BGcolor,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
    },
})

export default style